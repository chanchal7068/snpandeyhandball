document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Event Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventItems = document.querySelectorAll('.event-grid-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active classes inside buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            eventItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'scaleUpFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) both';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Interactive Registration Form Modal Popup
    const modal = document.getElementById('event-signup-modal');
    const modalClose = document.querySelector('.modal-form-close');
    const triggerButtons = document.querySelectorAll('.btn-register-trigger');
    const selectedEventName = document.getElementById('selected-event-name');

    triggerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const eventName = btn.getAttribute('data-event');
            selectedEventName.textContent = eventName;
            modal.classList.add('show');
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === modalClose) {
                modal.classList.remove('show');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
});
