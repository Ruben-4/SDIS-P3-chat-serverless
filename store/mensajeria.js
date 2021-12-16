import { addMessage, listening, loggear } from "~/services/firebase"

export const state = () => ({
    messages: [],
    listening: false,
    loggeado: false,
    logg_data: {}
    })

export const mutations = {
    addMessage(state, message) {
        state.messages.push(message)
    },
    checkListen(state,value=true) {
        state.listening = value
    },
    setMessage(state, messages){
        state.messages = messages
    },
    logginState(state, logg, logg_data){
        state.loggeado = logg
        if (logg == true){
            state.logg_data = logg_data
        }else{
            state.logg_data = null
        }
    }
}

export const actions = {  
    
    async addMessage({ state, commit }, message) {
        await addMessage(message)
    },

    async listen({ state, commit }) {
        if(!state.listening) {
            commit('checkListen', true)
            listening(mensajes => {
                commit('setMessage', mensajes)
            })
        }
    },
    async loggin( { state, commit } ){
        if(!state.loggeado){
            await loggear(logg_data => {
                commit('logginState', true )// problema: quiero enviar a la mutacion el dato callback de loggear
            })//controlar error en el registro
        }
    }
}
