import { goto } from "$app/navigation";

export function redirect_to(direction:string) {
    try {
        goto(`${direction}`)
    } catch (error) {
        console.error(error)
    }
}