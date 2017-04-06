$(document).ready(function() {

    // Slick Slider
    $('.slider-quote').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-quote-select'
    });
    $('.slider-quote-select').slick({
        slidesToShow: 5,
        asNavFor: '.slider-quote',
        dots: false,
        focusOnSelect: true,
        variableWidth: true
    });

    // Shuffle

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function() {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function(i) {
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

    $('.page-ventures .venture-grid li.venture-item').shuffle();

    // COLLAPSE MENU

    $('.slide-button').click(function() {
        $('.menu').toggleClass('open');
    })

    // MAILCHIMP
    // -- Adapted from http://stackoverflow.com/questions/8425701/ajax-mailchimp-signup-form-integration

    $('form input[type="submit"]').bind('click', function(event) {

        if (event) event.preventDefault();

        var form = $(this).parents("form");
        register(form);
    });

    function register($form) {
        // Prepare for Mailchimp
        var email = $form.find('input[type=email]');
        email.attr('name', 'EMAIL');

        var url = $form.find('input[name=list]').val();

        var data = {};
        var dataArray = $form.serializeArray();
        $.each(dataArray, function(index, item) {
            data[item.name] = item.value;
        });

        $.ajax({
            url: url,
            data: data,
            dataType: 'jsonp',
            error: function(err) {
                console.log(err);
                alert("Could not connect to the subscription server. Please try again later.");
            },
            success: function(data) {
                if (data.result != "success") {
                    console.log(data);
                    alert(data.msg);
                } else {
                    $form.find('input[type=submit]').prop('value', 'Success!');
                    $form.find('input[type=submit]').css('background', 'green');
                }
            }
        });
    }

    // Smooth Scroll

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

});

// Google Analytics Supplemental Tracking
var e=document.createElement('div');
e.id='FZVURovXgqkH';
e.style.display='none';
document.body.appendChild(e);

// Check for 404

// Get URL
var url = window.location.href;
// Get DIV
var msg = document.getElementById('404error');
// Check if URL contains the keyword
if( url.search( 'error=404' ) > 0 ) {
// Display the message
msg.style.display = 'block';
}