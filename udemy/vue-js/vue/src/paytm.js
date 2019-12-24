let state = {
    paytm: 1
}

let getters = {
    getPaytm: (state) => {
        return state.paytm
    }
}

let mutations = {
    setPaytm: (state, val) =>{
        state.paytm = val
    }
}

let actions = {
    actPaytm(state, val) {
        console.log("[][][][][]",state.getters.getName, val)
    }
}

export default { state, mutations, getters, actions};