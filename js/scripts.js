$(document).ready(function () {
    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Apply animation classes on scroll
    function animateElements() {
        $('.fade-in').each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass('show');
            }
        });

        $('.slide-up').each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass('show');
            }
        });
    }

    // Trigger animations on scroll and on page load
    $(window).on('scroll', animateElements);
    animateElements();

    // Navbar background color change on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-light').removeClass('bg-dark');
        } else {
            $('.navbar').addClass('bg-dark').removeClass('bg-light');
        }
    });

    window.onscroll = function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
  


    $(document).ready(function() {
        var text = "Hello, I'm Mayur Kharad";
        var index = 0;
        var speed = 50; // Adjust the typing speed as needed
    
        function type() {
            if (index < text.length) {
                $(".typing-text").text(text.substring(0, index + 1));
                index++;
                setTimeout(type, speed);
            }
        }
    
        type();
    });

    

    // Smooth scrolling
    $('a.nav-link').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });
});

(function(){
    emailjs.init("l0AKMnlyiPXeNV9Ka");
 })();
 

 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare the template parameters
    var templateParams = {
        from_name: name,
        to_name: email,
        message: message,
        reply_to: null
    };

   

console.log(templateParams);
    // Send the email
    emailjs.send('service_lws2e6q', 'template_oz0o5xr', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            console.log('FAILED...', error);
        });
});
