<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    console.log(data)
</script>

<style>
    .main {
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {  
        display: grid;
        width: 50%;
        height: 50%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: 10px 10px;
        grid-auto-flow: row;
        grid-template-areas:
          "img_svelterean text_svelterean text_svelterean"
          "vistas_svelterean subs_svelterean videos_svelterean";
    }

    .text_svelterean {
        grid-area: text_svelterean;
    }

    .img_svelterean {
        grid-area: img_svelterean;
        background-image: url(../../assets/svelterean.jpg);
        background-size: cover;
    }

    .subs_svelterean {
        grid-area: subs_svelterean;
        background-color: #131B23;
    }
    
    .videos_svelterean {
        grid-area: videos_svelterean;
        background-color: #131B23;
    }
    
    .vistas_svelterean {
        grid-area: vistas_svelterean;
        background-color: #131B23;
    }

    .block {
        border-radius: 5px;
        display: grid;
        place-items: start center;
    }

    .block h2, .block h3{
        color: #FBFEF9;
        margin-top: 10px;
    }

    .block h3 {
        font-size: 28px;
        font-family: Poppins;
    }

    .text_svelterean {
        padding: 10px;

        display: grid;
        place-items: start ;
    }

    span {
        color: #28965A;
    }


    @media screen and (max-width: 600px) {
        .container {
            grid-template-columns: repeat(2, 1fr); /* Dos columnas */
            grid-template-areas:
                "text_svelterean text_svelterean"
                "vistas_svelterean subs_svelterean"
                "videos_svelterean videos_svelterean";
            width: 90%;
        }
        .img_svelterean {
            display: none;
        }
    }

    @media screen and (min-width: 900px) {
        .container {
            grid-template-columns: repeat(3, 1fr); /* Tres columnas */
            grid-template-areas:
                "img_svelterean text_svelterean text_svelterean"
                "vistas_svelterean subs_svelterean videos_svelterean";
        }
    }

</style>

<div class="main">
    <div class="container">
      <div class="text_svelterean">
        <div class="text_svelterean_header">
            <h1>Svelterean</h1>
        </div>
        <div class="text_svelterean_paragraph">
            <p>Svelterean fue fundado en 2023 por las ganas de demostrar el potencial y el poder de Svelte/kit
                en habla hispana  <br><br>
                
                mi mision como Devtuber es hacer crecer el ecosistema de Svelte enseñando con el ejemplo
                y con humor(o eso intento)
            </p>
        </div>
      </div>
      <div class="img_svelterean block"></div>
      <div class="subs_svelterean block">
          <h2>Subs</h2>
          <h3><span>+</span>5</h3>
        </div>
        <div class="videos_svelterean block">
        <h2>videos</h2>
        <h3>7</h3>
      </div>
      <div class="vistas_svelterean block ">
        <h2>vistas</h2>
        <h3><span>+</span>5000</h3>
      </div>
    </div>
</div>