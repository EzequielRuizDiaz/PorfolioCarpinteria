
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const emailInput = document.getElementById('email_id');
   const emailValue = emailInput.value;

   if (!emailValue.includes('@')) {
     alert('Por favor, ingrese un correo electrónico válido');
     emailInput.focus();
     return;
   }

   btn.value = 'Enviando...';

   const serviceID = 'service_jt54c9c';
   const templateID = 'template_2r4f8ym';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
