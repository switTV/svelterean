<script lang="ts">
    import type { PageData } from "../$types";
    import ViewTransition from "../../lib/components/Navigation.svelte";
    export let data: PageData;
</script>
<style>
    h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        margin-bottom: 10px;
        color: #131B23;
    }
    p {
        color: #131B23;
    }

    .sobre_mi {
        height: 100vh;
        width: 100vw;
        margin-top: 90px;

        display: flex;
        justify-content: center;
    }

    .sobre_mi_container {
        width: 60%;
    }

    .imagen_principal {

        height: 400px;
        background-image: url(../../assets/imagen_sobre_mi.jpg);
        background-position: 30% 10%;
        background-size: cover;
        border-radius: 10px;
    }

    .first_text {
        margin: 20px 0px;
    }

    .history_text p{
        padding-left: 10px;
        border-left: 2px solid;
        padding-bottom: 10px;
        line-height: 1.6;
        color: #131B23;
        text-wrap:balance;
    }

    .history_text a {
        color: #28965A;
    }

    @media screen and (max-width: 900px) {
        .sobre_mi_container {
            width: 80%;
        }
    }

</style>

<!-- markup (zero or more items) goes here -->

<div class="sobre_mi">
    <div class="sobre_mi_container">
        <div class="imagen_principal"></div>
        
        <div class="first_text">
            <h2>Juan Máximo Galarza.</h2>
            <p>
              ¡Hola! Soy Máximo, también conocido como SwitTV. Soy programador de profesión y youtuber como hobby.
            </p>

        </div>
        <div class="history_text">
            <h3>Historia</h3>
            <p>
              Comencé a incursionar en la programación a los 6 años utilizando Scratch en la escuela.
              Unos años más tarde, quise retomar la creación de videojuegos en Scratch, pero en ese momento mi laptop estaba rota.
              <br><br>
              Recuerdo haberle pedido el teléfono a mi hermana a cambio de permitirle usar mi PlayStation 4. Sin embargo, al buscar una alternativa a Scratch en el teléfono, no encontré nada. Fue navegando por YouTube que un día descubrí un interesante <a href="https://www.youtube.com/watch?v=7TezZ2JbvZs">video de Adderly Céspedez</a>, en el cual se recomendaba aprender C++ para el desarrollo de videojuegos.
              <br><br>
              Fue entonces cuando busqué en el teléfono de mi hermana algún entorno de desarrollo (IDE) para trabajar con C++. Finalmente, encontré CxxDroid y descubrí el curso de programación en C++ de <a href="https://www.youtube.com/watch?v=dJzLmjSJc2c&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh">Programacion ATS</a>, que, lamentablemente, ya no está entre nosotros. 
              <br><br>
              Luego al recuperar mi computadora y darme cuenta que hacer juegos no era tan facil, empece a aprender Python para aprender I.A 
              <br>
              Todo iba bien hasta que me salio un mensaje que basicamente me decia que requeria una mejor PC pero yo era pobre :(
              <br>
              asi que empece a aprender Web development  buscando una opcion que me de mas dinero y el resto es historia
            </p>
        </div>
    </div>
</div>

