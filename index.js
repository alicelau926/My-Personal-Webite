// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function() {
    $('a[href*=\\#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let usermessage = document.getElementById("message").value;
  
  var contactParams = {
    from_name: name,
    from_email: email,
    message: usermessage,
  };

  emailjs.send(service_exsycyf, template_rh9neso, contactParams, publicKey)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });
}
