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
let score = 0;
let log = [];

function startGame() {
  document.getElementById('question-container').classList.remove('hide');
  document.getElementById('log-container').classList.remove('hide');

  // เปลี่ยนข้อความและฟังก์ชันของปุ่ม
  const startButton = document.querySelector('button[onclick="startGame()"]');
  startButton.innerText = "รีเซ็ตและเริ่มเกมใหม่";
  startButton.setAttribute("onclick", "resetGame()");

  score = 0;
  log = [];
  getNextWord();
}

function resetGame() {
  // รีเซ็ตทุกอย่างกลับไปที่ค่าเริ่มต้น
  score = 0;
  log = [];
  document.getElementById('user-input').value = "";
  document.getElementById('result').innerText = "";
  document.getElementById('translation').innerText = "";
  document.getElementById('log-list').innerHTML = "";

  // เริ่มเกมใหม่
  getNextWord();
}

function getNextWord() {
  const wordList = Object.keys(words);
  const randomIndex = Math.floor(Math.random() * wordList.length);
  currentWord = wordList[randomIndex];

  // ดึงค่าภาษาเลือกจาก Dropdown
  const selectedLanguage = document.getElementById('language-select').value;

  // กำหนดภาษาสำหรับการออกเสียง
  const utterance = new SpeechSynthesisUtterance(currentWord);
  utterance.lang = selectedLanguage;
  utterance.rate = parseFloat(document.getElementById('speed-control').value);
  speechSynthesis.speak(utterance);

  document.getElementById('word-hint').innerText = "ฟังคำศัพท์แล้วพิมพ์คำที่ได้ยิน";
  document.getElementById('user-input').value = "";
  document.getElementById('result').innerText = "";
  document.getElementById('translation').innerText = "";
}

function replayWord() {
  const selectedLanguage = document.getElementById('language-select').value;
  const utterance = new SpeechSynthesisUtterance(currentWord);
  utterance.lang = selectedLanguage;
  utterance.rate = parseFloat(document.getElementById('speed-control').value);
  speechSynthesis.speak(utterance);
}

function checkAnswer() {
  const userAnswer = document.getElementById('user-input').value.trim();
  const correctAnswer = currentWord;
  const translation = words[correctAnswer];

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    document.getElementById('result').innerText = `ถูกต้อง! ตอบถูกติดกัน: ${score} ครั้ง คำศัพท์ "${correctAnswer}" (${translation})`;
  } else {
    score = 0;
    document.getElementById('result').innerText = `ผิด! คำตอบที่ถูกคือ "${correctAnswer}" (${translation})`;
  }

  // เพิ่ม log บันทึกย้อนหลัง
  log.push({
    question: correctAnswer,
    userAnswer: userAnswer,
    isCorrect: userAnswer.toLowerCase() === correctAnswer.toLowerCase(),
    translation: translation
  });
  updateLog();

  getNextWord();
}

function updateLog() {
  const logList = document.getElementById('log-list');
  logList.innerHTML = "";

  log.forEach((entry, index) => {
    const logItem = document.createElement('li');
    const resultEmoji = entry.isCorrect ? '✅' : '❌';
    logItem.innerText = `Word ${index + 1}: ${entry.question} (${entry.translation}) | คำตอบของคุณ: ${entry.userAnswer} ${resultEmoji}`;
    logList.appendChild(logItem);
  });
}
