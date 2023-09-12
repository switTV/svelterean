<script lang="ts">
</script>

<style>
    .SobreMi_img {
        width: 700px;
        height: 300px;
        background-image: url("../assets/imagen_sobre_mi.jpg");
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
</style>

<!-- markup (zero or more items) goes here -->

<div class="SobreMi" id="sobre_mi">
    <div class="SobreMi_container">
        <div class="SobreMi_img">
    
        </div>
        <div class="SobreMi_text">
            <h2>Sobre mi</h2>
            <p>
                Soy Máximo Galarza, programador frontend enamorado de Svelte. <br><br>
    
                Después de 4 años de estudiar programación, no podía encontrar un framework que se ajustara a mi gusto.<br><br>
                
                Hasta que un día, durante un viaje, decidí que era el momento de cambiar mi vida y aprendí Svelte.
            </p>
        </div>
    </div>
</div>