<template>
    <section class="submenu_ayuda">
        <div class="container-fluid">
            <div class="logo_atras">
                <button class="btn-atras" onclick="history.go(-1)">
                        <img src="/static/img/menu/logo-atras.svg" alt="logo-volumen-activo">
                </button>
            </div>
            <div class="ayuda_titulo">
                <div class="titulo_texto">
                    <h1>cartas</h1>
                </div>
                <div class="titulo_borde">
                    <img src="/static/img/submenu/cuadro-subtitulo.svg" alt="borde para introducir el titulo">
                </div>
            </div>
            <div class="ayuda_texto">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PageAyudaCartas',
  data () {
    return {
    }
  }
}
</script>
