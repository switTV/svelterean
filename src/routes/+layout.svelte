<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
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
    }
    
    :global(h1) {
        font-family: "Montserrat", sans-serif;
        font-size: 26px;
    }

    :global(p) {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        color: #000;
    }

    .scene {
        overflow-x: hidden;
    }
</style>

<div class="scene">
    <slot></slot>
</div>