const quiz = [
  { question: "¿Te sientes escuchada/o por tu pareja?", scoreIfYes: 1 },
  { question: "¿Te apoya en tus metas y sueños?", scoreIfYes: 1 },
  { question: "¿Te hace sentir culpable o inferior?", scoreIfYes: -1 },
  { question: "¿Sientes libertad para expresarte con sinceridad?", scoreIfYes: 1 }
];

let current = 0;
let score = 0;

function startQuiz() {
  current = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById('quiz-container');
  const q = quiz[current];
  container.innerHTML = `
    <p>${q.question}</p>
    <button onclick="answer(true)">Sí</button>
    <button onclick="answer(false)">No</button>
  `;
}

function answer(isYes) {
  const q = quiz[current];
  if (isYes) score += q.scoreIfYes;
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById('quiz-container');
  let result = "⚠️ Hay señales de alerta. Reflexiona sobre tu relación.";
  if (score >= 3) {
    result = "💖 Tu relación parece muy saludable y positiva.";
  } else if (score <= 0) {
    result = "🧠 Busca apoyo emocional o consejo profesional.";
  }
  container.innerHTML = `<h2>Resultado:</h2><p>${result}</p>`;
}
