const words = {
  "Abolish": "ยกเลิก",
  "Achieve": "บรรลุผล",
  "Aesthetic": "สุนทรียศาสตร์",
  "Amalgamate": "รวมกัน",
  "Ambiguous": "กำกวม",
  "Ambivalent": "ลังเล",
  "Appoint": "แต่งตั้ง",
  "Approve": "อนุมัติ",
  "Artificial": "เทียม",
  "Attendance": "การเข้าร่วม",
  "Belligerent": "ก้าวร้าว",
  "Benefit": "ผลประโยชน์",
  "Benevolent": "ใจบุญ",
  "Benign": "ไม่เป็นอันตราย",
  "Bizarre": "แปลกประหลาด",
  "Brevity": "ความกระชับ",
  "Brief": "สั้น ๆ",
  "Calculate": "คำนวณ",
  "Capacity": "ความจุ",
  "Catastrophe": "ภัยพิบัติ",
  "Category": "หมวดหมู่",
  "Circumvent": "หลีกเลี่ยง",
  "Civilization": "อารยธรรม",
  "Clandestine": "ลับๆ",
  "Community": "ชุมชน",
  "Compete": "แข่งขัน",
  "Complex": "ซับซ้อน",
  "Concern": "ความกังวล",
  "Concise": "กระชับ",
  "Conflict": "ความขัดแย้ง",
  "Consider": "พิจารณา",
  "Consume": "บริโภค",
  "Conundrum": "ปริศนา",
  "Cooperate": "ร่วมมือ",
  "Courage": "ความกล้าหาญ",
  "Debate": "การโต้วาที",
  "Decline": "ลดลง",
  "Dedicate": "อุทิศ",
  "Defend": "ปกป้อง",
  "Define": "นิยาม",
  "Demonstrate": "สาธิต",
  "Dichotomy": "สิ่งที่แบ่งเป็นสองส่วน",
  "Dilemma": "ภาวะกลืนไม่เข้าคายไม่ออก",
  "Diligent": "ขยัน",
  "Divergent": "แตกต่าง",
  "Dwindle": "ลดน้อยลง",
  "Economy": "เศรษฐกิจ",
  "Efficient": "มีประสิทธิภาพ",
  "Element": "องค์ประกอบ",
  "Eloquent": "มีวาทศิลป์",
  "Empathy": "ความเห็นอกเห็นใจ",
  "Encourage": "ให้กำลังใจ",
  "Ensure": "ทำให้มั่นใจ",
  "Esoteric": "ลึกลับ",
  "Experiment": "การทดลอง",
  "Explore": "สำรวจ",
  "Factor": "ปัจจัย",
  "Focus": "โฟกัส",
  "Foundation": "รากฐาน",
  "Frugal": "ประหยัด",
  "Generate": "สร้าง",
  "Gratitude": "ความกตัญญู",
  "Gullible": "ถูกหลอกง่าย",
  "Hesitate": "ลังเล",
  "Hypothetical": "ตามสมมุติฐาน",
  "Impact": "ผลกระทบ",
  "Imperative": "จำเป็น",
  "Implement": "นำไปปฏิบัติ",
  "Individual": "บุคคล",
  "Industry": "อุตสาหกรรม",
  "Influence": "อิทธิพล",
  "Insidious": "ร้ายกาจ",
  "Investment": "การลงทุน",
  "Jeopardize": "ทำให้เป็นอันตราย",
  "Judicious": "รอบคอบ",
  "Juxtapose": "วางเคียงกัน",
  "Kindle": "จุดไฟ",
  "Kinetic": "เกี่ยวกับการเคลื่อนไหว",
  "Knack": "ความสามารถพิเศษ",
  "Lethargic": "เฉื่อยชา",
  "Majority": "ส่วนใหญ่",
  "Mitigate": "บรรเทา",
  "Momentum": "โมเมนตัม",
  "Nostalgic": "คิดถึงอดีต",
  "Notorious": "มีชื่อเสียงในทางไม่ดี",
  "Nuance": "ความแตกต่างเล็กน้อย",
  "Obscure": "คลุมเครือ",
  "Obsolete": "ล้าสมัย",
  "Optimize": "ปรับให้เหมาะสมที่สุด",
  "Paradox": "ความขัดแย้งในตัวเอง",
  "Persevere": "พยายาม",
  "Pertinent": "เกี่ยวข้อง",
  "Potential": "ศักยภาพ",
  "Quandary": "ภาวะลำบากใจ",
  "Quintessential": "เป็นแก่นแท้",
  "Quixotic": "เพ้อฝัน",
  "Ramification": "ผลกระทบ",
  "Reluctant": "ไม่เต็มใจ",
  "Resilient": "ยืดหยุ่น",
  "Scrutinize": "ตรวจสอบอย่างละเอียด",
  "Serendipity": "ความบังเอิญที่ดี",
  "Skeptical": "สงสัย",
  "Tenacious": "ที่ไม่ยอมง่ายๆ",
  "Transparent": "โปร่งใส",
  "Ubiquitous": "แพร่หลาย",
  "Valid": "ถูกต้อง",
  "Validate": "ตรวจสอบความถูกต้อง",
  "Venerable": "น่าเคารพ",
  "Versatile": "หลากหลาย",
  "Wary": "ระมัดระวัง",
  "Whimsical": "แปลกแหวกแนว",
  "Withstand": "ทนทาน",
  "Xenophobia": "ความกลัวคนต่างชาติ",
  "Yearn": "ปรารถนา",
  "Yield": "ยินยอม",
  "Zany": "ตลกโปกฮา"
}

