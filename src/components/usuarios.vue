<template>
    <div>
        <p>Lista de Usuarios</p>
        <ul class="list-group">
            <router-link tag="li" :to="{name: 'inforUsuario', params: { id: usuario.id}}"
                         class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
                {{usuario.name}}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            usuarios: {}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        return response.json();
                    })
                    .then(usuarios => {this.usuarios = usuarios})
    }
}
</script>