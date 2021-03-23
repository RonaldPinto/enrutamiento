<template>
    <div class="header clearfix">
        <nav class="naveg">
            <ul class="nav nav-pills pull-right">
                <router-link tag="li" active-class="nav-link active" exact to="/">
                    Inicio
                </router-link>

                <router-link tag="li" active-class="nav-link active" to="/usuarios" exact>
                    Usuario
                </router-link> 
                 <router-link tag="li" active-class="nav-link active" to="/liquidaciones" exact>
                    liquidaciones
                </router-link> 

            </ul>
            <h3 class="text muted">Aplicación usuario</h3>
        </nav>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style>
.nav-link {
    color: white;
}
.naveg {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

</style>