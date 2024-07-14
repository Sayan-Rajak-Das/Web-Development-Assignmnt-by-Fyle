$(document).ready(function() {
    $("#contactForm").click(function() {
        $("#contactFormModal").css("display", "block");
    });

    $(".close-button").click(function() {
        $("#contactFormModal").css("display", "none");
    });

    $(window).click(function(event) {
        if ($(event.target).is("#contactFormModal")) {
            $("#contactFormModal").css("display", "none");
        }
    });
});


$("#contactForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function() {
    alert('The form was submitted successfully.')
}).fail(function() {
    alert('An error occurred! Please try again later.')
});
});


$(document).ready(function(){
    $('.container3221').on('click', function() {
        $('.container3221').removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).index();

        var images = [
            'images/image5.png', 
            'images/image6.png', 
            'images/image3.png'  
        ];
        
        // Change the src of the image in container321
        $('.container321 img').attr('src', images[index]);
    });
});

