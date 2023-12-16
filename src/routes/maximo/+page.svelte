<script lang="ts">
    import type { PageData } from "../$types";
    import Slider_element from "$lib/components/maximo_components/Slider_element.svelte";
    import { Splide } from "@splidejs/svelte-splide";
    import imagen_sobre_mi from "../../assets/imagen_sobre_mi.jpg"
    import "@splidejs/svelte-splide/css/skyblue";
    
    export let data: PageData;

    let slides = [
        {
            "slide_principal_text": "HBO minus",
            "slide_text": "HBO minus es una página web de peliculas queusa la API de TMDB para sacar sus datos",
            "slide_link": "https://swittv.github.io/HBO-Minus/"
        },
        {
            "slide_principal_text": "Proyecto verduras",
            "slide_text": "Esta página es un proyecto de cuando empece a tener mi propia huerta",
            "slide_link": "https://proyecto-siembra.vercel.app/Verano"
        },
        {
            "slide_principal_text": "JCF sistemas",
            "slide_text": "No le presten mucha atención <br>(no me pagaron por este trabajo xd)",
            "slide_link": "http://jcfsistemas.com/"
        }
    ]

</script>

<!-- markup (zero or more items) goes here -->

<div class="sobre_mi">
    <div class="sobre_mi_container">
        <div class="sobre_maximo">
            <div class="sobre_maximo_text">
                <h1>Juan Máximo Galarza.</h1>
                <p>
                    ¡Hola! Soy Maximo, una persona que siempre usa la misma <span>gorra</span>.<br>
                    Me apasiona tocar la guitarra, hablar <span>Italiano</span> y me especializo
                    en la programacion Frontend. <br><br>
                    
                    Con una sólida formación en la
                    programación y experiencia en <span>JCF sistemas</span>, mi objetivo es
                    enseñar de tecnologia al mismo tiempo que aprender.
                </p>
            </div>
            <div class="sobre_maximo_img" style="background-image: url(https://imgs.search.brave.com/EpKhPa1YgplPWlO-natK8p7Al8py6Pu-scCCxpMfrs0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JlZWEu/cG5n);">

            </div>
        </div>

        <div class="portfolio">
            <Splide
                aria-label="My old jobs"
                options={{
                    perPage: 2,
                    gap: 15,

                    breakpoints: {
                        768: {
                            perPage: 1,
                            arrows: false,
                        },
                    },
                }}
            >
                {#each slides as slide_data}
                    <Slider_element {slide_data}></Slider_element>
                {/each}
            </Splide>
        </div>
    </div>
</div>

<style>
    h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        margin-bottom: 10px;
        color: #131b23;
    }
    p {
        color: #131b23;
    }
    a {
        color: #28965a;
    }

    span {
        color: #FFC02B;
    }

    .sobre_mi {
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .sobre_mi_container {
        width: 60%;

        display: flex;
        align-items: center;
        flex-direction: column;

    }

    .sobre_maximo {
        height: 450px;
        background: #131b23;
        /* background: linear-gradient(90deg, rgba(19,27,35,1) 23%, rgba(47,62,78,1) 100%); */
        margin-bottom: 15px;
        border-radius: 10px;

        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          "Sobre_maximo_text sobre_maximo_img";
    }

    .sobre_maximo_text {
        grid-area: Sobre_maximo_text;

        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        padding-left: 20px;
    }

    .sobre_maximo_img {
        grid-area: sobre_maximo_img;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .sobre_maximo_text h1 {
        color: #fff;
        font-size: 32px;

    }

    .sobre_maximo p {
        color: #fff;
    }

    .sobre_mi h1 {
        margin-bottom: 20px;
    }
    

    @media screen and (max-width: 900px) {
        .sobre_mi_container {
            width: 90%;
        }
    }
    
    @media screen and (max-width: 1540px) {
        .sobre_maximo_img {
            display: none;
        }
        .sobre_maximo {
            height: 450px;
            background: #131b23;
            /* background: linear-gradient(90deg, rgba(19,27,35,1) 23%, rgba(47,62,78,1) 100%); */
            margin-bottom: 15px;
            border-radius: 10px;

            display: grid; 
            grid-auto-columns: 1fr; 
            grid-template-columns: 1fr; 
            grid-template-rows: 1fr; 
            gap: 0px 0px; 
            grid-template-areas: 
              "Sobre_maximo_text";
        }
    }
</style>
