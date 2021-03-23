<template>
    <div>
        <h3>
            Informacion del usuario
        </h3>
        <div>
            <p><strong>Nombre: {{nombre}}</strong></p>
            <p><strong>Correo Electronico: {{email}}</strong></p>
        </div>
        <button class="btn btn-primary" v-on:click="volver">Volver</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
        nombre: "",
        email: ""
        }
        
    },
    created(){
        let id = this.$route.params.id
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                    .then(response => {
                        return response.json()
                        }).then(usuario => {
                            this.nombre = usuario.name;
                            this.email = usuario.email
                        })
    },
    methods: {
        volver(){
        this.$router.push({name: 'usuarios'})
    }
    }    
    
}


</script>

