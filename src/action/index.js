

export const increaseNumber = (num)=> {
    return{
        type:"INCREMENT",
        payload:num
    }
}
export const decreaseNumber = ()=> {
    return{
        type:"DECREMENT"
    }
}