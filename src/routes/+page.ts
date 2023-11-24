import type { PageLoad } from './$types';
import { isQuotesActive } from '$lib/stores/quotesStore';

async function fetchVideos() {
    try {
        const res_video = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC2ceG7RH57om1JYGxQopMfTJ1rs1nHsu8&q=svelterean&type=video&part=snippet&maxResults=1`);
        const data_video = await res_video.json();
        return data_video;
    } catch (error) {
        console.log("ha ocurrido un error", error)
    }
}

async function fetchComments(videoId) {
    try {
        const res_comentario = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyC2ceG7RH57om1JYGxQopMfTJ1rs1nHsu8&videoId=${videoId}&part=snippet&order=relevance&maxResults=3`);
        const data_comentario = await res_comentario.json();
        return data_comentario;
    } catch (error) {
        console.log("error")
    }
}


export const load = (async () => {
    try {
        const data_video = await fetchVideos();
        const videoId = data_video.items[0]?.id.videoId;
    
        let data_comentario = {};
        if (videoId) {
            data_comentario = await fetchComments(videoId);
        }
    
        return {
            props: {
                data: data_video,
                data_comentarios: data_comentario,
            }
        };
    } catch (error) {
        isQuotesActive.set(false)
    }
}) satisfies PageLoad;