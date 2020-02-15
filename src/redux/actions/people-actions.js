export function reload(people){
    return {
        type: "PEOPLE_RELOAD",
        people
    }
}
export function load(people){
    return {
        type: "PEOPLE_LOAD",
        people
    }
}

export function setIndex(index){
    return {
        type: "PEOPLE_SET_INDEX",
        index
    }
}
