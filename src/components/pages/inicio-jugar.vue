<template>
    <section class="menu_principal_inicio">
        <div class="container-fluid">
            <div class="logo_atras">
                <router-link :to="{ name: 'inicio' }">
                    <button class="btn-atras">
                        <img src="/static/img/menu/logo-atras.svg" alt="logo-volumen-activo">
                    </button>
                </router-link>
            </div>
            <!-- <div class="logo_volumen">
                <button class="btn-volumen">
                        <img src="/static/img/menu/logo-volumen.svg" alt="logo-volumen-activo">
                </button>
            </div> -->
            <div class="inicio_logo">
                <img src="/static/img/menu/imagen-principal.svg" alt="logo-juego-truque">
            </div>
            <div class="inicio_menu">
                <ul>
                    <li>
                        <router-link :to="{ name: 'vscpu'}" class="lista_menu">
                            <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                            <a href="#">1 vs cpu</a>
                            <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'inicio'}" class="lista_menu">
                            <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                            <a href="#">1 vs 1</a>
                            <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'inicio'}" class="lista_menu">
                            <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                            <a href="#">2 vs 2</a>
                            <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PageInicioJugar',
  data () {
    return {
    }
  }
}
</script>
