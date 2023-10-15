// Agrega tus credenciales de Email.js aquí
const EMAILJS_USER_ID = 'l3FRsmN2B-91s_7j7';
const EMAILJS_SERVICE_ID = 'service_8q89dbd';
const EMAILJS_TEMPLATE_ID = 'template_tq2ikxi';

document.getElementById('denunciaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén el contenido de la denuncia
    const denunciaText = document.getElementById('denuncia').value;

    // Configuración para enviar el correo electrónico con Email.js
    emailjs.init(EMAILJS_USER_ID);

    const templateParams = {
        denuncia: denunciaText
    };

    // Envía el correo electrónico
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function (response) {
            alert('La denuncia se ha enviado correctamente.');
            document.getElementById('denunciaForm').reset();
        })
        .catch(function (error) {
            console.error('Error al enviar la denuncia:', error);
            alert('Hubo un error al enviar la denuncia. Por favor, inténtalo de nuevo más tarde.');
        });
});
