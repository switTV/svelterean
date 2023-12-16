<script lang="ts">
    import { onMount } from 'svelte';
    import { redirect_to } from '$lib/stores/functions';

    let backgroundColor = "#28965A"
    let userScroll = 0
    let userWidth = 0
    
    function changeNavColorByScroll() {
        userScroll = window.scrollY
        
        if (userScroll <= 50) {
            backgroundColor = "#28965A"
        }
        else {
            backgroundColor = "#17502ab2"
        }
    }
    
    onMount(() => {
        userWidth = window.innerWidth
        window.addEventListener('scroll', changeNavColorByScroll);

        return () => {
            window.removeEventListener('scroll', changeNavColorByScroll);
        };
  });
</script>

<style>
    .Nav {
        width: 100%;
        height: 7.5vh;

        border-radius: 0px 0px 10px 10px;
        transition: background-color .2s ease;
        backdrop-filter: blur(4px);

        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        z-index: 999;
    
        view-transition-name: header;
    }

    .Nav h1 {
        font-size: 36px;
        font-family: "Montserrat", sans-serif;
        color: #FBFEF9;
        cursor: pointer;
    }
    
    .Nav .Nav_container {
        width: 70vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .Nav .Nav_container .Nav_container_obj_link svg{
        color: #FBFEF9;
        font-size: 30px;
    }

    .Nav_container_obj_link ul{
        display: flex;
        flex-direction: row;
    }
    
    .Nav_container_obj_link ul li{
        list-style: none;
        margin-left: 10px;
    }
    
    .Nav_container_obj_link ul li a{
        text-decoration: none;
        color: #FBFEF9;
        font-family: "Montserrat", sans-serif;
        transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    @media screen and (max-width: 400px) {
        .Nav .Nav_container {
            width: 90vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Nav" style="background-color: {backgroundColor};" on:scroll={()=>(changeNavColorByScroll)}>
    <div class="Nav_container">
        <div class="Nav_container_logo">
            <h1 on:click={() => (redirect_to("/"))}>S</h1>
        </div>
        <div class="Nav_container_obj_link">
            {#if userWidth <= 720}
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-deep" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
            {:else}
                <ul>
                    <li><a href="/maximo">Maximo</a></li>
                    <li><a href="/svelterean">Svelterean</a></li>
                </ul>
            {/if}
        </div>
    </div>
</div>