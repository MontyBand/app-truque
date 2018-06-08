<template>
  <section class="menu_principal_inicio">
        <div class="container-fluid">
            <div class="logo_volumen">
                <button class="btn-volumen">
                        <img src="/static/img/menu/logo-volumen.svg" alt="logo-volumen-activo">
                </button>
            </div>
            <div class="inicio_logo">
                <img src="/static/img/menu/imagen-principal.svg" alt="logo-juego-truque">
            </div>
            <div class="inicio_menu">
                <ul>
                    <li>
                      <router-link :to="{ name: 'jugar'}" class="lista_menu">
                        <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                        <a href="#">Jugar</a>
                        <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'perfil'}" class="lista_menu">
                        <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                        <a href="#">perfil</a>
                        <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'ayuda'}" class="lista_menu">
                        <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                        <a href="#">ayuda</a>
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
  name: 'PageMenuInicio',
  data () {
    return {
    }
  }
}
</script>
