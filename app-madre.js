/*
 * MOTOR MADRE — NO EDITAR.
 * Este archivo controla navegación, puntaje, guardado y certificado.
 * Los cambios habituales se hacen en los cuatro archivos editables indicados en index.html.
 */
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const data = window.QUESTIONNAIRE_DATA || [];
  const intros = window.INTRO_CONTENT || {};
  const config = window.APP_CONFIG || {};
  const screens = [...document.querySelectorAll(".screen")];
  const allowedSlugs = data.map((item) => item.slug);
  const state = {
    masterclass: null,
    intro: null,
    questionIndex: 0,
    score: 0,
    answers: [],
    answered: false,
    participant: null
  };

  function inferSlug() {
    const requested = new URLSearchParams(location.search).get("clase");
    if (allowedSlugs.includes(requested)) return requested;
    const file = location.pathname.split("/").pop().replace(/\.html$/i, "").toLowerCase();
    if (allowedSlugs.includes(file)) return file;
    return "oppenheimer";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[character]);
  }

  function showScreen(id, progress, label) {
    screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
    document.body.classList.toggle("in-intro", id === "screen-intro");
    if (typeof progress === "number") $("progress-bar").style.width = `${progress}%`;
    if (label) $("step-label").textContent = label;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function initialize() {
    const slug = inferSlug();
    state.masterclass = data.find((item) => item.slug === slug);
    state.intro = intros[slug];
    if (!state.masterclass || !state.intro) {
      document.body.innerHTML = '<main class="fatal-error">No se encontró la configuración de esta masterclass.</main>';
      return;
    }
    document.title = `${state.masterclass.title} · Fenomenautas`;
    $("intro-title").textContent = state.intro.portadaTitulo || state.masterclass.title;
    $("intro-subtitle").textContent = state.intro.portadaSubtitulo || "";
    $("intro-subtitle").hidden = !state.intro.portadaSubtitulo;
    $("intro-copy").textContent = state.intro.portadaTexto;
    $("eval-intro-title").textContent = state.intro.evaluacionTitulo;
    $("eval-intro-copy").textContent = state.intro.evaluacionTexto;
    $("eval-intro-objective").textContent = state.intro.evaluacionObjetivo;
    showScreen("screen-intro", 0, "");
  }

  function shuffledOptions(options) {
    const unknown = options.find((option) => /no sé/i.test(option.text));
    const regular = options.filter((option) => option !== unknown);
    for (let index = regular.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [regular[index], regular[randomIndex]] = [regular[randomIndex], regular[index]];
    }
    return unknown ? [...regular, unknown] : regular;
  }

  function startQuiz() {
    state.questionIndex = 0;
    state.score = 0;
    state.answers = [];
    renderQuestion();
    showScreen("screen-quiz", 8, "Veamos cuánto aprendiste");
  }

  function renderQuestion() {
    const question = state.masterclass.questions[state.questionIndex];
    state.answered = false;
    $("question-counter").textContent = `Pregunta ${state.questionIndex + 1} de ${state.masterclass.questions.length}`;
    $("question-text").textContent = question.prompt;
    $("feedback").hidden = true;
    $("feedback").className = "feedback";
    $("question-warning").hidden = true;
    $("question-next").disabled = true;
    $("question-next").textContent = state.questionIndex === state.masterclass.questions.length - 1
      ? "Continuar →" : "Siguiente →";
    $("options-list").innerHTML = "";

    shuffledOptions(question.options).forEach((option, displayIndex) => {
      const displayKey = String.fromCharCode(65 + displayIndex);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-btn";
      button.dataset.optionKey = option.key;
      button.innerHTML = `<span class="option-letter">${displayKey}</span><span>${escapeHtml(option.text)}</span>`;
      button.addEventListener("click", () => selectAnswer(question, option, displayKey, button));
      $("options-list").appendChild(button);
    });

    const completed = state.questionIndex / state.masterclass.questions.length;
    $("progress-bar").style.width = `${8 + Math.round(completed * 72)}%`;
  }

  function selectAnswer(question, option, displayKey, selectedButton) {
    if (state.answered) return;
    state.answered = true;
    const isCorrect = question.scored ? option.key === question.correct : null;
    if (isCorrect) state.score += 1;

    state.answers.push({
      number: question.number,
      prompt: question.prompt,
      selected: displayKey,
      selectedOptionKey: option.key,
      selectedText: option.text,
      correctOptionKey: question.correct,
      isCorrect
    });

    [...$("options-list").children].forEach((button) => {
      button.disabled = true;
      if (button === selectedButton) button.classList.add("selected");
      if (question.scored && button.dataset.optionKey === question.correct) button.classList.add("correct");
    });
    if (question.scored && !isCorrect) selectedButton.classList.add("wrong");

    const feedback = $("feedback");
    if (question.scored) {
      feedback.classList.add(isCorrect ? "good" : "bad");
      feedback.innerHTML = `<strong>${isCorrect ? "¡Correcto!" : "Respuesta incorrecta"}</strong>${escapeHtml(question.feedback)}`;
    } else {
      feedback.classList.add("neutral");
      feedback.innerHTML = "<strong>¡Gracias!</strong>Tu respuesta fue registrada. Esta pregunta no suma ni resta puntos.";
    }
    feedback.hidden = false;
    $("question-next").disabled = false;
  }

  function nextQuestion() {
    if (!state.answered) {
      $("question-warning").hidden = false;
      return;
    }
    if (state.questionIndex < state.masterclass.questions.length - 1) {
      state.questionIndex += 1;
      renderQuestion();
      return;
    }
    showScreen("screen-data", 84, "Tus datos");
  }

  function cleanDni(value) {
    return value.replace(/[.\s]/g, "");
  }

  async function submitData(event) {
    event.preventDefault();
    const form = $("data-form");
    const error = $("form-error");
    error.hidden = true;
    if (!form.reportValidity()) return;

    const dni = cleanDni($("participant-dni").value.trim());
    if (!/^\d{7,8}$/.test(dni)) {
      error.textContent = "El DNI debe tener 7 u 8 números.";
      error.hidden = false;
      return;
    }

    state.participant = {
      name: $("participant-name").value.trim(),
      surname: $("participant-surname").value.trim(),
      dni,
      email: $("participant-email").value.trim(),
      consent: $("participant-consent").checked
    };

    const button = $("data-submit");
    button.disabled = true;
    button.textContent = "Guardando…";
    showResult();
    const saved = await saveResult();
    $("save-status").textContent = saved.message;
    button.disabled = false;
    button.textContent = "Buscar mi certificado →";
  }

  async function saveResult() {
    if (!config.supabaseUrl || !config.supabaseAnonKey) {
      return { saved: false, message: "Modo de prueba: el resultado no se guardó en Supabase." };
    }
    const payload = {
      masterclass_slug: state.masterclass.slug,
      participant_name: state.participant.name,
      participant_surname: state.participant.surname,
      participant_dni: state.participant.dni,
      participant_email: state.participant.email,
      consent: state.participant.consent,
      score: state.score,
      approved: state.score >= 5,
      answers: state.answers,
      opinion_response: state.answers[10]?.selectedText || null,
      completed_at: new Date().toISOString()
    };
    try {
      const response = await fetch(`${config.supabaseUrl.replace(/\/$/, "")}/rest/v1/responses`, {
        method: "POST",
        headers: {
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(await response.text());
      return { saved: true, message: "Resultado guardado correctamente." };
    } catch (exception) {
      console.error("Error de guardado", exception);
      return { saved: false, message: "La evaluación terminó, pero el resultado no pudo guardarse. Revisá Supabase." };
    }
  }

  function showResult() {
    const approved = state.score >= 5;
    $("result-score").textContent = state.score;
    $("result-title").textContent = approved ? "¡Aprobaste!" : "Todavía no alcanzaste la aprobación";
    $("result-copy").textContent = approved
      ? "Ya podés generar y descargar tu certificado de aprobación."
      : "Te recomendamos revisar la masterclass y volver a intentarlo. Necesitás 5 respuestas correctas.";
    $("save-status").textContent = "Guardando resultado…";
    $("certificate-show").hidden = !approved;
    $("retry").hidden = approved;
    showScreen("screen-result", 94, "Tus resultados");
  }

  function retryQuiz() {
    state.questionIndex = 0;
    state.score = 0;
    state.answers = [];
    renderQuestion();
    showScreen("screen-quiz", 8, "Veamos cuánto aprendiste");
  }

  function showCertificate() {
    const fullName = `${state.participant.name} ${state.participant.surname}`;
    $("certificate-name").textContent = fullName;
    $("certificate-course").textContent = state.masterclass.title;
    $("certificate-score").textContent = `${state.score}/10`;
    $("certificate-date").textContent = new Date().toLocaleDateString("es-AR", {
      day: "numeric", month: "long", year: "numeric"
    });
    showScreen("screen-certificate", 100, "Certificado");
    fitCertificate();
  }

  function fitCertificate() {
    const certificate = $("certificate");
    if (!certificate || !certificate.parentElement) return;
    certificate.style.transform = "";
    certificate.parentElement.style.height = "";
    if (window.innerWidth < 840) {
      const scale = Math.min(1, (window.innerWidth - 26) / 800);
      certificate.style.transform = `scale(${scale})`;
      certificate.parentElement.style.height = `${certificate.offsetHeight * scale + 84}px`;
    }
  }

  async function certificateCanvas() {
    if (!window.html2canvas) throw new Error("La librería de descarga no cargó.");
    const clone = $("certificate").cloneNode(true);
    const sandbox = document.createElement("div");
    sandbox.style.cssText = "position:fixed;left:-10000px;top:0;width:800px;overflow:visible;background:#fdf9ef;";
    clone.style.cssText = "width:800px;min-height:590px;margin:0;transform:none;transform-origin:initial;";
    sandbox.appendChild(clone);
    document.body.appendChild(sandbox);
    try {
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return await window.html2canvas(clone, {
        scale: 2,
        backgroundColor: "#fdf9ef",
        width: 800,
        height: clone.scrollHeight,
        windowWidth: 1000,
        windowHeight: clone.scrollHeight,
        useCORS: true
      });
    } finally {
      sandbox.remove();
    }
  }

  async function downloadPng() {
    const canvas = await certificateCanvas();
    const link = document.createElement("a");
    link.download = `certificado-${state.masterclass.slug}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function downloadPdf() {
    const canvas = await certificateCanvas();
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const width = pdf.internal.pageSize.getWidth() - 20;
    const height = width * canvas.height / canvas.width;
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, (pdf.internal.pageSize.getHeight() - height) / 2, width, height);
    pdf.save(`certificado-${state.masterclass.slug}.pdf`);
  }

  $("intro-next").addEventListener("click", () => showScreen("screen-eval-intro", 4, "Veamos cuánto aprendiste"));
  $("eval-start").addEventListener("click", startQuiz);
  $("question-next").addEventListener("click", nextQuestion);
  $("data-form").addEventListener("submit", submitData);
  $("certificate-show").addEventListener("click", showCertificate);
  $("retry").addEventListener("click", retryQuiz);
  $("download-pdf").addEventListener("click", downloadPdf);
  $("download-png").addEventListener("click", downloadPng);
  window.addEventListener("resize", fitCertificate);

  initialize();
})();
