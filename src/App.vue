<template>
<div class="container" style="margin-top: 30px;">
  <encabezado></encabezado>
  <div >
    <router-view></router-view>
  </div>
</div>

</template>

<script>
import Encabezado from './components/encabezado.vue'
export default {
  components: {
    encabezado: Encabezado
  }
}
</script>

<style>
</style>
