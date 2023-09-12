<script lang="ts">
    import type { PageData } from "./$types";

    export let data:PageData

    import Nav from "../components/Nav.svelte";
    import Header from "../components/Header.svelte";
    import Carrusel from "../components/Carrusel.svelte";
    import SobreMi from "../components/Sobre_mi.svelte"
    import Footer from "../components/Footer.svelte";
</script>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(h2) {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        color: #FF3E00;
    }
    
    :global(h1) {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        color: #FF3E00;
    }

    :global(p) {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        color: #000;
    }
</style>

<body>
    <Nav></Nav>
    <Header {data}></Header>
    <Carrusel {data}></Carrusel>
    <SobreMi></SobreMi>
    <Footer></Footer>
</body>