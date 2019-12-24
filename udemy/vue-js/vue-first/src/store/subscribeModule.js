//  this for subscribe

export const state = {
    subscribe: "paytm"
}

export const getters = {
    getSubscription(state) {
        return state.subscribe;
    }
}

export const mutations = {
    setSubscription(state, val) {
        state.subscribe = val
    }
}


