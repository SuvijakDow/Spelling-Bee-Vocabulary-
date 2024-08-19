// คำศัพท์และคำแปลที่ใช้ในเกม
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

let currentWord = "";
let score = 0;

// ฟังก์ชันสุ่มคำศัพท์
function getRandomWord() {
    const keys = Object.keys(words);
    return keys[Math.floor(Math.random() * keys.length)];
}

// ฟังก์ชันออกเสียงคำศัพท์
function playWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}

// ฟังก์ชันเริ่มเกม
function startGame() {
    currentWord = getRandomWord();
    playWord(currentWord);
}

// ฟังก์ชันตรวจสอบคำตอบ
function checkAnswer() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultElement = document.getElementById("result");
    const translation = words[currentWord];

    if (userInput.toLowerCase() === currentWord.toLowerCase()) {
        resultElement.textContent = `Correct! The word was "${currentWord}" (${translation})`;
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = `Wrong! The correct word is "${currentWord}" (${translation})`;
        resultElement.style.color = "red";
        score = 0;
        document.getElementById("score").textContent = score;
    }

    document.getElementById("score").textContent = score;
    document.getElementById("user-input").value = "";
    startGame(); // เริ่มเกมใหม่
}

// เริ่มเกมเมื่อคลิกปุ่ม "Play Sound"
document.getElementById("play-sound").addEventListener("click", startGame);

// ตรวจสอบคำตอบเมื่อคลิกปุ่ม "Check Answer"
document.getElementById("check-answer").addEventListener("click", checkAnswer);