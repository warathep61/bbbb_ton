function generateFortune() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const fortuneTitle = document.getElementById('fortune-title');
    const fortuneDescription = document.getElementById('fortune-description');
    const fortuneResult = document.getElementById('fortune-result');

    if (!day || !month || !year) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }


    const fortuneValue = (day + month + year) % 5;

    let fortune;

    switch (fortuneValue) {
        case 0:
            fortune = {
                title: "ดวงแข็งแรงและมั่นคง",
                description: "ชีวิตของคุณมีความแข็งแกร่งและพร้อมรับมือกับความท้าทายต่างๆ ได้ดี"
            };
            break;
        case 1:
            fortune = {
                title: "ดวงด้านความรัก",
                description: "คุณมีโชคด้านความรัก ความสัมพันธ์ของคุณจะราบรื่นและมีความสุข"
            };
            break;
        case 2:
            fortune = {
                title: "ดวงด้านการงาน",
                description: "การงานของคุณจะเจริญก้าวหน้า มีโอกาสได้รับโปรโมชันหรือการยอมรับในที่ทำงาน"
            };
            break;
        case 3:
            fortune = {
                title: "ดวงด้านการเงิน",
                description: "การเงินของคุณมีแนวโน้มจะดีขึ้น มีโชคลาภทางการเงินเข้ามา"
            };
            break;
        case 4:
            fortune = {
                title: "ดวงด้านสุขภาพ",
                description: "สุขภาพของคุณแข็งแรง ควรรักษาสุขภาพให้ดีเพื่อความสุขในชีวิต"
            };
            break;
        default:
            fortune = {
                title: "ดวงกลาง ๆ",
                description: "ดวงของคุณไม่มีอะไรโดดเด่นมากนัก ชีวิตอยู่ในช่วงเวลาที่สมดุล"
            };
            break;
    }


    fortuneTitle.textContent = fortune.title;
    fortuneDescription.textContent = fortune.description;
    fortuneResult.style.display = "block";
}
