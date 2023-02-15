<template>
    <h1 id="titre">Les Vins</h1>
    <Wines />
</template> 

<script>
import Wines from '/src/components/Wines.vue'
export default {
  components: {
    Wines
  }
}
</script>   
<style>

</style>    


<!--getWinesByColor() {
            WinesService.getWinesByColor(color).then((response) => {
                this.wines = response.data;
            });-->