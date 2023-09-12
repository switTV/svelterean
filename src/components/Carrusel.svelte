<script lang="ts">
    import { Splide } from "@splidejs/svelte-splide";
    import CarruselCard from "./Carrusel_card.svelte";
    import '@splidejs/splide/css';

    export let data
    console.log(data)
</script>

<style>
    .Carrusel {
    width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Carrusel .Carrusel_container {
        width: 70vw;

        display: flex;


    }
</style>

<div class="Carrusel">
    <div class="Carrusel_container">
        <Splide style="width: 100%" options={{
            "perPage": 2,
            "arrows": false,
            "gap": "10px",
            "autoplay": true,
        }}>
            {#each data.props.data2.items as splide}
                <CarruselCard {splide}></CarruselCard>
            {/each}
        </Splide>
    </div>
</div>