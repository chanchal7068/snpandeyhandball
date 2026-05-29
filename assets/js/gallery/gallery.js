document.addEventListener('DOMContentLoaded', () => {
    // Category Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-grid-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Set active state on tab buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    // Trigger keyframes entry animation
                    item.style.animation = 'scaleUpFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) both';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightweight Modal Viewer Functionality
    const modal = document.getElementById('gallery-modal-viewer');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.modal-close');
    const zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImg.src = img.src;

            // Locate caption text inside card
            const captionWrapper = img.closest('.media-card').querySelector('.media-caption h3');
            if (captionWrapper) {
                modalCaption.textContent = captionWrapper.textContent;
            } else {
                modalCaption.textContent = img.alt;
            }
        });
    });

    // Close Modal on Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    // Close Modal on clicking dark background
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === closeBtn) {
                modal.classList.remove('show');
            }
        });
    }

    // Close Modal on Escape keypress
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
});
