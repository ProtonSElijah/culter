export function reload(people){
    return {
        type: "RELOAD",
        people
    }
}
export function load(people){
    return {
        type: "LOAD",
        people
    }
}

export function setIndex(index){
    return {
        type: "SET_INDEX",
        index
    }
}
