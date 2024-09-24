document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        // Toggle the answer's display
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Hide the answer
            arrow.style.transform = 'rotate(0deg)'; // Reset arrow
        } else {
            answer.style.display = 'block'; // Show the answer
            arrow.style.transform = 'rotate(180deg)'; // Rotate arrow
        }
    });
});
