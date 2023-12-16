<script lang="ts">
    export let data

    let youtube_comment = data.props.data_comentarios.items[0].snippet.topLevelComment.snippet.textOriginal
    let youtube_img = data.props.data_comentarios.items[0].snippet.topLevelComment.snippet.authorProfileImageUrl

    let text_first_part = ""
    let text_second_part = ""
    let comment_state = false

    function make_youtube_comment_shorter(num_letters:number) {
        if (youtube_comment.length >= num_letters) {
            text_first_part = youtube_comment.slice(0, num_letters)
            text_second_part = youtube_comment.slice(num_letters)

            youtube_comment = text_first_part
            comment_state = false
        }
        else {
            console.log("el comentario ya es lo demasiado corto")
        }
    }

    function make_youtube_comment_longer () {
        comment_state = !comment_state
        youtube_comment = text_first_part + text_second_part

        if (comment_state == false) {
            make_youtube_comment_shorter(30)
        }
        if (youtube_comment.includes("...")) {
            console.log("hola")
        }
    }

    make_youtube_comment_shorter(30)
</script>

<style>
    .Youtube_comments {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .text_container {
        width: 100%;
    }

    .text_container p {
        color: aliceblue;
        margin-left: 10px;
    }

    .img_user {
        width: 52px;
        height: 45px;
        border-radius: 50%;
    }

    .long:after {
        content: "";
    }
    p:after {
        content: "...";
    }
    
</style>

<!-- markup (zero or more items) goes here -->

<div class="Youtube_comments">
    <div class="img_user" style="background-image: url({youtube_img});">
        
    </div>
    <div class="text_container">
        <p class:long={comment_state == true} on:click={make_youtube_comment_longer}>{youtube_comment}</p>
    </div>
</div>