<template>
    <div v-if="loggeado">
        <ul>
            <lista :items='messages' :logg_data='logg_data' @input='loggout'>
            </lista>
            <formulario @input='addMessage'>
            </formulario>
        </ul>
    </div>
    <div v-else>
      <loggin @input='loggin'></loggin>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
computed: {
    ...mapState('mensajeria', ['messages', 'loggeado', 'logg_data']),

    /*ordenados(){------------------------> pasar a acciones o mutaciones
        const lista = [...messages]
        lista.sort((a,b)=>a.date.localeCompare(b.date))
    }*/
    },
    
methods: {
    ...mapActions('mensajeria', ['addMessage', 'listen', 'loggin', 'loggout'])
    },

fetch() {
    this.listen()
}
}
</script>
