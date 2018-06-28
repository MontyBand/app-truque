<template>
    <section class="pagina-jugar">
        <div class="container-fluid">
            <!-- Ventana para saber a cuantos puntos se juega la partida -->
            <div v-if="jugarZanca == ''" class="ventana-emergente opcion-zancas">
                <div class="opcion-nombre">
                    <h1>{{ nombreUsuario }}</h1>
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
            <!-- <div v-if="menuTrucarRival" class="ventana-emergente opcion-rival-trucar">
                <div class="trucar-nombre">
                    <h1>{{ nombreRival }}</h1>
                </div>
                <div class="trucar-texto">
                    <p>TRUCO</p>
                </div>
                <div class="trucar-sino">
                    <button class="btn-borde">Quiero</button>
                    <button class="btn-borde">Retruco</button>
                    <button class="btn-borde">No</button>
                </div>
            </div> -->
            <!-- Ventana que aparece cuando el rival envida -->
            <div v-if="menuEnvidaRival" class="ventana-emergente opcion-envida">
                <div class="envida-nombre">
                    <h1>{{ nombreRival }}</h1>
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
                    <h1>{{ nombreUsuario }}</h1>
                </div>
                <div class="envida-texto">
                    <p>ENVIDO</p>
                </div>
                <div class="envida-sino">
                    <div class="row">
                        <button @click="envidaUsuario(1)" class="btn-borde col">Envido {{ numeroChinasEnvido }}</button>
                        <button @click="envidaUsuario(2)" class="btn-borde col">La falta</button>
                        <div class="w-100"></div>
                        <div class="dos-botones col">
                            <button @click="envidaUsuario(3)" class="btn-borde contador">+</button>
                            <button @click="envidaUsuario(4)" class="btn-borde contador">-</button>
                        </div>
                        <button @click="envidaUsuario(5)" class="btn-borde col">Salir</button>
                    </div>
                </div>
            </div>
            <!-- Ventana cuando el rival ha ejecutado una acción -->
            <div v-if="menuEfectuarAccion" class="ventana-emergente efectuar-accion">
                <p>{{ accion }}</p>
            </div>
            <!-- CARTAS JUGADAS -->
            <div class="jugar_cartas">
                <!-- Cartas que aparecen cuando el rival toca sobre sus cartas -->
                <div class="cartas-rival">
                    <div class="sobreposicion-rival">
                        <img v-for="(carta, index) in cartasRivalTapete" v-bind:key="carta.id" :class="index == 0 ? 'posicion-izq' : index == 1 ? 'posicion-centro' : index == 2 ? 'posicion-drcha' : ''" :src="carta.ruta" alt="carta-rival-tapete">
                    </div>
                </div>
                <!-- Cartas que aparecen cuando el usuario toca sobre sus cartas -->
                <div class="cartas-usuario">
                    <div class="sobreposicion-usuario">
                        <img v-for="(carta, index) in cartasUsuarioTapete" v-bind:key="carta.id" :class="index == 0 ? 'posicion-izq' : index == 1 ? 'posicion-centro' : index == 2 ? 'posicion-drcha' : ''" :src="carta.ruta" alt="carta-usuario-tapete">
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
                        <!-- Se crea un v-for para recorrer el array cartasrival que tiene las tres cartas al azar -->
                        <!-- v-bind es carta.id porque necesita de un dato que vaya cambiando -->
                        <!-- el @click se ejecuta la accion más abajo para que desaparezca la carta pulsada -->
                        <!-- se añade la clase dependiendo del index para la rotacion de la carta -->
                        <img v-for="(carta, index) in cartasRival" v-bind:key="carta.id" :class="index == 0 ? 'carta-izq' : index == 1 ? 'carta-centro' : index == 2 ? 'carta-drcha' : ''" src="/static/img/pantalla-juego/cartas-rival.svg" alt="carta-rival">
                    </div>
                </div>
                <!-- Chinas del rival -->
                <div v-if="chinasRival > 0" class="chinas-usuario chinas-rival">
                    <div class="chinas_cuenta">
                        <div class="imagen_bocadillo">
                            <img src="/static/img/pantalla-juego/bocadillo.svg" alt="bocadillo">
                            <p>{{ chinasRival }}</p>
                        </div>
                    </div>
                    <div class="chinas_icono">
                        <img src="/static/img/pantalla-juego/chinas-usuario.svg" alt="chinas del rival">
                    </div>
                </div>
                <!-- Perfil del rival -->
                <div class="perfil">
                    <button class="btn-clasico">
                        <img src="/static/img/pantalla-juego/logo-usuario.svg" alt="Logo de usuario">
                    </button>
                    <p>{{ nombreRival }}</p>
                </div>
                <!-- Marcador general por zancas y juegos -->
                <div class="marcador">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">J1</th>
                                <th scope="col">CPU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img v-if="espacioUsuarioUno != ''" :src="espacioUsuarioUno" alt="marcador usuario uno"></td>
                                <td><img v-if="espacioRivalUno != ''" :src="espacioRivalUno" alt="marcador rival uno"></td>
                            </tr>
                            <tr>
                                <td><img v-if="espacioUsuarioDos != ''" :src="espacioUsuarioDos" alt="marcador usuario Dos"></td>
                                <td><img v-if="espacioRivalDos != ''" :src="espacioRivalDos" alt="marcador rival uno"></td>
                            </tr>
                            <tr>
                                <td><img v-if="espacioUsuarioTres != ''" :src="espacioUsuarioTres" alt="marcador usuario Tres"></td>
                                <td><img v-if="espacioRivalTres != ''" :src="espacioRivalTres" alt="marcador rival Tres"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Aparece el mazo de cartas sobrantes al lado derecho de quien reparte -->
                <div v-if="!reparteUsuario" class="mazo">
                    <button class="btn-clasico btn-mazo">
                        <img src="/static/img/pantalla-juego/mazo-cartas.svg" alt="Monton de cartas sobrantes">
                    </button>
                </div>
                <!-- Chinas centro -->
                <div class="chinas">
                    <img src="/static/img/pantalla-juego/chinas.svg" alt="total de chinas">
                </div>
                <!-- Aparece el mazo de cartas sobrantes al lado derecho de quien reparte -->
                <div v-if="reparteUsuario" class="mazo">
                    <button class="btn-clasico btn-mazo">
                        <img src="/static/img/pantalla-juego/mazo-cartas.svg" alt="Monton de cartas sobrantes">
                    </button>
                </div>
                <!-- Hueco vacío y necesario para la estructura de la página -->
                <div class="vacio"></div>
                <!-- Perfil del jugador -->
                <div class="perfil" style="grid-column: 1/2">
                    <button class="btn-clasico">
                        <img src="/static/img/pantalla-juego/logo-usuario.svg" alt="Logo de usuario">
                    </button>
                    <p>{{ nombreUsuario }}</p>
                </div>
                <!-- Chinas que lleva el usuario -->
                <div v-if="chinasUsuario > 0" class="chinas-usuario">
                    <div class="chinas_cuenta">
                        <div class="imagen_bocadillo">
                            <img src="/static/img/pantalla-juego/bocadillo.svg" alt="bocadillo">
                            <p>{{ chinasUsuario }}</p>
                        </div>
                    </div>
                    <div class="chinas_icono">
                        <img src="/static/img/pantalla-juego/chinas-usuario.svg" alt="chinas del usuario">
                    </div>
                </div>
                <!-- Cartas que tiene el usuario -->
                <div class="cartas-usuario">
                    <div class="usuario">
                        <!-- Se crea un v-for para recorrer el array cartasUsuario que tiene las tres cartas al azar -->
                        <!-- v-bind es carta.id porque necesita de un dato que vaya cambiando -->
                        <!-- el @click se ejecuta la accion más abajo para que desaparezca la carta pulsada -->
                        <!-- se añade la clase dependiendo del index para la rotacion de la carta -->
                        <img v-for="(carta, index) in cartasUsuario" v-bind:key="carta.id" @click="jugarCartasUsuario(index)" :class="index == 0 ? 'carta-izq' : index == 1 ? 'carta-centro' : index == 2 ? 'carta-drcha' : ''" :src="carta.ruta" alt="carta-usuario">
                    </div>
                </div>
                <!-- Opción envidar trucar del usuario -->
                <div class="envido-truco-usuario">
                    <button @click="mostrarMenuEnvidarUsuario" class="btn-borde">Envido</button>
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
      // CARTAS
      cartas: [
        {id: 1, nombre: 'TresDeOros', valor: 5, numero: 3, palo: 1, ruta: '/static/img/cartas/tres-oros.svg'},
        {id: 2, nombre: 'CuatroDeOros', valor: 1, numero: 4, palo: 1, ruta: '/static/img/cartas/cuatro-oros.svg'},
        {id: 3, nombre: 'CincoDeOros', valor: 2, numero: 5, palo: 1, ruta: '/static/img/cartas/cinco-oros.svg'},
        {id: 4, nombre: 'SeisDeOros', valor: 3, numero: 6, palo: 1, ruta: '/static/img/cartas/seis-oros.svg'},
        {id: 5, nombre: 'SieteDeOros', valor: 6, numero: 7, palo: 1, ruta: '/static/img/cartas/siete-oros.svg'},
        {id: 6, nombre: 'TresDeCopas', valor: 5, numero: 3, palo: 2, ruta: '/static/img/cartas/tres-copas.svg'},
        {id: 7, nombre: 'CuatroDeCopas', valor: 1, numero: 4, palo: 2, ruta: '/static/img/cartas/cuatro-copas.svg'},
        {id: 8, nombre: 'CincoDeCopas', valor: 2, numero: 5, palo: 2, ruta: '/static/img/cartas/cinco-copas.svg'},
        {id: 9, nombre: 'SeisDeCopas', valor: 3, numero: 6, palo: 2, ruta: '/static/img/cartas/seis-copas.svg'},
        {id: 10, nombre: 'SieteDeCopas', valor: 4, numero: 7, palo: 2, ruta: '/static/img/cartas/siete-copas.svg'},
        {id: 11, nombre: 'UnoDeEspadas', valor: 9, numero: 1, palo: 3, ruta: '/static/img/cartas/uno-espadas.svg'},
        {id: 12, nombre: 'TresDeEspadas', valor: 5, numero: 3, palo: 3, ruta: '/static/img/cartas/tres-espadas.svg'},
        {id: 13, nombre: 'CuatroDeEspadas', valor: 1, numero: 4, palo: 3, ruta: '/static/img/cartas/cuatro-espadas.svg'},
        {id: 14, nombre: 'CincoDeEspadas', valor: 2, numero: 5, palo: 3, ruta: '/static/img/cartas/cinco-espadas.svg'},
        {id: 15, nombre: 'SeisDeEspadas', valor: 3, numero: 6, palo: 3, ruta: '/static/img/cartas/seis-espadas.svg'},
        {id: 16, nombre: 'SieteDeEspadas', valor: 7, numero: 7, palo: 3, ruta: '/static/img/cartas/siete-espadas.svg'},
        {id: 17, nombre: 'UnoDeBastos', valor: 8, numero: 1, palo: 4, ruta: '/static/img/cartas/uno-bastos.svg'},
        {id: 18, nombre: 'TresDeBastos', valor: 5, numero: 3, palo: 4, ruta: '/static/img/cartas/tres-bastos.svg'},
        {id: 19, nombre: 'CuatroDeBastos', valor: 1, numero: 4, palo: 4, ruta: '/static/img/cartas/cuatro-bastos.svg'},
        {id: 20, nombre: 'CincoDeBastos', valor: 2, numero: 5, palo: 4, ruta: '/static/img/cartas/cinco-bastos.svg'},
        {id: 21, nombre: 'SeisDeBastos', valor: 3, numero: 6, palo: 4, ruta: '/static/img/cartas/seis-bastos.svg'},
        {id: 22, nombre: 'SieteDeBastos', valor: 4, numero: 7, palo: 4, ruta: '/static/img/cartas/siete-bastos.svg'}
      ],
      jugarZanca: '',
      nombreUsuario: 'Jugador 1',
      nombreRival: 'CPU',
      // CUANDO TIRA RIVAL
      reparteUsuario: false,
      tiraRival: false,
      tiraUsuario: true,
      bloquearInterfaz: false,
      // CHINAS
      chinasRival: 0,
      chinasUsuario: 0,
      // TRUQUE
      puntosTruqueUsuario: 0,
      puntosTruqueRival: 0,
      ronda: 0,
      // MARCADOR
      marcadorUsuario: 0,
      marcadorRival: 0,
      espacioUsuarioUno: '',
      espacioUsuarioDos: '',
      espacioUsuarioTres: '',
      espacioRivalUno: '',
      espacioRivalDos: '',
      espacioRivalTres: '',
      zancaUsuario: 0,
      zancaRival: 0,
      // VENTANAS EMERGENTES
      menuSalir: false,
      menuTrucaRival: false,
      menuEnvidaRival: false,
      menuEfectuarAccion: false,
      accion: '',
      // Ventana envida usuario
      menuEnvidaUsuario: false,
      numeroChinasEnvido: 1,
      // CARTAS TAPETE
      cartasUsuarioTapete: [],
      cartasRivalTapete: [],
      // CARTAS USUARIO
      cartasUsuario: [],
      // CARTAS RIVAL
      cartasRival: []
    }
  },
  mounted: function () {
    this.cartasUsuario.push(this.cogerCartaAzar(), this.cogerCartaAzar(), this.cogerCartaAzar())
    this.cartasRival.push(this.cogerCartaAzar(), this.cogerCartaAzar(), this.cogerCartaAzar())
    this.calcularEnvidoUsuario()
    console.log(this.cartasRival)
    console.log(this.calcularEnvidoRival())
    console.log(this.cartasUsuario)
    console.log(this.calcularEnvidoUsuario())
  },
  methods: {
    // ==== FUNCIONES PARA LA JUGABILIDAD ====
    // |
    // |
    // Funcion para decir quien toca barajar
    baraja: function () {
      if (this.reparteUsuario === false) {
        this.tiraUsuario = true
        this.tiraRival = false
      } else {
        this.tiraUsuario = false
      }
    },
    // Funcion para que cuanto toques en la carta aparezca en el tapete
    jugarCartasUsuario: function (num) {
      if (!this.bloquearInterfaz) {
        if (this.tiraUsuario) {
          this.cuandoTiraCartaUsuario(num)
          this.tiraRival = true
          if (this.cartasUsuarioTapete.length !== this.cartasRivalTapete.length) {
            this.cuandoTiraCartaRival(num, this.ronda)
          }
          this.compararCartasTapete(this.ronda)
        } else {
          this.cuandoTiraCartaRival(num, this.ronda)
          this.tiraUsuario = true
          this.tiraRival = false
          this.cuandoTiraCartaUsuario(num)
          this.compararCartasTapete(this.ronda)
        }
        this.ronda += 1
      }
    },
    // Funcion para que la maquina sepa cuando tiene que tirar
    cuandoTiraCartaRival: function () {
      let num = this.randomIntFromInterval(0, this.cartasRival.length - 1)
      if (this.tiraRival === true) {
        this.cartasRivalTapete.push(this.cartasRival.splice(num, 1)[0])
      }
      this.tiraUsuario = true
      this.tiraRival = false
    },
    // Funcion para que el usuario sepa cuando va a tirar
    cuandoTiraCartaUsuario: function (num) {
      if (this.tiraUsuario === true) {
        this.cartasUsuarioTapete.push(this.cartasUsuario.splice(num, 1)[0])
      }
    },
    // Funcion para comparar las cartas del tapete y saber quien ha ganado
    compararCartasTapete: function () {
      // Cuando la carta del usuario es mayor que la del rival
      if (this.cartasUsuarioTapete[this.ronda].valor > this.cartasRivalTapete[this.ronda].valor) {
        this.puntosTruqueUsuario += 1
        this.tiraUsuario = true
        this.tiraRival = false
      // Cuando hay dos cartas iguales
      } else if (this.cartasUsuarioTapete[this.ronda].valor === this.cartasRivalTapete[this.ronda].valor) {
        // Ronda 1 - Pardas normales
        if (this.ronda === 0) {
          this.puntosTruqueUsuario += 1
          this.puntosTruqueRival += 1
          if (this.reparteUsuario) {
            this.tiraUsuario = false
            this.tiraRival = true
            this.cuandoTiraCartaRival()
          } else {
            this.tiraUsuario = true
            this.tiraRival = false
          }
        // Ronda 2 - Cartas iguales en segunda ronda
        } else if (this.ronda === 1) {
          // Si el jugador ha ganado la primera mano (favorece el empate)
          if (this.cartasUsuarioTapete[0].valor > this.cartasRivalTapete[0].valor) {
            this.puntosTruqueUsuario += 1
          // Si el rival ha ganado la primera mano (favorece el empate)
          } else if (this.cartasUsuarioTapete[0].valor < this.cartasRivalTapete[0].valor) {
            this.puntosTruqueRival += 1
          // Si ya han sido pardas y es la segunda vez
          } else {
            this.puntosTruqueUsuario = 1
            this.puntosTruqueRival = 1
            if (this.reparteUsuario) {
              this.tiraUsuario = false
              this.tiraRival = true
              this.cuandoTiraCartaRival()
            } else {
              this.tiraUsuario = true
              this.tiraRival = false
            }
          }
        // Ronda 3 - Ya han quedado pardas las otras 2 anteriores
        } else if (this.ronda === 2) {
          // Si el jugador ha ganado la primera mano (favorece el empate)
          if (this.cartasUsuarioTapete[0].valor > this.cartasRivalTapete[0].valor) {
            this.puntosTruqueUsuario += 1
          // Si el rival ha ganado la primera mano (favorece el empate)
          } else if (this.cartasUsuarioTapete[0].valor < this.cartasRivalTapete[0].valor) {
            this.puntosTruqueRival += 1
          // Si ya han sido pardas y es la tercera vez
          } else {
            if (this.reparteUsuario) {
              this.puntosTruqueRival = 2
            } else if (!this.reparteUsuario) {
              this.puntosTruqueUsuario = 2
            }
          }
        }
      // Cuando la carta del rival es mayor que la del usuario
      } else if (this.cartasUsuarioTapete[this.ronda].valor < this.cartasRivalTapete[this.ronda].valor) {
        this.puntosTruqueRival += 1
        this.tiraUsuario = false
        this.tiraRival = true
        if (this.puntosTruqueRival < 2) {
          this.cuandoTiraCartaRival()
        }
      }
      this.cuandoGanaDosManos()
    },
    // Funcion cuando alguno de los componentes gana dos manos
    cuandoGanaDosManos: function () {
      let that = this
      this.bloquearInterfaz = true
      setTimeout(function () {
        if (that.puntosTruqueUsuario === 2) {
          // Sumamos las chinas correspondientes
          that.chinasUsuario += 1
          that.tiraUsuario = false
          that.tiraRival = false
          // Barajamos
          that.barajarCartas()
          that.pasarMazoBarajar()
          that.baraja()
          that.ganaZanca()
        } else if (that.puntosTruqueRival === 2) {
          // Sumamos las chinas correspondientes
          that.chinasRival += 1
          that.tiraUsuario = false
          that.tiraRival = false
          // Barajamos
          that.barajarCartas()
          that.pasarMazoBarajar()
          that.baraja()
          that.ganaZanca()
        }
        that.bloquearInterfaz = false
      }, 1000)
    },
    // === TRUQUE Y ENVIDO ===
    // |
    // |
    // Funcion para calcular el envido que tiene el usuario
    calcularEnvidoUsuario: function () {
      let cartaAlta = 0
      let cartaBaja = 8
      let cartaFinal = ''
      // Si tiene una carta de cada palo
      if (this.cartasUsuario[0].palo !== this.cartasUsuario[1].palo && this.cartasUsuario[1].palo !== this.cartasUsuario[2].palo && this.cartasUsuario[0].palo !== this.cartasUsuario[2].palo) {
        for (let carta of this.cartasUsuario) {
          if (carta.numero > cartaAlta) {
            cartaAlta = carta.numero
            cartaFinal = carta.numero + 10
          }
        }
      // Si tiene las dos primeras cartas del mismo palo
      } else if (this.cartasUsuario[0].palo === this.cartasUsuario[1].palo && this.cartasUsuario[1].palo !== this.cartasUsuario[2].palo) {
        cartaFinal = this.cartasUsuario[0].numero + this.cartasUsuario[1].numero + 20
      // Si tiene las dos ultimas cartas del mismo palo
      } else if (this.cartasUsuario[0].palo !== this.cartasUsuario[1].palo && this.cartasUsuario[1].palo === this.cartasUsuario[2].palo) {
        cartaFinal = this.cartasUsuario[1].numero + this.cartasUsuario[2].numero + 20
      // Si tiene la primera y ultima carta del mismo palo
      } else if (this.cartasUsuario[0].palo !== this.cartasUsuario[1].palo && this.cartasUsuario[1].palo !== this.cartasUsuario[2].palo && this.cartasUsuario[0].palo === this.cartasUsuario[2].palo) {
        cartaFinal = this.cartasUsuario[0].numero + this.cartasUsuario[2].numero + 20
      } else if (this.cartasUsuario[0].palo === this.cartasUsuario[1].palo && this.cartasUsuario[1].palo === this.cartasUsuario[2].palo) {
        let posicionCartaBaja = -1
        let clonCartasUsuario = this.cartasUsuario
        this.cartasUsuario.each(function (index, carta) {
          if (carta.numero < cartaBaja) {
            cartaBaja = carta.numero
            posicionCartaBaja = index
          }
        })
        this.clonCartasUsuario.splice(posicionCartaBaja, 1)
        cartaFinal = clonCartasUsuario[0].numero + clonCartasUsuario[1].numero + 20
      }
      return cartaFinal
    },
    // Funcion para calcular el envido que tiene el rival
    calcularEnvidoRival: function () {
      let cartaAlta = 0
      let cartaBaja = 8
      let cartaFinal = ''
      // Si tiene una carta de cada palo
      if (this.cartasRival[0].palo !== this.cartasRival[1].palo && this.cartasRival[1].palo !== this.cartasRival[2].palo && this.cartasRival[0].palo !== this.cartasRival[2].palo) {
        for (let carta of this.cartasRival) {
          if (carta.numero > cartaAlta) {
            cartaAlta = carta.numero
            cartaFinal = carta.numero + 10
          }
        }
      // Si tiene las dos primeras cartas del mismo palo
      } else if (this.cartasRival[0].palo === this.cartasRival[1].palo && this.cartasRival[1].palo !== this.cartasRival[2].palo) {
        cartaFinal = this.cartasRival[0].numero + this.cartasRival[1].numero + 20
      // Si tiene las dos ultimas cartas del mismo palo
      } else if (this.cartasRival[0].palo !== this.cartasRival[1].palo && this.cartasRival[1].palo === this.cartasRival[2].palo) {
        cartaFinal = this.cartasRival[1].numero + this.cartasRival[2].numero + 20
      // Si tiene la primera y ultima carta del mismo palo
      } else if (this.cartasRival[0].palo !== this.cartasRival[1].palo && this.cartasRival[1].palo !== this.cartasRival[2].palo && this.cartasRival[0].palo === this.cartasRival[2].palo) {
        cartaFinal = this.cartasRival[0].numero + this.cartasRival[2].numero + 20
      } else if (this.cartasRival[0].palo === this.cartasRival[1].palo && this.cartasRival[1].palo === this.cartasRival[2].palo) {
        let posicionCartaBaja = -1
        let clonCartasRival = this.cartasRival
        this.cartasRival.each(function (index, carta) {
          if (carta.numero < cartaBaja) {
            cartaBaja = carta.numero
            posicionCartaBaja = index
          }
        })
        this.clonCartasRival.splice(posicionCartaBaja, 1)
        cartaFinal = clonCartasRival[0].numero + clonCartasRival[1].numero + 20
      }
      return cartaFinal
    },
    // === BARAJAR ===
    // |
    // |
    // Funcion para barajar y poner los contadores a 0
    barajarCartas: function () {
      // Vaciamos los arrays
      this.cartasUsuarioTapete = []
      this.cartasRivalTapete = []
      this.cartasUsuario = []
      this.cartasRival = []
      // Volvemos a llenar el array principal (barajamos)
      this.cartas = [
        {id: 1, nombre: 'TresDeOros', valor: 5, numero: 3, palo: 1, ruta: '/static/img/cartas/tres-oros.svg'},
        {id: 2, nombre: 'CuatroDeOros', valor: 1, numero: 4, palo: 1, ruta: '/static/img/cartas/cuatro-oros.svg'},
        {id: 3, nombre: 'CincoDeOros', valor: 2, numero: 5, palo: 1, ruta: '/static/img/cartas/cinco-oros.svg'},
        {id: 4, nombre: 'SeisDeOros', valor: 3, numero: 6, palo: 1, ruta: '/static/img/cartas/seis-oros.svg'},
        {id: 5, nombre: 'SieteDeOros', valor: 6, numero: 7, palo: 1, ruta: '/static/img/cartas/siete-oros.svg'},
        {id: 6, nombre: 'TresDeCopas', valor: 5, numero: 3, palo: 2, ruta: '/static/img/cartas/tres-copas.svg'},
        {id: 7, nombre: 'CuatroDeCopas', valor: 1, numero: 4, palo: 2, ruta: '/static/img/cartas/cuatro-copas.svg'},
        {id: 8, nombre: 'CincoDeCopas', valor: 2, numero: 5, palo: 2, ruta: '/static/img/cartas/cinco-copas.svg'},
        {id: 9, nombre: 'SeisDeCopas', valor: 3, numero: 6, palo: 2, ruta: '/static/img/cartas/seis-copas.svg'},
        {id: 10, nombre: 'SieteDeCopas', valor: 4, numero: 7, palo: 2, ruta: '/static/img/cartas/siete-copas.svg'},
        {id: 11, nombre: 'UnoDeEspadas', valor: 9, numero: 1, palo: 3, ruta: '/static/img/cartas/uno-espadas.svg'},
        {id: 12, nombre: 'TresDeEspadas', valor: 5, numero: 3, palo: 3, ruta: '/static/img/cartas/tres-espadas.svg'},
        {id: 13, nombre: 'CuatroDeEspadas', valor: 1, numero: 4, palo: 3, ruta: '/static/img/cartas/cuatro-espadas.svg'},
        {id: 14, nombre: 'CincoDeEspadas', valor: 2, numero: 5, palo: 3, ruta: '/static/img/cartas/cinco-espadas.svg'},
        {id: 15, nombre: 'SeisDeEspadas', valor: 3, numero: 6, palo: 3, ruta: '/static/img/cartas/seis-espadas.svg'},
        {id: 16, nombre: 'SieteDeEspadas', valor: 7, numero: 7, palo: 3, ruta: '/static/img/cartas/siete-espadas.svg'},
        {id: 17, nombre: 'UnoDeBastos', valor: 8, numero: 1, palo: 4, ruta: '/static/img/cartas/uno-bastos.svg'},
        {id: 18, nombre: 'TresDeBastos', valor: 5, numero: 3, palo: 4, ruta: '/static/img/cartas/tres-bastos.svg'},
        {id: 19, nombre: 'CuatroDeBastos', valor: 1, numero: 4, palo: 4, ruta: '/static/img/cartas/cuatro-bastos.svg'},
        {id: 20, nombre: 'CincoDeBastos', valor: 2, numero: 5, palo: 4, ruta: '/static/img/cartas/cinco-bastos.svg'},
        {id: 21, nombre: 'SeisDeBastos', valor: 3, numero: 6, palo: 4, ruta: '/static/img/cartas/seis-bastos.svg'},
        {id: 22, nombre: 'SieteDeBastos', valor: 4, numero: 7, palo: 4, ruta: '/static/img/cartas/siete-bastos.svg'}
      ]
      // Volvemos a rellenar los arrays
      this.cartasUsuario.push(this.cogerCartaAzar(), this.cogerCartaAzar(), this.cogerCartaAzar())
      this.cartasRival.push(this.cogerCartaAzar(), this.cogerCartaAzar(), this.cogerCartaAzar())
      // Ponemos a 0 la ronda y los puntos del truque
      this.ronda = 0
      this.puntosTruqueUsuario = 0
      this.puntosTruqueRival = 0
      this.calcularEnvidoRival()
      console.log(this.calcularEnvidoRival())
      this.calcularEnvidoUsuario()
      console.log(this.calcularEnvidoUsuario())
    },
    // Funcion para pasar el mazo y que reparta el contrario
    pasarMazoBarajar: function () {
      if (this.reparteUsuario === false) {
        this.reparteUsuario = true
        this.tiraRival = true
        this.cuandoTiraCartaRival()
      } else {
        this.reparteUsuario = false
      }
    },
    // === CONTADOR DE CHINAS PARA LAS ZANCAS ===
    // |
    // |
    // Funcion cuando alguno de los jugadores llega a conseguir la zanca
    ganaZanca: function () {
      // Cuando se juega a dos zancas
      if (this.jugarZanca === 1) {
        if (this.chinasUsuario === 20 && this.marcadorUsuario === 0) {
          this.marcadorUsuario = 1
          this.espacioUsuarioUno = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 0) {
          this.marcadorRival = 1
          this.espacioRivalUno = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.marcadorUsuario === 1 && this.chinasUsuario === 20) {
          this.espacioUsuarioDos = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.marcadorRival === 1 && this.chinasRival === 20) {
          this.espacioRivalDos = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        }
        this.declararGanador()
      // Cuando se juega a tres zancas
      } else if (this.jugarZanca === 2) {
        if (this.chinasUsuario === 20 && this.marcadorUsuario === 0) {
          this.marcadorUsuario = 1
          this.espacioUsuarioUno = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 0) {
          this.marcadorRival = 1
          this.espacioRivalUno = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.marcadorUsuario === 1 && this.chinasUsuario === 20) {
          this.marcadorUsuario = 2
          this.espacioUsuarioDos = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.marcadorRival === 1 && this.chinasRival === 20) {
          this.marcadorRival = 2
          this.espacioRivalDos = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.marcadorUsuario === 2 && this.chinasUsuario === 20) {
          this.espacioUsuarioTres = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.marcadorRival === 2 && this.chinasRival === 20) {
          this.espacioRivalTres = '/static/img/pantalla-juego/media-cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        }
        this.declararGanador()
      // Cuando se juega a un juego (2 zancas)
      } else if (this.jugarZanca === 3) {
        if (this.chinasUsuario === 20 && this.marcadorUsuario === 0) {
          this.marcadorUsuario = 1
          this.espacioUsuarioUno = '/static/img/pantalla-juego/media-cruz.svg'
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 0) {
          this.marcadorRival = 1
          this.espacioRivalUno = '/static/img/pantalla-juego/media-cruz.svg'
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasUsuario === 20 && this.marcadorUsuario === 1) {
          this.marcadorUsuario = 2
          this.marcadorRival = 2
          this.espacioUsuarioUno = '/static/img/pantalla-juego/cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 1) {
          this.marcadorUsuario = 2
          this.marcadorRival = 2
          this.espacioRivalUno = '/static/img/pantalla-juego/cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasUsuario === 20 && this.marcadorUsuario === 2) {
          this.marcadorUsuario = 3
          this.espacioUsuarioDos = '/static/img/pantalla-juego/media-cruz.svg'
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 2) {
          this.marcadorRival = 3
          this.espacioRivalDos = '/static/img/pantalla-juego/media-cruz.svg'
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasUsuario === 20 && this.marcadorUsuario === 3) {
          this.marcadorUsuario = 4
          this.marcadorRival = 4
          this.espacioUsuarioDos = '/static/img/pantalla-juego/cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 3) {
          this.marcadorUsuario = 4
          this.marcadorRival = 4
          this.espacioRivalDos = '/static/img/pantalla-juego/cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasUsuario === 20 && this.marcadorUsuario === 4) {
          this.marcadorUsuario = 5
          this.espacioUsuarioTres = '/static/img/pantalla-juego/media-cruz.svg'
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 4) {
          this.marcadorRival = 5
          this.espacioRivalTres = '/static/img/pantalla-juego/media-cruz.svg'
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasUsuario === 20 && this.marcadorUsuario === 5) {
          this.menuEfectuarAccion = true
          this.accion = 'Victoria'
          this.espacioUsuarioTres = '/static/img/pantalla-juego/cruz.svg'
          this.zancaUsuario += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        } else if (this.chinasRival === 20 && this.marcadorRival === 5) {
          this.menuEfectuarAccion = true
          this.accion = 'Derrota'
          this.espacioRivalTres = '/static/img/pantalla-juego/cruz.svg'
          this.zancaRival += 1
          this.chinasUsuario = 0
          this.chinasRival = 0
        }
        this.declararGanador()
      }
    },
    // Funcion para que aparezca un mensaje como si ganas o pierdes
    declararGanador: function () {
      if (this.jugarZanca === 1) {
        if (this.zancaUsuario === 2) {
          this.menuEfectuarAccion = true
          this.accion = 'Victoria'
        } else if (this.zancaRival === 2) {
          this.menuEfectuarAccion = true
          this.accion = 'Derrota'
        }
      } else if (this.jugarZanca === 2) {
        if (this.zancaUsuario === 3) {
          this.menuEfectuarAccion = true
          this.accion = 'Victoria'
        } else if (this.zancaRival === 3) {
          this.menuEfectuarAccion = true
          this.accion = 'Derrota'
        }
      } else if (this.jugarZanca === 3) {
        if (this.zancaUsuario === 2) {
          this.menuEfectuarAccion = true
          this.accion = 'Victoria'
        } else if (this.zancaRival === 2) {
          this.menuEfectuarAccion = true
          this.accion = 'Derrota'
        }
      }
    },
    // ==== FUNCIONES PARA LAS PANTALLAS A A MOSTRAR ====
    // |
    // |
    // Dependiendo del boton que elijas, se añadira un numero para saber a cuanto se juega
    zancasParaJugar: function (num) {
      this.jugarZanca = num
    },
    // Se muestra el menu salir
    mostrarMenuSalir: function () {
      this.menuSalir = true
    },
    // Si click en NO en el menu salir te vuelve a la partida
    abandonarPartidaNo: function () {
      this.menuSalir = false
    },
    // Si el usuario click en ENVIDAR se muestra el menu para hacerlo
    mostrarMenuEnvidarUsuario: function () {
      this.menuEnvidaUsuario = true
    },
    // El menu ENVIDAR da distintos numeros que usaremos para ejecutar la acción que queramos
    envidaUsuario: function (num) {
      // Salir sin envidar
      if (num === 5) {
        this.menuEnvidaUsuario = false
      }
      // Aumentar 1 china el envido
      if (num === 3 && this.numeroChinasEnvido < 19) {
        this.numeroChinasEnvido += 1
      }
      // Disminuir 1 china el envido
      if (num === 4 && this.numeroChinasEnvido > 1) {
        this.numeroChinasEnvido -= 1
      }
    },
    // ==== FUNCIONES DE CALCULADORA ====
    // Funcion para coger una carta al azar del jason y quitarla del array
    cogerCartaAzar: function () {
      let numRandom = this.randomIntFromInterval(0, this.cartas.length - 1)
      return this.cartas.splice(numRandom, 1)[0]
    },
    // Funcion para devolver un numero aleatorio
    randomIntFromInterval: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>
