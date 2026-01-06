$(document).ready(function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Typing effect for hero section
    const text = "Deepak H J";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            $('#typing-effect').text(text.substring(0, i + 1));
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // Animate skill bars on scroll
    $(window).on('scroll', function() {
        $('.progress-bar').each(function() {
            const bar = $(this);
            const barTop = bar.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            if (barTop < windowBottom - 50) {
                const width = bar.attr('aria-valuenow') + '%';
                bar.css('width', width);
            }
        });
    });

    // Portfolio filtering
    $('#portfolio-filters li').on('click', function() {
        $('#portfolio-filters li').removeClass('filter-active');
        $(this).addClass('filter-active');
        const filterValue = $(this).attr('data-filter');
        $('.portfolio-container .portfolio-item').hide();
        if (filterValue === '*') {
            $('.portfolio-container .portfolio-item').show();
        } else {
            $(filterValue).show();
        }
    });

    // Contact form validation and submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const message = $('textarea[name="message"]').val().trim();
        
        if (name && email && subject && message) {
            // Simulate form submission (replace with actual backend integration)
            $('.loading').show();
            $('.error-message').hide();
            $('.sent-message').hide();
            setTimeout(function() {
                $('.loading').hide();
                $('.sent-message').show();
                $('#contactForm')[0].reset();
            }, 2000);
        } else {
            $('.error-message').text('Please fill in all fields.').show();
            $('.sent-message').hide();
        }
    });

    // Portfolio lightbox (simple modal trigger for demo)
    $('.portfolio-lightbox').on('click', function(e) {
        e.preventDefault();
        const imgSrc = $(this).attr('href');
        // For a full lightbox, integrate a library like Magnific Popup; here it's basic
        alert('Lightbox for: ' + imgSrc); // Placeholder
    });
});
$(document).ready(function() {
    // Download button click effect
    $('.btn-download').on('click', function(e) {
        // Optional: Prevent default and add custom behavior (e.g., tracking)
        // e.preventDefault();
        
        // Add a temporary "clicked" class for animation
        $(this).addClass('clicked');
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 300);
        
        // Show a confirmation message
        setTimeout(() => {
            alert('Resume download started! Thank you for your interest.');
        }, 500);
    });
});

// Optional: Add CSS for the clicked class if needed
// .btn-download.clicked { transform: scale(0.95); }