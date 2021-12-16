<!-->
<template>
  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field 
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nick"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="send_messaje"
    >
      Aceptar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Resetear
    </v-btn>

  </v-form>
</template>
 <-->

<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.nick"
            :rules="rule.nick"
            :counter="15"
            label="Nick"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.msg"
            :rules="rule.msg"
            :counter="150"
            label="Mensaje"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
        <v-btn
          text
          @click="resetForm"
        >
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled = '!valid'
          text
          color="primary"
          @click="push"
        >
          Enviar
        </v-btn>
    </v-card-actions>  
  </v-form>
</template>

<script>
  export default {
    data () {
      return{
        valid: false,
        form: { nick: '', 
                msg: ''
        },
        rule:{
          nick: [
            v => (v || '').length > 0 || 'This field is required',
            v => (v || '').length < 15 || 'This field must be less than 15'
          ],
          msg:[
            v => (v || '').length > 0 || 'This field is required',
            v => (v || '').length < 150 || 'This field must be less than 150'
          ]
        },
      }
    },
    
    methods: {
      resetForm () {
        this.form.nick = ''
        this.form.msg = ''
      },
      push (){
        this.$emit('input', {...this.form, date :new Date().toLocaleDateString('fr-CA', {day: '2-digit', month: '2-digit',  year: 'numeric', hour: 'numeric', minute: 'numeric'})})
      }
    }
  }

</script>
