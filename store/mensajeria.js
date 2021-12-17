import { addMessage, listening, loggear, desloggear } from "~/services/firebase"

export const state = () => ({
    messages: [],
    listening: false,
    loggeado: false,
    logg_data: {}
    })

export const mutations = {
    añadir_mensajes(state, item_message) {
        state.messages.push(item_message)
    },
    set_listen(state,value=true) {
        state.listening = value
    },
    load_message(state, item_message){
        state.messages = item_message
    },
    logginState(state, logg, logg_data){
        state.loggeado = logg
        if (logg == true){
            state.logg_data = logg_data
        }else{
            state.logg_data = null
        }
    },
    ordenar_datos(state){
        const lista = [...state.messages]
        lista.sort((a,b)=>a.date.localeCompare(b.date))
        state.messages = lista
    }
}

export const actions = {  
    
    async addMessage({ state, commit }, message) {
        await addMessage(message)
    },

    async listen({ state, commit }) {
        if(!state.listening) {
            commit('set_listen', true)
            listening(mensajes => {
                commit('load_message', mensajes)
                commit('ordenar_datos')
            })
        }
    },

    async loggin({ state, commit }){
        if(!state.loggeado){
            await loggear(logg_data => {
                commit('logginState', true, logg_data)
            })
        }
    },

    async loggout({ state, commit }){
        if(state.loggeado){
            await desloggear(logg_data =>{
                commit('logginState', false, logg_data)
            })
        }
    }
}
