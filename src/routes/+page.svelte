<script lang="ts">
    import type { PageData } from "./$types";

    export let data:PageData

    import Main from "$lib/components/main.svelte";
    import Footer from "../lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Svelterean || enamorado de svelte</title>
</svelte:head>

<style>
    
</style>

<body>
    <Main {data}></Main>
    <Footer></Footer>
</body>