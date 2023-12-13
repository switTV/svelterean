<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import { redirect_to } from "$lib/stores/functions";

    export let slide_data:string[]
</script>

<style>
    a {
        color: #28965A;
    }

    .splide_item {
        background-color: #131b23;
        min-height: 250px;
        color: #fbfef9;
        padding: 10px;
        border-radius: 10px;

        display: grid;
        justify-content: center;
        align-items: center;
    }

    .splide_item_background {
        grid-area: splide_item_background;
    }
    .splide_item_text {
        grid-area: splide_item_text;

        text-align: center;
    }
    .splide_item_text_header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .splide_item_text_header h2 {
        margin-right: 10px;
    }

    .activated {
        opacity: 1;
        display: block;
    }

    .splide_item p {
        background-color: #131b23;
        color: #fbfef9;
        margin-top: 10px;
    }

</style>

<!-- markup (zero or more items) goes here -->

<SplideSlide>
    <div class="splide_item splide_item1">
        <div class="splide_item_container">
            <div class="splide_item_text">
                <div class="splide_item_text_header">
                    <h2 on:click={() => (redirect_to(`${slide_data.slide_link}`))}>{slide_data.slide_principal_text}</h2>
                </div>
                <p>
                    {@html slide_data.slide_text}
                </p>
            </div>
        </div>
    </div>
</SplideSlide>