<script>
    
</script>

<style>
    .Nav {
        width: 100%;
        height: 10vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .Nav .Nav_container {
        width: 70vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .Nav .Nav_container .Nav_container_obj_link a{
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        color: #000;
        text-decoration: none;
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

<div class="Nav">
    <div class="Nav_container">
        <div class="Nav_container_logo">
            <h1>Svelterean</h1>
        </div>
        <div class="Nav_container_obj_link">
            <a href="#sobre_mi">Sobre mi</a>
        </div>
    </div>
</div>