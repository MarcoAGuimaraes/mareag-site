emailjs.init("8tmkcT2klyjd_Mpny");

document
.getElementById("formContato")
.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

        nome:
            document.getElementById("nome").value,

        email:
            document.getElementById("email").value,

        assunto:
            document.getElementById("assunto").value,

        mensagem:
            document.getElementById("mensagem").value

    };

    emailjs
        .send(
            "service_vqpkane",
            "template_22zcoea",
            params
        )
        .then(function(){

            alert("Mensagem enviada com sucesso.");

            document
                .getElementById("formContato")
                .reset();

        })
        .catch(function(error){

            console.error(error);

            alert(
                "Erro ao enviar mensagem."
            );

        });

});