let currentWord = "";
let streak = 0;
let bestStreak = Number(localStorage.getItem("bestStreak") || 0);
let totalAnswered = 0;
let correctCount = 0;
let log = [];
let isGameStarted = false;

const questionContainer = document.getElementById("question-container");
const logContainer = document.getElementById("log-container");
const languageSelect = document.getElementById("language-select");
const speedControl = document.getElementById("speed-control");
const speedValue = document.getElementById("speed-value");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const replayButton = document.getElementById("replay-button");
const skipButton = document.getElementById("skip-button");
const submitAnswerButton = document.getElementById("submit-answer-button");
const userInput = document.getElementById("user-input");
const wordHint = document.getElementById("word-hint");
const result = document.getElementById("result");
const translation = document.getElementById("translation");
const streakValue = document.getElementById("streak-value");
const bestStreakValue = document.getElementById("best-streak-value");
const totalValue = document.getElementById("total-value");
const accuracyValue = document.getElementById("accuracy-value");
const logList = document.getElementById("log-list");
const logCount = document.getElementById("log-count");
const clearLogButton = document.getElementById("clear-log-button");
const themeToggle = document.getElementById("theme-toggle");

function applySavedPreferences() {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  const savedSpeed = localStorage.getItem("preferredSpeed");
  const savedTheme = localStorage.getItem("preferredTheme");

  if (savedLanguage) languageSelect.value = savedLanguage;
  if (savedSpeed) speedControl.value = savedSpeed;
  if (savedTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");

  updateThemeButtonText();
  updateSpeedLabel();
}

function updateThemeButtonText() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.textContent = isDark ? "☀️ โหมดสว่าง" : "🌙 โหมดมืด";
}

function updateSpeedLabel() {
  speedValue.textContent = `${Number(speedControl.value).toFixed(1)}x`;
}

function setResultText(message, type = "info") {
  result.textContent = message;
  result.className = `result ${type}`;
}

function updateStats() {
  const accuracy = totalAnswered === 0 ? 0 : Math.round((correctCount / totalAnswered) * 100);
  streakValue.textContent = String(streak);
  bestStreakValue.textContent = String(bestStreak);
  totalValue.textContent = String(totalAnswered);
  accuracyValue.textContent = `${accuracy}%`;
}

function resetSessionState() {
  currentWord = "";
  streak = 0;
  totalAnswered = 0;
  correctCount = 0;
  log = [];
}

