<template>
   <div>
        <p>liquidaciones</p>
        <ul class="list-group">
            <paginate ref="paginator" name = "items" :list = "items" :per = "3">
                <li class="lista-group-item container-list" v-for="(item, index) in paginated('items')" :key="item.numLiquidacion">
                    <div class="list-box">
                        <div>
                            <label>Numero de Caso: {{index}}</label>
                            <input class="form-control" :class="'caso' + [index]" type="text" v-model="item.numCaso" :disabled="true">
                        </div>
                        <div class="list">
                            <label>Numero de Liquidacion:</label>
                            <input class="form-control" :class="'liquidacion' + [index]" type="text" v-model="item.numLiquidacion" :disabled='true'>
                        </div>
                        
                        <div>
                            <label>Nombre:</label>
                            <input class="form-control" :class="'nombre' + [index]" type="text" v-model="item.nombre" :disabled='true'>
                        </div>
                    </div>

                    <div class="list-box">
                        <div >
                            <label>Rut:</label>
                            <input class="form-control" :class="'rut' + [index]" type="text" v-model="item.rut" :disabled='true'>  
                        </div>
                    
                        <div class="list">
                            <label>Programa:</label>
                            <input class="form-control" :class="'programa' + [index]" type="text" v-model="item.programa" :disabled='true'>
                        </div>

                        <div>
                            <label>Observaciones:</label>
                            <input class="form-control" :class="'observaciones' + [index]" type="text" v-model="item.observaciones" :disabled='true'>
                        </div>
                    </div>

                    <div>
                        <button class="btn btn-outline-primary"  @click="cambiarDisabled(index)">Editar</button>
                        <button class="btn btn-outline-primary" :class="'guardar' + [index]" @click='guardar(item)' :disabled="true">guardar</button>
                    </div>
                    
                </li>
            </paginate>
            <paginate-links
                for="items"
                :show-step-links="true"
                :simple="{
                    prev: 'Anterior',
                    next: 'Siguiente'  
                }"
               ></paginate-links>               
     
        </ul>
        {{ datos }}
    </div>
</template>

<script>
export default {
    data() {
        return{
            paginate:['items'],
            items: [
            { numCaso: 1, numLiquidacion: 345, nombre: 'Julia alvarez', rut: '21.265.256-0', programa: 'Fiscalizacion 1', observaciones: '' },
            { numCaso: 2, numLiquidacion: 454, nombre: 'Gonzalo Iguain', rut: '22.565.326-9', programa: 'Fiscalizacion 1', observaciones: '' },
            { numCaso: 3, numLiquidacion: 222, nombre: 'Felipe Mejias', rut: '17.256.325-2', programa: 'Fiscalizacion 1', observaciones: '' },
            { numCaso: 4, numLiquidacion: 123, nombre: 'Luis Torres', rut: '25.652.325-3', programa: '', observaciones: '' },
            { numCaso: 4, numLiquidacion: 124, nombre: 'Maria Perez', rut: '5.265.236-5', programa: '', observaciones: '' },
            { numCaso: 5, numLiquidacion: 555, nombre: 'Pablo Lopez', rut: '10.232.555-3', programa: '', observaciones: '' },
            ],
            datos: {}
        }
    
    
  },
  methods: {
  
  guardar: function(value) {
  this.datos = value;
     
      return this.datos;
  },
    cambiarDisabled: function(id){
        this.$el.querySelector(`.caso${id}`).removeAttribute("disabled");
        this.$el.querySelector(`.liquidacion${id}`).removeAttribute("disabled");
        this.$el.querySelector(`.nombre${id}`).removeAttribute("disabled");
        this.$el.querySelector(`.rut${id}`).removeAttribute("disabled");
        this.$el.querySelector(`.programa${id}`).removeAttribute("disabled");
        this.$el.querySelector(`.observaciones${id}`).removeAttribute("disabled");
        this.$el.querySelector(`.guardar${id}`).removeAttribute("disabled");
    }
   
   
  }
}

 
</script>

<style>

.container-list {
    display: grid;
    grid-gap: 15px;
    background-color: lightgrey;
    border-radius: .3rem;
    margin-bottom: 2rem;
    padding: 35px;
}
.list-box {
    display: flex;
}

.list {
    margin: auto;
}

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
</style>