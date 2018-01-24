module.exports=function bindFUnctions(functions) {
    functions.forEach(f=>(this[f]=this[f].bind(this)))
}