import InicioComponent from './components/inicio.vue'
import UsuariosComponent from './components/usuarios.vue'
import InforUsuario from './components/InforUsuario.vue'
import Liquidaciones from './components/Liquidaciones.vue'
import grilla from './components/grilla.vue'

export const rutas = [
    { path: '', component: InicioComponent },
    { path: '/usuarios', component: UsuariosComponent, name: "usuarios" },
    { path: '/usuarios/:id', component: InforUsuario, name: "inforUsuario" },
    { path: '/liquidaciones', component: Liquidaciones, name: "liquidaciones" },
    { path: '/grilla', component: grilla, name: "Grilla" },

]