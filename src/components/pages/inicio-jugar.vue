<template>
    <section class="menu_principal_inicio">
        <div class="container-fluid">
            <div class="logo_atras">
                <button class="btn-atras" onclick="history.go(-1)">
                        <img src="/static/img/menu/logo-atras.svg" alt="logo-volumen-activo">
                </button>
            </div>
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
                        <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                        <a href="#">Partida rápida</a>
                        <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                    </li>
                    <li>
                        <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                        <a href="#">1 vs 1</a>
                        <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
                    </li>
                    <li>
                        <img src="/static/img/menu/detalle-menu-izq.svg" alt="detalle-menu-izquierda">
                        <a href="#">2 vs 2</a>
                        <img src="/static/img/menu/detalle-menu-drcha.svg" alt="detalle-menu-derecha">
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
