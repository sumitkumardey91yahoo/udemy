export const setColor = (state, val) => {
    console.log("stage=====>", state)
    state.color = val;
}

export const setName = (state, val) => {
    state.name = val;
}

export const setProduct = (state, pro) => {


  // setTimeout(() => {
    // state.product = [...state.product, ...pro]
    state.product = [...pro]
     //state.product.push(pro)


    console.log(state.product)
  // }, 1000)

}