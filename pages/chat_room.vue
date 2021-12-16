<template>
    <div v-if="false">
        <ul>
            <formulario @input='addMessage'>
            </formulario>
            <lista :items='messages'>
            </lista>
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
    ...mapState('mensajeria', ['messages']),

    /*ordenados(){
        const lista = [...messages]
        lista.sort((a,b)=>a.date.localeCompare(b.date))
    }*/
    },
    
methods: {
    ...mapActions('mensajeria', ['addMessage', 'listen', 'loggin'])
    },

fetch() {
    this.listen()
}
}
</script>
