/**
 * SNP Sports Trust & NGO - Main Javascript File
 * Handles responsive navigation, sticky header, scroll animations, and interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Functionality
    const header = document.getElementById('main-header');
    const topBar = document.querySelector('.top-bar');
    
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
            if (topBar) topBar.classList.add('hidden');
        } else {
            header.classList.remove('scrolled');
            if (topBar) topBar.classList.remove('hidden');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // 2. Mobile Navigation Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('main-nav-menu');
    const body = document.body;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }

    // 3. Dropdown Toggles for Mobile (Click-based for mobile screen sizes)
    const dropdowns = document.querySelectorAll('.nav-dropdown, .mega-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 1200) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });
                    
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // 4. Multi-language Support Toggle Placeholder
    const langBtn = document.getElementById('lang-switch-btn');
    const langMenu = document.getElementById('lang-dropdown-menu');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });

        // Language switch implementation placeholder
        const langItems = langMenu.querySelectorAll('li');
        langItems.forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.getAttribute('data-lang');
                langBtn.querySelector('.current-lang').textContent = item.textContent.trim();
                langMenu.classList.remove('show');
                
                // Show notification to user
                console.log(`Language switched to: ${lang}`);
                // Implement full localization transition logic in future steps
            });
        });
    }

    // 5. Premium Hero Banner Background Slideshow Controller
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicators .indicator');
    
    if (slides.length > 0 && indicators.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        const intervalTime = 5000; // Switch slide every 5 seconds

        const goToSlide = (n) => {
            // Remove active classes
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            
            // Set new active slide
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            goToSlide(currentSlide + 1);
        };

        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        };

        const resetSlideShow = () => {
            clearInterval(slideInterval);
            startSlideShow();
        };

        // Attach click handlers to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
                resetSlideShow();
            });
        });

        // Initialize slideshow
        startSlideShow();
    }

    // 6. Testimonial Slider Controller
    const testSlides = document.querySelectorAll('.test-slide');
    const testIndicators = document.querySelectorAll('.test-indicator');
    
    if (testSlides.length > 0 && testIndicators.length > 0) {
        let currentTestSlide = 0;
        let testInterval;
        const testIntervalTime = 6000; // Change slide every 6 seconds

        const goToTestSlide = (n) => {
            // Remove active classes
            testSlides[currentTestSlide].classList.remove('active');
            testIndicators[currentTestSlide].classList.remove('active');
            
            // Set new active slide
            currentTestSlide = (n + testSlides.length) % testSlides.length;
            
            testSlides[currentTestSlide].classList.add('active');
            testIndicators[currentTestSlide].classList.add('active');
        };

        const nextTestSlide = () => {
            goToTestSlide(currentTestSlide + 1);
        };

        const startTestSlider = () => {
            testInterval = setInterval(nextTestSlide, testIntervalTime);
        };

        const resetTestSlider = () => {
            clearInterval(testInterval);
            startTestSlider();
        };

        // Attach click handlers to indicators
        testIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToTestSlide(index);
                resetTestSlider();
            });
        });

        // Initialize testimonial slider
        startTestSlider();
    }

    // 7. Active Scroll-Triggered Count-up Counters
    const countValues = document.querySelectorAll('.count-value');
    const countersSection = document.getElementById('counters');
    
    if (countValues.length > 0 && countersSection) {
        const duration = 2000; // Animation duration in milliseconds (2.0s)
        
        const startCounting = () => {
            countValues.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const start = 0;
                let startTime = null;

                const animateCount = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const progress = currentTime - startTime;
                    const increment = Math.min(progress / duration, 1);
                    const currentValue = Math.floor(increment * (target - start) + start);
                    
                    // Format number with commas
                    counter.textContent = currentValue.toLocaleString('en-IN');
                    
                    if (progress < duration) {
                        requestAnimationFrame(animateCount);
                    } else {
                        counter.textContent = target.toLocaleString('en-IN');
                    }
                };
                
                requestAnimationFrame(animateCount);
            });
        };

        // Scroll observer setup
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounting();
                        observer.unobserve(entry.target); // Trigger only once
                    }
                });
            }, {
                threshold: 0.15 // Trigger when 15% of section is visible
            });
            
            observer.observe(countersSection);
        } else {
            // Fallback
            startCounting();
        }
    }
});
