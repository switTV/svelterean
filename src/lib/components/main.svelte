<script>
    import { isQuotesActive } from "$lib/stores/quotesStore";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/sea-green';
    import Youtube_comments from "./Youtube_comments.svelte"
    export let data

    let iframe_width = 100
    let iframe_height = 100

    let hora_bsas = new Date().toLocaleTimeString('es-AR', { 
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: "numeric",
        minute: "numeric"
    });

    let current_video_id = data.props.data.items[0].id.videoId


    

</script>

<style>
    .main {
        width: 100vw;
        height: 130vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        gap: 10px 10px;
        height: 110vh;
        width: 90%;
        grid-template-areas:
        "Sobre_maximo Sobre_maximo"
        "Sobre_maximo Sobre_maximo"
        "Sobre_maximo Sobre_maximo"
        "YT clima"
        "YT clima"
        "video video"
        "video video"
        "slider_comments slider_comments";
    }
    .Sobre_maximo {
        grid-area: Sobre_maximo;
        background: linear-gradient(180deg, #131B23 4%, #131b2336 125%), url(../../assets/imagen_sobre_mi.jpg);
        border-radius: 10px;

        display: flex;
        align-items: center;
    }

    .img-card {
        background-size: 100%;
        transition: background-size .2s ease;
        cursor: pointer;
    }
    .YT {
        grid-area: YT;
        background: linear-gradient(180deg, #131B23 4%, #131b2336 125%), url(../../assets/svelterean.jpg);
        border-radius: 10px;

        background-size: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FBFEF9;
    }
    
    .img-card:hover {
        background-size: 103%;
    }

    .Sobre_maximo h2 {
        margin-left: 10px;
        color: #FBFEF9;
    }
    .clima {
        grid-area: clima;
        background-color: #131B23;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #FBFEF9;
    }
    .video {
        grid-area: video;
        background-color: #131B23;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slider_comments {
        grid-area: slider_comments;
        background-color: #131B23;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #FBFEF9;
    }

    .hora_bsas {
        margin-top: 20px;
    }

    .arrow {
        width: 50px;
        height: 50px;
        background-color: #FBFEF9;
    }

    @media screen and (max-width: 768px) {

        .main_container {
            width: 85%;
        }

        .Sobre_maximo {
            background-size: cover;
        }


        .YT {
            background-size: cover;
        }
    }
    
    @media screen and (min-width: 1875px) {
        .main_container {
            width: 40%;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="main">
    <div class="main_container">
        <div class="Sobre_maximo img-card">
            <h2>Sobre Máximo</h2>
        </div>
        <div class="YT img-card">
            <h2>YT</h2>
        </div>
        <div class="clima">
            <h2>hora <br> BS.AS</h2>
            <h2 class="hora_bsas">{hora_bsas}</h2>
        </div>
        <div class="video">
            <iframe style="border-radius: 10px;" width={iframe_width}% height={iframe_height}% src="https://www.youtube.com/embed/{current_video_id}?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
        </div>
        <div class="slider_comments">
            {#if $isQuotesActive == true}
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <Youtube_comments {data}/>
                </SplideSlide>
            </Splide>
            {:else}
                <h2>Se me acabaron las quotes de youtube</h2>
            {/if}
        </div>
    </div>
</div>