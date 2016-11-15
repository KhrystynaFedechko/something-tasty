$(function() {
    $('#submit').click(function(e) {
      e.preventDefault(); 
      $.ajax({
    url: "https://formspree.io/dykakh@gmail.com", 
    method: "POST",
    data: {
        userName: $('#userName').val(),
        phoneNumber: $('#phoneNumber').val(),
        userEmail: $('#userEmail').val(),
        doneDate: $('#doneDate').val(),
        cake: $('#cake').val(),
        cupcake: $('#cupcake').val(),
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
        
    });
}); 