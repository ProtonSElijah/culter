export function reloadMatches(matches){
    return {
        type: "MATCHES_RELOAD",
        matches
    }
}
export function loadMatches(matches){
    return {
        type: "MATCHES_LOAD",
        matches
    }
}
