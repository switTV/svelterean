import type { PageLoad } from './$types';

export const load = (async () => {
    const res_video = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC2ceG7RH57om1JYGxQopMfTJ1rs1nHsu8&q=svelterean&type=video&part=snippet`)
    let data_video = await res_video.json()

    const res_comentario = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyC2ceG7RH57om1JYGxQopMfTJ1rs1nHsu8&videoId=${data_video.items[0].id.videoId}&part=snippet&order=relevance&maxResults=3`)
    let data_comentario = await res_comentario.json()

    return {
        props: {
            data: data_video,
            data2: data_comentario
        }
    };
}) satisfies PageLoad;