<template>
  <br>
  <h1> Vos Vins : </h1>
  <WinesProducteurs v-if="!stateDisplay" @modifToInput="getDataInput"/>
  <button id="button" v-if="!stateDisplay" v-on:click="addWine">Ajouter un vin</button>
  <FormWine v-if="stateDisplay" :input="input" @modifWinesById="getStateForm"/>
  <button id="button" v-if="stateDisplay" v-on:click="Retour">Retour</button>
</template> 

<script>
import WinesProducteurs from '/src/components/WinesProducteurs.vue'
import FormWine from '/src/components/FormWine.vue'
export default {
  components: {
    WinesProducteurs,
    FormWine
  },
  data() {
    return{ 
      input : [],
      stateDisplay : false
    }
  },
  methods: {
    getDataInput(data) {
      this.input = data
      this.stateDisplay = data.state
    },  
    getStateForm(data){
      this.stateDisplay = data.state
    },
    addWine()
    {
      this.input = []
      this.stateDisplay = true
    },
    Retour()
    {
      this.stateDisplay = false
    }
  }
}
</script>   
<style></style>    