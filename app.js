(() => {
  "use strict";

  const classes = window.MASTERCLASSES || [];
  const config = window.APP_CONFIG || {};
  const screens = [...document.querySelectorAll(".screen")];
  const state = { masterclass: null, participant: null, index: 0, score: 0, answers: [], answered: false };

  const $ = (id) => document.getElementById(id);
  const show = (id) => {
    screens.forEach((screen) => { screen.hidden = screen.id !== id; });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const slugFromUrl = () => new URLSearchParams(location.search).get("clase");
  const classUrl = (slug) => `${location.pathname}?clase=${encodeURIComponent(slug)}`;

  function renderSelector() {
    $("class-grid").innerHTML = classes.map((item, index) => `
      <a class="class-card" href="${classUrl(item.slug)}">
        <span class="number">${index + 1}</span>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.presenter)}</p>
        <strong>Comenzar →</strong>
      </a>`).join("");
    show("selector-screen");
  }

  function loadClass(slug) {
    state.masterclass = classes.find((item) => item.slug === slug);
    if (!state.masterclass) return renderSelector();
    $("presenter").textContent = state.masterclass.presenter;
    $("class-title").textContent = state.masterclass.title;
    document.title = `${state.masterclass.title} · Fenomenautas`;
    show("intro-screen");
  }

  function shuffledOptions(options) {
    const unknown = options.find((option) => /no sé/i.test(option.text));
    const regular = options.filter((option) => option !== unknown);
    for (let i = regular.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [regular[i], regular[j]] = [regular[j], regular[i]];
    }
    return unknown ? [...regular, unknown] : regular;
  }

  function startQuiz(event) {
    event.preventDefault();
    if (!$("participant-form").reportValidity()) return;
    state.participant = {
      name: $("participant-name").value.trim(),
      email: $("participant-email").value.trim() || null,
      ageRange: $("participant-age").value || null,
      consent: $("participant-consent").checked
    };
    state.index = 0; state.score = 0; state.answers = []; state.answered = false;
    renderQuestion();
    show("quiz-screen");
  }

  function renderQuestion() {
    const question = state.masterclass.questions[state.index];
    state.answered = false;
    $("progress-label").textContent = `Pregunta ${state.index + 1} de 11`;
    $("score-live").textContent = `Puntaje: ${state.score}`;
    $("progress-bar").style.width = `${(state.index / 11) * 100}%`;
    $("question-type").textContent = question.scored ? "Pregunta evaluativa" : "Pregunta de opinión · No puntúa";
    $("question-text").textContent = question.prompt;
    $("feedback").hidden = true;
    $("feedback").className = "feedback";
    $("next-button").hidden = true;
    $("next-button").textContent = state.index === 10 ? "Ver resultado →" : "Siguiente →";
    $("options").innerHTML = "";
    shuffledOptions(question.options).forEach((option, displayIndex) => {
      const displayKey = String.fromCharCode(65 + displayIndex);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.key = option.key;
      button.innerHTML = `<span class="option-key">${displayKey}</span><span>${escapeHtml(option.text)}</span>`;
      button.addEventListener("click", () => answer(question, option, displayKey, button));
      $("options").appendChild(button);
    });
  }

  function answer(question, option, displayKey, selectedButton) {
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
      correct: question.correct,
      isCorrect
    });
    [...$("options").children].forEach((button) => {
      button.disabled = true;
      if (question.scored && button.dataset.key === question.correct) button.classList.add("correct");
    });
    if (question.scored && !isCorrect) selectedButton.classList.add("wrong");
  if (question.scored) {
  const feedback = $("feedback");
  feedback.classList.add(isCorrect ? "good" : "bad");
  feedback.innerHTML =
    `<strong>${isCorrect ? "¡Correcto!" : "Respuesta incorrecta"}</strong>` +
    escapeHtml(question.feedback);
  feedback.hidden = false;
} else {
  const feedback = $("feedback");
  feedback.classList.add("neutral");
  feedback.innerHTML =
    "<strong>¡Gracias!</strong>" +
    "Tu respuesta fue registrada. Esta pregunta no suma ni resta puntos.";
  feedback.hidden = false;
}
    $("score-live").textContent = `Puntaje: ${state.score}`;
    $("next-button").hidden = false;
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.index < 10) { state.index += 1; renderQuestion(); return; }
    finishQuiz();
  }

  async function saveResult() {
    if (!config.supabaseUrl || !config.supabaseAnonKey) {
      return { saved: false, message: "Modo de prueba: configurá Supabase para registrar este resultado." };
    }
    const payload = {
      masterclass_slug: state.masterclass.slug,
      participant_name: state.participant.name,
      participant_email: state.participant.email,
      age_range: state.participant.ageRange,
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
    } catch (error) {
      console.error("No se pudo guardar el resultado", error);
      return { saved: false, message: "No pudimos guardar el resultado. Conservá una captura y revisá la configuración de Supabase." };
    }
  }

  async function finishQuiz() {
    show("result-screen");
    const approved = state.score >= 5;
    $("final-score").textContent = state.score;
    $("result-title").textContent = approved ? "¡Aprobaste!" : "Todavía no alcanzaste la aprobación";
    $("result-copy").textContent = approved
      ? "Demostraste comprensión de los contenidos y ya podés descargar tu certificado."
      : "Te recomendamos revisar la masterclass y volver a intentarlo. Necesitás 5 respuestas correctas.";
    $("approved-actions").hidden = !approved;
    $("failed-actions").hidden = approved;
    $("save-status").textContent = "Guardando resultado…";
    const result = await saveResult();
    $("save-status").textContent = result.message;
  }

  function showCertificate() {
    $("certificate-name").textContent = state.participant.name;
    $("certificate-course").textContent = state.masterclass.title;
    $("certificate-score").textContent = `${state.score}/10`;
    $("certificate-date").textContent = new Date().toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
    show("certificate-screen");
    fitCertificate();
  }

  function fitCertificate() {
    const certificate = $("certificate");
    certificate.style.transform = "";
    certificate.parentElement.style.height = "";
    if (innerWidth < 840) {
      const scale = Math.min(1, (innerWidth - 32) / 800);
      certificate.style.transform = `scale(${scale})`;
      certificate.parentElement.style.height = `${certificate.offsetHeight * scale}px`;
    }
  }

