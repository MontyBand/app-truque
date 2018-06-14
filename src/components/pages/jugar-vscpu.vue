<template>
    <section class="pagina-jugar">
        <div class="container-fluid">
            <!-- Ventana para saber a cuantos puntos se juega la partida -->
            <div v-if="jugarZanca == ''" class="ventana-emergente opcion-zancas">
                <div class="opcion-nombre">
                    <h1>Nombre rival</h1>
                </div>
                <div class="opcion-texto">
                    <p>¿A qué quieres jugar?</p>
                </div>
                <div class="opcion-sino">
                    <button @click="zancasParaJugar(1)" class="btn-borde">2 zancas</button>
                    <button @click="zancasParaJugar(2)" class="btn-borde">3 zancas</button>
                    <button @click="zancasParaJugar(3)" class="btn-borde">1 juego</button>
                    <button onclick="history.go(-1)" class="btn-borde">Atrás</button>
                </div>
            </div>
            <!-- Ventana que aparece cuando el usuario desea abandonar la partida -->
            <div v-if="menuSalir" class="ventana-emergente opcion-usuario-salir">
                <div class="salir-texto">
                    <p>¿Seguro que deseas abandonar la partida?</p>
                </div>
                <div class="salir-sino">
                    <router-link :to="{name: 'jugar'}" class="btn-borde button">Sí</router-link>
                    <button @click="abandonarPartidaNo" class="btn-borde button">No</button>
                </div>
            </div>
            <!-- Ventana que aparece cuando el rival truca -->
            <div v-if="menuTrucarRival" class="ventana-emergente opcion-rival-trucar">
                <div class="trucar-nombre">
                    <h1>Nombre rival</h1>
                </div>
                <div class="trucar-texto">
                    <p>TRUCO</p>
                </div>
                <div class="trucar-sino">
                    <button class="btn-borde">Sí</button>
                    <button class="btn-borde">Retruco</button>
                    <button class="btn-borde">No</button>
                </div>
            </div>
            <!-- Ventana que aparece cuando el rival envida -->
            <div v-if="menuEnvidaRival" class="ventana-emergente opcion-envida">
                <div class="envida-nombre">
                    <h1>Nombre rival</h1>
                </div>
                <div class="envida-texto">
                    <p>ENVIDO</p>
                </div>
                <div class="envida-sino">
                    <div class="row">
                        <button class="btn-borde col">15 más</button>
                        <button class="btn-borde col">La falta</button>
                        <div class="w-100"></div>
                        <div class="dos-botones col">
                            <button class="btn-borde contador">+</button>
                            <button class="btn-borde contador">-</button>
                        </div>
                        <button class="btn-borde col">No quiero</button>
                    </div>
                </div>
            </div>
            <!-- Ventana que aparece cuando el usuario envida -->
            <div v-if="menuEnvidaUsuario" class="ventana-emergente opcion-envida">
                <div class="envida-nombre">
                    <h1>Nombre usuario</h1>
                </div>
                <div class="envida-texto">
                    <p>ENVIDO</p>
                </div>
                <div class="envida-sino">
                    <div class="row">
                        <button class="btn-borde col">Envido 15</button>
                        <button class="btn-borde col">La falta</button>
                        <div class="w-100"></div>
                        <div class="dos-botones col">
                            <button class="btn-borde contador">+</button>
                            <button class="btn-borde contador">-</button>
                        </div>
                        <button class="btn-borde col">Salir</button>
                    </div>
                </div>
            </div>
            <!-- Ventana cuando el rival ha ejecutado una acción -->
            <div v-if="menuEfectuarAccion" class="ventana-emergente efectuar-accion">
                <p>Acción</p>
            </div>
            <!-- CARTAS JUGADAS -->
            <div class="jugar_cartas">
                <!-- Cartas que aparecen cuando el rival toca sobre sus cartas -->
                <div class="cartas-rival">
                    <div class="sobreposicion-rival">
                        <img class="posicion-izq" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-centro" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-drcha" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                    </div>
                </div>
                <!-- Cartas que aparecen cuando el usuario toca sobre sus cartas -->
                <div class="cartas-usuario">
                    <div class="sobreposicion-usuario">
                        <img class="posicion-izq" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-centro" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                        <img class="posicion-drcha" src="/static/img/cartas/cuatro-oros.svg" alt="carta-rival-primera-ronda">
                    </div>
                </div>
            </div>
            <!-- Boton para hacer marcha atras una interfaz -->
            <div @click="mostrarMenuSalir" v-if="jugarZanca != ''" class="logo_atras">
                <button class="btn-atras">
                        <img src="/static/img/menu/logo-atras.svg" alt="logo-volumen-activo">
                </button>
            </div>
            <!-- ESTRUCTURA GENERAL DEL JUEGO -->
            <div v-if="jugarZanca != ''" class="jugar_estructura">
                <!-- Cartas del rival -->
                <div class="cartas-rival">
                    <div class="rival">
                        <img class="carta-izq" src="/static/img/pantalla-juego/carta-rival-izquierda.svg" alt="carta-rival-bocabajo-izquierda">
                        <img class="carta-centro" src="/static/img/pantalla-juego/carta-rival-centro.svg" alt="carta-rival-bocabajo-centro">
                        <img class="carta-drcha" src="/static/img/pantalla-juego/carta-rival-derecha.svg" alt="carta-rival-bocabajo-derecha">
                    </div>
                </div>
                <!-- Chinas del rival -->
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
                <!-- Perfil del rival -->
                <div class="perfil">
                    <button class="btn-clasico">
                        <img src="/static/img/pantalla-juego/logo-usuario.svg" alt="Logo de usuario">
                    </button>
                    <p>montyband</p>
                </div>
                <!-- Marcador general por zancas y juegos -->
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
                <!-- Aparece el mazo de cartas sobrantes al lado derecho de quien reparte -->
                <div class="mazo mazo-rival">
                    <button class="btn-clasico btn-mazo">
                        <img src="/static/img/pantalla-juego/mazo-cartas.svg" alt="Monton de cartas sobrantes">
                    </button>
                    <p>ir al mazo</p>
                </div>
                <!-- Chinas centro -->
                <div class="chinas">
                    <img src="/static/img/pantalla-juego/chinas.svg" alt="total de chinas">
                </div>
                <!-- Aparece el mazo de cartas sobrantes al lado derecho de quien reparte -->
                <div class="mazo mazo-usuario">
                    <button class="btn-clasico btn-mazo">
                        <img src="/static/img/pantalla-juego/mazo-cartas.svg" alt="Monton de cartas sobrantes">
                    </button>
                    <p>ir al mazo</p>
                </div>
                <!-- Hueco vacío y necesario para la estructura de la página -->
                <div class="vacio"></div>
                <!-- Perfil del jugador -->
                <div class="perfil" style="grid-column: 1/2">
                    <button class="btn-clasico">
                        <img src="/static/img/pantalla-juego/logo-usuario.svg" alt="Logo de usuario">
                    </button>
                    <p>montyband</p>
                </div>
                <!-- Chinas que lleva el usuario -->
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
                <!-- Cartas que tiene el usuario -->
                <div class="cartas-usuario">
                    <div class="usuario">
                        <img class="carta-izq" src="/static/img/cartas/seis-espadas.svg" alt="carta-usuario-izquierda">
                        <img class="carta-centro" src="/static/img/cartas/siete-espadas.svg" alt="carta-usuario-centro">
                        <img class="carta-drcha" src="/static/img/cartas/uno-bastos.svg" alt="carta-usuario-derecha">
                    </div>
                </div>
                <!-- Opción envidar trucar del usuario -->
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
      jugarZanca: '',
      menuSalir: false,
      menuTrucaRival: false
    }
  },
  methods: {
    zancasParaJugar: function (num) {
      this.jugarZanca = num
      console.log(this.jugarZanca)
    },
    mostrarMenuSalir: function () {
      this.menuSalir = true
    },
    abandonarPartidaNo: function () {
      this.menuSalir = false
    }
  }
}
</script>
