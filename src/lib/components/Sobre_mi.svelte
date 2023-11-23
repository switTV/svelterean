<script lang="ts">
</script>

<style>
    .SobreMi_img {
        width: 700px;
        height: 300px;
        background-image: url("../../assets/imagen_sobre_mi.jpg");
        background-size: cover;
        border-radius: 5px;
        background-position-y: 20%;
    }

    .SobreMi {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
    }

    .SobreMi .SobreMi_text h2{
        margin-bottom: 20px;
    }

    .SobreMi_container {
        width: 70vw;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .SobreMi_container .SobreMi_text {
        width: 400px;
    }

    span {
        color: #FF3E00;
    }

    a {
        color: #FF3E00;
    }

    @media screen and (max-width: 768px) {
        .SobreMi_container {
            width: 90vw;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .SobreMi_img {
            width: 90vw;
            height: 300px;
            background-image: url("../../assets/imagen_sobre_mi.jpg");
            background-size: cover;
            border-radius: 5px;
            background-position-y: 20%;
        }

        .SobreMi {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin-top: 20px;
        }

        .SobreMi .SobreMi_text {
            width: 90vw;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 1600px) {
        .SobreMi_img {
            width: 40vw;
            height: 400px;
            background-image: url("../../assets/imagen_sobre_mi.jpg");
            background-size: cover;
            border-radius: 5px;
            background-position-y: 20%;
        }

        .SobreMi .SobreMi_text {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {
        .SobreMi_container {
            width: 70vw;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .SobreMi_img {
            width: 70vw;
            height: 300px;
            background-image: url("../../assets/imagen_sobre_mi.jpg");
            background-size: cover;
            border-radius: 5px;
            background-position-y: 20%;
        }

        .SobreMi {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin-top: 20px;
        }

        .SobreMi .SobreMi_text {
            width: 70vw;
            margin-top: 20px;

            display: flex;
            align-items: start;
            text-align: left;
            flex-direction: column;
        }
    }
    @media screen and (max-width: 400px) {
        .SobreMi_container {
            width: 90vw;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .SobreMi_img {
            width: 90vw;
            height: 300px;
            background-image: url("../../assets/imagen_sobre_mi.jpg");
            background-size: cover;
            border-radius: 5px;
            background-position-y: 20%;
        }

        .SobreMi {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin-top: 20px;
        }

        .SobreMi .SobreMi_text {
            width: 90vw;
            margin-top: 20px;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="SobreMi" id="sobre_mi">
    <div class="SobreMi_container">
        <div class="SobreMi_img">
    
        </div>
        <div class="SobreMi_text">
            <h2>Sobre mi</h2>
            <p>
                Soy Máximo Galarza, programador desde los 9 años, enamorado de <span>Svelte</span>.<br><br>
                CEO de mi vida y de mi canal de youtube <a href="https://www.youtube.com/@svelterean">Svelterean</a>🔸<br><br>
                Orgulloso Frontend developer, mas especificamente, <span>Svelte</span> developer
            </p>
        </div>
    </div>
</div>