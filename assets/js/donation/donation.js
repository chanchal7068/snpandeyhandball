function selectAmount(amt) {
    const buttons = document.querySelectorAll('.amount-btn');
    const customInput = document.getElementById('custom-amount-input');

    buttons.forEach(btn => btn.classList.remove('active'));

    // Set active class on clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }

    if (amt === 'custom') {
        customInput.style.display = 'block';
        customInput.value = '';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
        customInput.value = amt;
    }
}
