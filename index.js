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
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
    Email.send({
        SecureToken : "3a51b6b1-1c3d-4978-888f-54cb1d41ae78",
        To : 'huifen0926@hotmail.com',
        From : "alicelauhuifen@gmail.com",
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
}