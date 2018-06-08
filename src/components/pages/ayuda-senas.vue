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
                    <h1>Señas</h1>
                </div>
                <div class="titulo_borde">
                    <img src="/static/img/submenu/cuadro-subtitulo.svg" alt="borde para introducir el titulo">
                </div>
            </div>
            <div class="ayuda_texto">
                <h2>Importancia</h2>
                <p>A la hora de jugar 2 vs 2, es muy importante el tema de <strong>las señas</strong>, para poder <strong>avisar a tu compañero</strong> de aquellas cartas de las que dispones para planear la partida perfecta y poder llevaros el mayor número de chinas posibles.</p>
                <p>Por otro lado, los jugadores más pillos utilizan este momento entre compañeros para <strong>captar las señas rivales</strong> y así saber en todo momento las cartas que posee cada jugador y, de esta manera, controlar el juego.</p>
                <p>Al igual que los rivales pueden captar señas, para <strong>engañar</strong> muchos optan por realizar <strong>señas falsas</strong>, de manera que confundas a los rivales y poder así conseguir que se confíen.</p>
                <p>Las señas es un elemento que se ha cambiado dependiendo de la zona geográfica donde se ha desarrollado el juego. En la zona centro de la Península Ibérica, que es en el cual nos hemos fijado para realizar este juego, las señas son las siguientes:</p>
                <div class="texto-senas p-3">
                    <div class="row">
                        <p class="col-6 text-center">1 de espadas</p>
                        <p class="col-6 text-center">Guiño ojo derecho</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">1 de bastos</p>
                        <p class="col-6 text-center">Guiño ojo izquierdo</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">7 de espadas (mata de espadas)</p>
                        <p class="col-6 text-center">Mueca labio derecho</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">7 de oros (mata de oros)</p>
                        <p class="col-6 text-center">Mueca labio izquierdo</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">Un 3</p>
                        <p class="col-6 text-center">Levantar hombro</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">33 envido</p>
                        <p class="col-6 text-center">Cejas arriba</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">32 envido</p>
                        <p class="col-6 text-center">Lengua fuera</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">31 envido</p>
                        <p class="col-6 text-center">Fruncir el ceño</p>
                    </div>
                    <div class="row">
                        <p class="col-6 text-center">No tener nada (ciego)</p>
                        <p class="col-6 text-center">Cerrar ojos</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PageAyudaSenas',
  data () {
    return {
    }
  }
}
</script>