async function certificateCanvas() {
  if (!window.html2canvas) {
    throw new Error("La librería de descarga todavía no cargó.");
  }

  const original = $("certificate");
  const clone = original.cloneNode(true);
  const sandbox = document.createElement("div");

  sandbox.style.cssText =
    "position:fixed;left:-10000px;top:0;width:800px;" +
    "overflow:visible;background:#fffdf5;";

  clone.style.cssText =
    "width:800px;min-height:590px;margin:0;" +
    "transform:none;transform-origin:initial;";

  sandbox.appendChild(clone);
  document.body.appendChild(sandbox);

  try {
    await document.fonts.ready;

    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve))
    );

    return await window.html2canvas(clone, {
      scale: 2,
      backgroundColor: "#fffdf5",
      width: 800,
      height: clone.scrollHeight,
      windowWidth: 1000,
      windowHeight: clone.scrollHeight,
      useCORS: true
    });
  } finally {
    document.body.removeChild(sandbox);
  }
}

  $("participant-form").addEventListener("submit", startQuiz);
  $("next-button").addEventListener("click", nextQuestion);
  $("back-to-selector").addEventListener("click", () => { history.pushState({}, "", location.pathname); renderSelector(); });
  $("show-certificate").addEventListener("click", showCertificate);
  $("retry-button").addEventListener("click", () => { state.index = 0; state.score = 0; state.answers = []; renderQuestion(); show("quiz-screen"); });
  $("download-png").addEventListener("click", downloadPng);
  $("download-pdf").addEventListener("click", downloadPdf);
  addEventListener("resize", fitCertificate);

  loadClass(slugFromUrl());
})();
