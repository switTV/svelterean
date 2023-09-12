<script lang="ts">
    let mouseX = 0
    let mouseY = 0

    function handleMouseMove(event:any) {
        mouseX = event.clientX
        mouseY = event.clientY
    }

    export let data
    console.log(data)
</script>

<style>
    .Header {
        width: 100%;
        height: 70vh;

        display: flex;
        justify-content: center;
    }

    .Header_container {
        width: 70vw;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Header .Header_container .Header_container_video{
        position: relative;
    }

    
    .Header .Header_container .Header_container_video .Header_container_video_shadow {
        width: 400px;
        height: 200px;
        background-color: #FF3E00;
        top: 20px;
        left: 20px;
        border-radius: 5px;

        z-index: -1;
        position: absolute;
    }
    
    .Header .Header_container .Header_container_video iframe {
        border-radius: 5px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Header" on:mousemove={handleMouseMove}>
    <div class="Header_container">
        <div class="Header_container_text">
            <h2>Svelterean</h2>
            <p>Enamorado de svelte</p>
        </div>
        <div class="Header_container_video">
            <iframe width="400" height="200" src="https://www.youtube.com/embed/{data.props.data.items[0].id.videoId}?si=QPY2M1IWcHBfSVzL" title="YouTube video player" style="transform: translate({mouseX / 60}px, {mouseY /60}px);" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="Header_container_video_shadow" style="transform: translate({mouseX / 40}px, {mouseY /40}px);">

            </div>
        </div>
    </div>
</div>