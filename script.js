document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Заборона стандартної поведінки форми

    // Отримання значень полів форми
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Ваша логіка обробки форми (наприклад, відправлення даних на сервер)
    // ...

    // Очищення полів форми
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Додайте код для відображення повідомлення про успішну відправку або обробку форми
});
