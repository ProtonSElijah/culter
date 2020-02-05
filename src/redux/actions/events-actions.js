export function reload(events){
    return {
        type: "RELOAD",
        events
    }
}
export function load(events){
    return {
        type: "LOAD",
        events
    }
}