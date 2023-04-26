<template>
    <br>
    <h1>Les Vins</h1>
    <br>
    <Wines />
</template> 

<script>
import Wines from '/src/components/Wines.vue'
export default {
  components: {
    Wines,
  },
  data(){
    return{
      data_props: [],
    }
  },
  created(){
    this.data_props = this.$route.params.data;
    console.log("data is", this.data_props);
  }
}
</script>   
<style>

</style>    