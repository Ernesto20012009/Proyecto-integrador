emailjs.init({
    publicKey: "yDN5F2nQ1z8xdgDF-"
});

const formulario = document.getElementById("formularioContacto");
const mensajeEstado = document.getElementById("mensajeEstado");



formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_8j495qm",
        "template_9f07x4w",
        formulario
    )
    .then(function() {

        mensajeEstado.innerHTML = `
            <p class="text-success">
                ¡Mensaje enviado correctamente!
            </p>
        `;

        formulario.reset();

    })
    .catch(function(error) {

        console.log(error);

        mensajeEstado.innerHTML = `
            <p class="text-danger">
                Ocurrió un error al enviar el mensaje.
            </p>
        `;

    });

});