<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
            <paginate ref="paginator" name = "arrayStrings" :list = "arrayStrings" :per = "5">
                <li v-for="string in paginated('arrayStrings')" :key="string.numLiquidacion">{{string.nombre}}</li>
            </paginate>
               <paginate-links
                for="arrayStrings"
                :show-step-links="true"
                :simple="{
                    prev: 'Anterior',
                    current_page: '',
                    next: 'Siguiente'  
                }"
               ></paginate-links>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      paginate:['arrayStrings'],
      arrayStrings:[
          { numCaso: 1, numLiquidacion: 345, nombre: 'Julia alvarez', rut: '21.265.256-0', programa: 'Fiscalizacion 1', observaciones: '' },
            { numCaso: 2, numLiquidacion: 454, nombre: 'Gonzalo Iguain', rut: '22.565.326-9', programa: 'Fiscalizacion 1', observaciones: '' },
            { numCaso: 3, numLiquidacion: 222, nombre: 'Felipe Mejias', rut: '17.256.325-2', programa: 'Fiscalizacion 1', observaciones: '' },
            { numCaso: 4, numLiquidacion: 123, nombre: 'Luis Torres', rut: '25.652.325-3', programa: '', observaciones: '' },
            { numCaso: 4, numLiquidacion: 124, nombre: 'Maria Perez', rut: '5.265.236-5', programa: '', observaciones: '' },
            { numCaso: 5, numLiquidacion: 555, nombre: 'Pablo Lopez', rut: '10.232.555-3', programa: '', observaciones: '' },
            
      ],
    }
  }
}
</script>

<style>
  .paginate-links{
    width:100%;
    list-style: none;
    text-align: center;
}
.paginate-links li {
    display: inline;
    background-color:#E43A48;
    color:white;
    padding:0.5rem;
    margin-left:0.3rem;
    margin-right: 0.3rem;
    cursor:pointer;
    border-radius: 3px;
}
.paginate-result{
    width: 100%;
    text-align:center;
    margin-bottom: 1rem;
}
</style>