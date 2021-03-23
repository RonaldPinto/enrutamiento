<template>
  <div class="container">
      <div class="label-grilla">
          <div class="col-3"> 
          </div>
        <div>Nombre</div>
        <div>Tipo de Servicio</div>
        <div>Empresa</div>
        <div>Código ID</div>
        <div>eliminar</div>
      </div>
      <div class="label-grilla">
          <div><input type="checkbox" name="a" id="b"></div>
          <div>ronald</div>
          <div>movistar</div>
          <div>movistar</div>
          <div>0000000000</div>
          <div></div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'Grilla'

}
</script>

<style lang='css'>
.label-grilla {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>