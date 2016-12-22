$(function() {
    $('#submit').click(function(e) {
        if ($('#orderingForm')[0].checkValidity()) {
            var cake = 'not ordered';
            var cupcake = 'not ordered';
            if ($('#cake').is(":checked")) {
                cake = $('#cake').val();
            }
            if ($('#cupcake').is(":checked")) {
                cupcake = $('#cupcake').val();
            }
            e.preventDefault();
            $.ajax({
                    url: "https://formspree.io/somethtasty@gmail.com",
                    method: "POST",
                    data: {
                        userName: $('#userName').val(),
                        phoneNumber: $('#phoneNumber').val(),
                        userEmail: $('#userEmail').val(),
                        doneDate: $('#doneDate').val(),
                        cake: cake,
                        cupcake: cupcake,
                        comment: $('#comment').val()
                    },
                    dataType: "json"
                })
                .done(function() {
                    $('form').html('<h1>Ваше замовлення прийняте!</h1>');
                })
                .fail(function() {
                    $('form').html('<h1>Ой, щось сталось =(</h1>');
                });
        }
    });
});
