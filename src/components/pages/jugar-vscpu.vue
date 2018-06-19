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
                <div v-if="!reparteUsuario" class="mazo">
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
                <div v-if="reparteUsuario" class="mazo">
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
        {id: 1, nombre: 'TresDeOros', valor: 5, palo: 1, ruta: '/static/img/cartas/tres-oros.svg'},
        {id: 2, nombre: 'CuatroDeOros', valor: 1, palo: 1, ruta: '/static/img/cartas/cuatro-oros.svg'},
        {id: 3, nombre: 'CincoDeOros', valor: 2, palo: 1, ruta: '/static/img/cartas/cinco-oros.svg'},
        {id: 4, nombre: 'SeisDeOros', valor: 3, palo: 1, ruta: '/static/img/cartas/seis-oros.svg'},
        {id: 5, nombre: 'SieteDeOros', valor: 6, palo: 1, ruta: '/static/img/cartas/siete-oros.svg'},
        {id: 6, nombre: 'TresDeCopas', valor: 5, palo: 2, ruta: '/static/img/cartas/tres-copas.svg'},
        {id: 7, nombre: 'CuatroDeCopas', valor: 1, palo: 2, ruta: '/static/img/cartas/cuatro-copas.svg'},
        {id: 8, nombre: 'CincoDeCopas', valor: 2, palo: 2, ruta: '/static/img/cartas/cinco-copas.svg'},
        {id: 9, nombre: 'SeisDeCopas', valor: 3, palo: 2, ruta: '/static/img/cartas/seis-copas.svg'},
        {id: 10, nombre: 'SieteDeCopas', valor: 4, palo: 2, ruta: '/static/img/cartas/siete-copas.svg'},
        {id: 11, nombre: 'UnoDeEspadas', valor: 9, palo: 3, ruta: '/static/img/cartas/uno-espadas.svg'},
        {id: 12, nombre: 'TresDeEspadas', valor: 5, palo: 3, ruta: '/static/img/cartas/tres-espadas.svg'},
        {id: 13, nombre: 'CuatroDeEspadas', valor: 1, palo: 3, ruta: '/static/img/cartas/cuatro-espadas.svg'},
        {id: 14, nombre: 'CincoDeEspadas', valor: 2, palo: 3, ruta: '/static/img/cartas/cinco-espadas.svg'},
        {id: 15, nombre: 'SeisDeEspadas', valor: 3, palo: 3, ruta: '/static/img/cartas/seis-espadas.svg'},
        {id: 16, nombre: 'SieteDeEspadas', valor: 7, palo: 3, ruta: '/static/img/cartas/siete-espadas.svg'},
        {id: 17, nombre: 'UnoDeBastos', valor: 8, palo: 4, ruta: '/static/img/cartas/uno-bastos.svg'},
        {id: 18, nombre: 'TresDeBastos', valor: 5, palo: 4, ruta: '/static/img/cartas/tres-bastos.svg'},
        {id: 19, nombre: 'CuatroDeBastos', valor: 1, palo: 4, ruta: '/static/img/cartas/cuatro-bastos.svg'},
        {id: 20, nombre: 'CincoDeBastos', valor: 2, palo: 4, ruta: '/static/img/cartas/cinco-bastos.svg'},
        {id: 21, nombre: 'SeisDeBastos', valor: 3, palo: 4, ruta: '/static/img/cartas/seis-bastos.svg'},
        {id: 22, nombre: 'SieteDeBastos', valor: 4, palo: 4, ruta: '/static/img/cartas/siete-bastos.svg'}
      ],
      jugarZanca: '',
      nombreUsuario: 'Jugador 1',
      nombreRival: 'CPU',
      // CUANDO TIRA RIVAL
      reparteUsuario: false,
      tiraRival: false,
      tiraUsuario: true,
      // CHINAS
      chinasRival: 0,
      chinasUsuario: 0,
      // TRUQUE
      puntosTruqueUsuario: 0,
      puntosTruqueRival: 0,
      ronda: 0,
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
  },
  methods: {
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
    // Funcion para que cuanto toques en la carta aparezca en el tapete
    jugarCartasUsuario: function (num) {
      console.log(this.reparteUsuario)
      if (this.tiraUsuario === true) {
        this.cuandoTiraUsuario(num)
        this.tiraRival = true
        this.cuandoTiraRival(num)
        console.log('Tira primero el usuario')
      } else {
        this.cuandoTiraRival(num)
        this.tiraUsuario = true
        this.cuandoTiraUsuario(num)
        console.log('Tira primero el rival')
      }
      // Valor de las cartas sobre el tapete
      if (this.cartasUsuarioTapete[this.ronda].valor > this.cartasRivalTapete[this.ronda].valor) {
        this.puntosTruqueUsuario += 1
        this.tiraUsuario = true
        this.tiraRival = false
      } if (this.cartasUsuarioTapete[this.ronda].valor === this.cartasRivalTapete[this.ronda].valor) {
        this.puntosTruqueUsuario += 1
        this.puntosTruqueRival += 1
      } if (this.cartasUsuarioTapete[this.ronda].valor < this.cartasRivalTapete[this.ronda].valor) {
        this.puntosTruqueRival += 1
        this.tiraUsuario = false
        this.tiraRival = true
      }
      this.ronda += 1
      if (this.puntosTruqueUsuario === 2) {
        // Sumamos las chinas correspondientes
        this.chinasUsuario += 1
        this.tiraUsuario = true
        this.tiraRival = false
        // Barajamos
        this.barajarCartas()
        this.pasarMazoBarajar()
        this.baraja()
      }
      if (this.puntosTruqueRival === 2) {
        // Sumamos las chinas correspondientes
        this.chinasRival += 1
        this.tiraUsuario = true
        this.tiraRival = false
        // Barajamos
        this.barajarCartas()
        this.pasarMazoBarajar()
        this.baraja()
      }
    },
    // Funcion para que la maquina sepa cuando tiene que tirar
    cuandoTiraRival: function (num) {
      if (this.tiraRival === true) {
        this.cartasRivalTapete.push(this.cartasRival.splice(num, 1)[0])
      }
    },
    // Funcion para que el usuario sepa cuando va a tirar
    cuandoTiraUsuario: function (num) {
      if (this.tiraUsuario === true) {
        this.cartasUsuarioTapete.push(this.cartasUsuario.splice(num, 1)[0])
      }
    },
    // Funcion para decir quien toca barajar
    baraja: function () {
      if (this.reparteUsuario === false) {
        this.tiraUsuario = true
        this.tiraRival = false
      } else {
        this.tiraUsuario = false
        this.tiraRival = true
      }
    },
    // Funcion para coger una carta al azar del jason y quitarla del array
    cogerCartaAzar: function () {
      let numRandom = this.randomIntFromInterval(0, this.cartas.length - 1)
      return this.cartas.splice(numRandom, 1)[0]
    },
    // Funcion para devolver un numero aleatorio
    randomIntFromInterval: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    // Funcion para pasar el mazo y que reparta el contrario
    pasarMazoBarajar: function () {
      if (this.reparteUsuario === false) {
        this.reparteUsuario = true
      } else {
        this.reparteUsuario = false
      }
    },
    // Funcion para barajar y poner los contadores a 0
    barajarCartas: function () {
      // Vaciamos los arrays
      this.cartasUsuarioTapete = []
      this.cartasRivalTapete = []
      this.cartasUsuario = []
      this.cartasRival = []
      // Volvemos a llenar el array principal (barajamos)
      this.cartas = [
        {id: 1, nombre: 'TresDeOros', valor: 5, palo: 1, ruta: '/static/img/cartas/tres-oros.svg'},
        {id: 2, nombre: 'CuatroDeOros', valor: 1, palo: 1, ruta: '/static/img/cartas/cuatro-oros.svg'},
        {id: 3, nombre: 'CincoDeOros', valor: 2, palo: 1, ruta: '/static/img/cartas/cinco-oros.svg'},
        {id: 4, nombre: 'SeisDeOros', valor: 3, palo: 1, ruta: '/static/img/cartas/seis-oros.svg'},
        {id: 5, nombre: 'SieteDeOros', valor: 6, palo: 1, ruta: '/static/img/cartas/siete-oros.svg'},
        {id: 6, nombre: 'TresDeCopas', valor: 5, palo: 2, ruta: '/static/img/cartas/tres-copas.svg'},
        {id: 7, nombre: 'CuatroDeCopas', valor: 1, palo: 2, ruta: '/static/img/cartas/cuatro-copas.svg'},
        {id: 8, nombre: 'CincoDeCopas', valor: 2, palo: 2, ruta: '/static/img/cartas/cinco-copas.svg'},
        {id: 9, nombre: 'SeisDeCopas', valor: 3, palo: 2, ruta: '/static/img/cartas/seis-copas.svg'},
        {id: 10, nombre: 'SieteDeCopas', valor: 4, palo: 2, ruta: '/static/img/cartas/siete-copas.svg'},
        {id: 11, nombre: 'UnoDeEspadas', valor: 9, palo: 3, ruta: '/static/img/cartas/uno-espadas.svg'},
        {id: 12, nombre: 'TresDeEspadas', valor: 5, palo: 3, ruta: '/static/img/cartas/tres-espadas.svg'},
        {id: 13, nombre: 'CuatroDeEspadas', valor: 1, palo: 3, ruta: '/static/img/cartas/cuatro-espadas.svg'},
        {id: 14, nombre: 'CincoDeEspadas', valor: 2, palo: 3, ruta: '/static/img/cartas/cinco-espadas.svg'},
        {id: 15, nombre: 'SeisDeEspadas', valor: 3, palo: 3, ruta: '/static/img/cartas/seis-espadas.svg'},
        {id: 16, nombre: 'SieteDeEspadas', valor: 7, palo: 3, ruta: '/static/img/cartas/siete-espadas.svg'},
        {id: 17, nombre: 'UnoDeBastos', valor: 8, palo: 4, ruta: '/static/img/cartas/uno-bastos.svg'},
        {id: 18, nombre: 'TresDeBastos', valor: 5, palo: 4, ruta: '/static/img/cartas/tres-bastos.svg'},
        {id: 19, nombre: 'CuatroDeBastos', valor: 1, palo: 4, ruta: '/static/img/cartas/cuatro-bastos.svg'},
        {id: 20, nombre: 'CincoDeBastos', valor: 2, palo: 4, ruta: '/static/img/cartas/cinco-bastos.svg'},
        {id: 21, nombre: 'SeisDeBastos', valor: 3, palo: 4, ruta: '/static/img/cartas/seis-bastos.svg'},
        {id: 22, nombre: 'SieteDeBastos', valor: 4, palo: 4, ruta: '/static/img/cartas/siete-bastos.svg'}
      ]
      // Volvemos a rellenar los arrays
      this.cartasUsuario.push(this.cogerCartaAzar(), this.cogerCartaAzar(), this.cogerCartaAzar())
      this.cartasRival.push(this.cogerCartaAzar(), this.cogerCartaAzar(), this.cogerCartaAzar())
      // Ponemos a 0 la ronda y los puntos del truque
      this.ronda = 0
      this.puntosTruqueUsuario = 0
      this.puntosTruqueRival = 0
    }
  }
}
</script>