function speakWord(word) {
  const selectedLanguage = languageSelect.value;
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = selectedLanguage;
  utterance.rate = parseFloat(speedControl.value);
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function getNextWord() {
  const wordList = Object.keys(words);
  const lastWord = currentWord;
  let nextWord = wordList[Math.floor(Math.random() * wordList.length)];

  if (wordList.length > 1) {
    while (nextWord === lastWord) {
      nextWord = wordList[Math.floor(Math.random() * wordList.length)];
    }
  }

  currentWord = nextWord;
  wordHint.textContent = "ฟังคำศัพท์ แล้วพิมพ์คำที่ได้ยิน";
  userInput.value = "";
  translation.textContent = "";
  userInput.focus();
  speakWord(currentWord);
}

function startGame() {
  isGameStarted = true;
  questionContainer.classList.remove("hide");
  logContainer.classList.remove("hide");
  resetButton.disabled = false;
  startButton.disabled = true;
  clearLogButton.disabled = true;

  resetSessionState();
  updateStats();
  updateLog();
  setResultText("เริ่มเกมแล้ว! ฟังเสียงแล้วพิมพ์คำตอบได้เลย", "info");
  getNextWord();
}

function resetGame() {
  if (!isGameStarted) return;

  resetSessionState();
  updateStats();
  updateLog();
  setResultText("รีเซ็ตเกมเรียบร้อย เริ่มรอบใหม่ทันที", "info");
  getNextWord();
}

function replayWord() {
  if (!isGameStarted || !currentWord) return;
  speakWord(currentWord);
}

function skipWord() {
  if (!isGameStarted || !currentWord) return;

  const skippedWord = currentWord;
  const skippedTranslation = words[skippedWord];
  streak = 0;

  log.unshift({
    question: skippedWord,
    userAnswer: "-",
    isCorrect: false,
    translation: skippedTranslation,
    status: "skipped"
  });

  updateStats();
  updateLog();
  setResultText(`ข้ามคำว่า "${skippedWord}" (${skippedTranslation})`, "info");
  getNextWord();
}

function checkAnswer() {
  if (!isGameStarted || !currentWord) {
    setResultText("กรุณากดเริ่มเกมก่อน", "info");
    return;
  }

  const userAnswer = userInput.value.trim();
  if (!userAnswer) {
    setResultText("กรุณาพิมพ์คำตอบก่อนส่ง", "error");
    return;
  }

  const correctAnswer = currentWord;
  const translatedText = words[correctAnswer];
  const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

  totalAnswered += 1;
  if (isCorrect) {
    streak += 1;
    correctCount += 1;
    setResultText(`✅ ถูกต้อง! ตอบถูกติดกัน ${streak} ครั้ง`, "success");
  } else {
    streak = 0;
    setResultText(`❌ ยังไม่ถูก คำที่ถูกคือ "${correctAnswer}"`, "error");
  }

  if (streak > bestStreak) {
    bestStreak = streak;
    localStorage.setItem("bestStreak", String(bestStreak));
  }

  translation.textContent = `คำแปล: ${translatedText}`;
  log.unshift({
    question: correctAnswer,
    userAnswer,
    isCorrect,
    translation: translatedText,
    status: isCorrect ? "correct" : "incorrect"
  });

  updateStats();
  updateLog();
  getNextWord();
}

function updateLog() {
  logList.innerHTML = "";

  log.forEach((entry, index) => {
    const logItem = document.createElement("li");
    logItem.className = `log-item ${entry.status || (entry.isCorrect ? "correct" : "incorrect")}`;
    logItem.innerHTML = `
      <strong>#${index + 1} ${entry.question} (${entry.translation})</strong>
      <div>คำตอบของคุณ: ${entry.userAnswer}</div>
      <div class="meta">${entry.status === "skipped" ? "ข้ามคำนี้" : entry.isCorrect ? "ตอบถูก" : "ตอบผิด"}</div>
    `;
    logList.appendChild(logItem);
  });

  clearLogButton.disabled = log.length === 0;
  logCount.textContent = `${log.length} รายการ`;
}

function clearLog() {
  log = [];
  updateLog();
  setResultText("ล้างประวัติคำตอบแล้ว", "info");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const isDark = currentTheme === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("preferredTheme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("preferredTheme", "dark");
  }
  updateThemeButtonText();
}

function saveGamePreferences() {
  localStorage.setItem("preferredLanguage", languageSelect.value);
  localStorage.setItem("preferredSpeed", speedControl.value);
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
replayButton.addEventListener("click", replayWord);
skipButton.addEventListener("click", skipWord);
submitAnswerButton.addEventListener("click", checkAnswer);
clearLogButton.addEventListener("click", clearLog);
themeToggle.addEventListener("click", toggleTheme);

languageSelect.addEventListener("change", () => {
  saveGamePreferences();
  if (isGameStarted) replayWord();
});

speedControl.addEventListener("input", () => {
  updateSpeedLabel();
  saveGamePreferences();
});

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
});

applySavedPreferences();
updateStats();
updateLog();
setResultText("พร้อมเริ่มเกม! เลือกภาษาแล้วกดปุ่มเริ่มเกม", "info");
