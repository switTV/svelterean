<script lang="ts">
    import {SplideSlide} from "@splidejs/svelte-splide"
    import '@splidejs/svelte-splide/css';
    export let splide
</script>

<style>
    .SplideSlide_container {
        display: flex;
        flex-direction: row;
        border: 2px solid #136F63;
        padding: 20px;
        border-radius: 5px;
        align-items: center;
    }

    .SplideSlide_container .SplideSlide_img_user img{
        border-radius: 50%;
        margin-right: 10px;
    }

    .SplideSlide_container .SplideSlide_text_user {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<SplideSlide>
    <div class="SplideSlide_container">
        <div class="SplideSlide_img_user">
            <img src={splide.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="">
        </div>
        <div class="SplideSlide_text_user">
            <p class="text_user">"{splide.snippet.topLevelComment.snippet.textOriginal}"</p>
        </div>
    </div>
</SplideSlide>