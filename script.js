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
};

let currentWord = '';
let score = 0;

function startGame() {
  const wordArray = Object.keys(words);
  currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  document.getElementById("question-container").classList.remove("hide");
  document.getElementById("word-hint").textContent = "ฟังคำศัพท์แล้วพิมพ์คำที่ได้ยิน";

  // เรียกฟังก์ชันเพื่อออกเสียงคำศัพท์
  speakWord(currentWord);
}

function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);

  // ดึงค่าความเร็วจาก slider
  const speed = document.getElementById("speed-control").value;
  utterance.rate = speed; // ปรับความเร็ว

  utterance.lang = 'en-US'; // ตั้งค่าภาษาและสำเนียง
  speechSynthesis.speak(utterance);

  document.getElementById("speed-value").textContent = speed; // อัพเดตค่าความเร็วที่แสดงบนหน้าเว็บ
}

function checkAnswer() {
  const userInput = document.getElementById("user-input").value.trim();
  const translation = words[currentWord];

  if (userInput.toLowerCase() === currentWord.toLowerCase()) {
    score++;
    document.getElementById("result").textContent = `ถูกต้อง! ตอบถูกติดต่อกัน: ${score} ครั้ง \nคำศัพท์ "${currentWord}" (${translation})`;
  } else {
    score = 0;
    document.getElementById("result").textContent = `ผิด! ตอบถูกติดต่อกัน: ${score} ครั้ง \nคำตอบที่ถูกคือ "${currentWord}" (${translation})`;
  }
  
  // ออกเสียงคำถัดไป
  startGame();
}

// อัพเดตความเร็วเมื่อเลื่อน slider
document.getElementById("speed-control").addEventListener("input", (event) => {
  const speed = event.target.value;
  document.getElementById("speed-value").textContent = speed; // แสดงค่าความเร็วปัจจุบัน
});