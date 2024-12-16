function navigateTo(page) {
    window.location.href = page; // Navigasi ke halaman lain
}

function checkAnswer(questionId, correctAnswer) {
    const userAnswerInput = document.getElementById(questionId);
    const userAnswer = userAnswerInput.value.trim();
    const resultContainer = document.getElementById(`${questionId}-result`);

    // Jika input kosong, tampilkan alert
    if (!userAnswer) {
        alert("⚠️ Silakan isi jawaban terlebih dahulu!");
        userAnswerInput.focus(); // Fokus pada input setelah alert
        return;
    }

    // Cek jawaban
    if (parseInt(userAnswer, 10) === correctAnswer) {
        resultContainer.textContent = "✔️ BENAR"; // Simbol dan kata "BENAR"
        resultContainer.style.color = "green";
    } else {
        resultContainer.textContent = "❌ SALAH"; // Simbol dan kata "SALAH"
        resultContainer.style.color = "red";
    }
}
