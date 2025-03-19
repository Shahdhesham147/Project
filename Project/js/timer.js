// تحديد مدة المؤقت بالثواني
let timerDuration = 300; // 5 دقائق = 300 ثانية
let timerElement = document.getElementById("timer");
let timerInterval;

// تشغيل المؤقت
function startTimer() {
    let remainingTime = timerDuration;

    // تحديث المؤقت كل ثانية
    timerInterval = setInterval(() => {
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;

        // إضافة صفر إذا كانت القيمة أقل من 10
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // تحديث نص المؤقت
        timerElement.textContent = `${minutes}:${seconds}`;

        // عند انتهاء المؤقت
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            alert("end!");
        }

        remainingTime--;
    }, 1000);
}

// إعادة ضبط المؤقت
function resetTimer() {
    clearInterval(timerInterval); // إيقاف المؤقت القديم
    timerElement.textContent = "05:00"; // إعادة النص الافتراضي
    startTimer(); // إعادة تشغيل المؤقت
}

// تشغيل المؤقت عند تحميل الصفحة
startTimer();