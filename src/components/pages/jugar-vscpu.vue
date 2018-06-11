<template>
    <section class="pagina-jugar">
        <div class="container-fluid">
            <div class="jugar_cartas">
                <div class="cartas-rival">
                    <div class="sobreposicion-rival">
                        <img class="posicion-izq" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-centro" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-drcha" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                    </div>
                </div>
                <div class="cartas-usuario">
                    <div class="sobreposicion-usuario">
                        <img class="posicion-izq" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-centro" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-drcha" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                    </div>
                </div>
            </div>
            <div class="logo_atras">
                <button class="btn-atras" onclick="history.go(-1)">
                        <img src="/static/img/menu/logo-atras.svg" alt="logo-volumen-activo">
                </button>
            </div>
            <div class="jugar_estructura">
                <div class="cartas-rival">
                    <div class="rival">
                        <img class="carta-izq" src="/static/img/pantalla-juego/carta-rival-izquierda.svg" alt="carta-rival-bocabajo-izquierda">
                        <img class="carta-centro" src="/static/img/pantalla-juego/carta-rival-centro.svg" alt="carta-rival-bocabajo-centro">
                        <img class="carta-drcha" src="/static/img/pantalla-juego/carta-rival-derecha.svg" alt="carta-rival-bocabajo-derecha">
                    </div>
                </div>
                <div class="chinas-usuario chinas-rival">
                    <div class="chinas_cuenta">
                        <div class="imagen_bocadillo">
                            <img src="/static/img/pantalla-juego/bocadillo.svg" alt="bocadillo">
                            <p>4</p>
                        </div>
                    </div>
                    <div class="chinas_icono">
                        <img src="/static/img/pantalla-juego/chinas-usuario.svg" alt="chinas del usuario">
                    </div>
                </div>
                <div class="perfil">
                    <button class="btn-clasico">
                        <img src="/static/img/pantalla-juego/logo-usuario.svg" alt="Logo de usuario">
                    </button>
                    <p>montyband</p>
                </div>
                    <div class="marcador">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">MNT</th>
                                    <th scope="col">SVL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/static/img/pantalla-juego/cruz.svg" alt="cruz equivalente a dos zancas"></td>
                                    <td><img src="/static/img/pantalla-juego/media-cruz.svg" alt="media cruz equivalente a una zanca"></td>
                                </tr>
                                <tr>
                                   <td></td>
                                   <td><img src="/static/img/pantalla-juego/media-cruz.svg" alt="media cruz equivalente a una zanca"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <div class="mazo-rival">
                    <button class="btn-clasico btn-mazo">
                        <img src="/static/img/pantalla-juego/mazo-cartas.svg" alt="Monton de cartas sobrantes">
                    </button>
                    <p>ir al mazo</p>
                </div>
                <div class="chinas">
                    <img src="/static/img/pantalla-juego/chinas.svg" alt="total de chinas">
                </div>
                <div class="mazo-usuario"></div>
                <div class="vacio"></div>
                <div class="perfil">
                    <button class="btn-clasico">
                        <img src="/static/img/pantalla-juego/logo-usuario.svg" alt="Logo de usuario">
                    </button>
                    <p>montyband</p>
                </div>
                <div class="chinas-usuario">
                    <div class="chinas_cuenta">
                        <div class="imagen_bocadillo">
                            <img src="/static/img/pantalla-juego/bocadillo.svg" alt="bocadillo">
                            <p>15</p>
                        </div>
                    </div>
                    <div class="chinas_icono">
                        <img src="/static/img/pantalla-juego/chinas-usuario.svg" alt="chinas del usuario">
                    </div>
                </div>
                <div class="cartas-usuario">
                    <div class="usuario">
                        <img class="carta-izq" src="/static/img/cartas/seis-espadas.svg" alt="carta-usuario-izquierda">
                        <img class="carta-centro" src="/static/img/cartas/siete-espadas.svg" alt="carta-usuario-centro">
                        <img class="carta-drcha" src="/static/img/cartas/uno-bastos.svg" alt="carta-usuario-derecha">
                    </div>
                </div>
                <div class="envido-truco-usuario">
                    <button class="btn-borde">Envido</button>
                    <button class="btn-borde">Truco</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PageJugarCPU',
  data () {
    return {
    }
  }
}
</script>
