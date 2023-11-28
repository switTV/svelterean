<script lang="ts">
    import type { PageData } from '../$types';
    import ViewTransition from "../../lib/components/Navigation.svelte"
    export let data: PageData;
</script>

<style>
    .sobre_mi {
        height: 100vh;
        margin-top: 90px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .imagen_principal {
        width: 50%;
        height: 400px;
        background-image: url(../../assets/imagen_sobre_mi.jpg);
        background-position: 30% 10%;
        background-size: cover;
        border-radius: 10px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="sobre_mi">
    <div class="imagen_principal">
    
    </div>
    
    <h2>Máximo Galarza</h2>
    <p>Hola! soy programador <i>Frontend</i>, desde los 9 años</p>
    <br>
</div>
