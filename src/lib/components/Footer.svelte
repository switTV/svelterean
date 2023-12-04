<script>
    
</script>

<style>
    .Footer {
        width: 100%;
        height: 80px;

        display: flex;
        justify-content: center;
        background-color: #28965A;
    }

    .Footer_container {
        width: 70vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .Footer_container .Footer_logo h2{
        color: #FFF;
    }
    
    .Footer_container .Footer_text p{
        color: #FFF;
    }

    @media screen and (max-width: 768px) {
        .Footer_container {
            width: 90vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->
<div class="Footer">
    <div class="Footer_container">
        <div class="Footer_logo">
            <h2>Svelterean</h2>
        </div>
        <div class="Footer_text">
            <p>Hecho con 💙 en Argentina</p>
        </div>
    </div>
</div>