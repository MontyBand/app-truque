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
                <div class="row bastos">
                    <img class="col" src="/static/img/cartas/uno-bastos.svg" alt="">
                    <img class="col" src="/static/img/cartas/tres-bastos.svg" alt="">
                    <img class="col" src="/static/img/cartas/cuatro-bastos.svg" alt="">
                    <img class="col" src="/static/img/cartas/cinco-bastos.svg" alt="">
                    <img class="col" src="/static/img/cartas/seis-bastos.svg" alt="">
                    <img class="col" src="/static/img/cartas/siete-bastos.svg" alt="">
                </div>
                <div class="row espadas">
                    <img class="col" src="/static/img/cartas/uno-espadas.svg" alt="">
                    <img class="col" src="/static/img/cartas/tres-espadas.svg" alt="">
                    <img class="col" src="/static/img/cartas/cuatro-espadas.svg" alt="">
                    <img class="col" src="/static/img/cartas/cinco-espadas.svg" alt="">
                    <img class="col" src="/static/img/cartas/seis-espadas.svg" alt="">
                    <img class="col" src="/static/img/cartas/siete-espadas.svg" alt="">
                </div>
                <div class="row oros">
                    <img class="col" src="/static/img/cartas/tres-oros.svg" alt="">
                    <img class="col" src="/static/img/cartas/cuatro-oros.svg" alt="">
                    <img class="col" src="/static/img/cartas/cinco-oros.svg" alt="">
                    <img class="col" src="/static/img/cartas/seis-oros.svg" alt="">
                    <img class="col" src="/static/img/cartas/siete-oros.svg" alt="">
                </div>
                <div class="row copas">
                    <img class="col" src="/static/img/cartas/tres-copas.svg" alt="">
                    <img class="col" src="/static/img/cartas/cuatro-copas.svg" alt="">
                    <img class="col" src="/static/img/cartas/cinco-copas.svg" alt="">
                    <img class="col" src="/static/img/cartas/seis-copas.svg" alt="">
                    <img class="col" src="/static/img/cartas/siete-copas.svg" alt="">
                </div>
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
