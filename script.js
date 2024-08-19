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
let currentIndex = 0;
let score = 0;
const languageSelect = document.getElementById("languageSelect");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");
const logList = document.getElementById("logList");
const replayButton = document.getElementById("replayButton");

function startGame() {
    score = 0;
    currentIndex = 0;
    logList.innerHTML = ""; // ล้างบันทึกผลการตอบ
    nextWord();
}

function nextWord() {
    if (currentIndex < wordList.length) {
        currentWord = wordList[currentIndex].word;
        speakWord(currentWord);
        replayButton.disabled = false; // เปิดใช้งานปุ่มฟังอีกครั้ง
    } else {
        document.getElementById("displayText").innerText = "จบเกมแล้ว! คุณได้คะแนน " + score + " / " + wordList.length;
        replayButton.disabled = true; // ปิดใช้งานปุ่มฟังอีกครั้ง
    }
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = languageSelect.value;
    utterance.rate = speedSlider.value;
    speechSynthesis.speak(utterance);
}

function replayWord() {
    speakWord(currentWord);
}

function submitAnswer() {
    const userInput = document.getElementById("wordInput").value.trim();
    const correctWord = wordList[currentIndex].word;
    const meaning = wordList[currentIndex].meaning;
    let logEntry = `Word ${currentIndex + 1}: ${correctWord} (${meaning}) | คำตอบของคุณ: "${userInput}" `;

    if (userInput.toLowerCase() === correctWord.toLowerCase()) {
        logEntry += "✅";
        score++;
    } else {
        logEntry += "❌";
    }

    logList.innerHTML += `<li>${logEntry}</li>`;
    document.getElementById("wordInput").value = ""; // ล้างคำตอบที่พิมพ์ไว้

    currentIndex++;
    nextWord();
}

speedSlider.addEventListener("input", function () {
    speedValue.innerText = speedSlider.value;
});
