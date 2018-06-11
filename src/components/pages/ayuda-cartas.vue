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
                <h2>Inspiración</h2>
                <p>Como frecuente jugador de cartas, aprecio enormemente el diseño de éstas y resulta de gran <strong>importancia</strong> a la hora de jugar. El objetivo para el diseño de esta baraja fue que el usuario supiera en un <strong>breve vistazo</strong> la carta de la que se trataba. Esto puede resultar muy difícil, pero se consiguió.</p>
                <p>En cuanto a <strong>la temática</strong>, nos ayudamos de la popular serie <strong>"Juego de Tronos"</strong> para reflejar cada uno de los palos de la baraja, al igual que toda la <strong>estructura del juego</strong>. Optamos por un <strong>diseño elegante</strong> pero sencillo, sin abusar de detalles para reflejar de la mejor manera posible el diseño final de las cartas.</p>
                <h2>Los bastos</h2>
                <p>A los bastos se les dio la misión de representar a <strong>"La Casa Stark"</strong>. Para ellos, el símbolo que les acompaña a lo largo de la serie es <strong>el lobo</strong>. De tal manera que se quiso simbolizar ese animal, pero al tener que estar relacionado con los bastos de una baraja española normal, nos vimos en la situación de coger el <strong>mango de la espada de Jon Snow</strong> (el cual es un mango normal unido a una espada con una cara de lobo al final).</p>
                <div class="row bastos">
                    <img class="col" src="/static/img/cartas/uno-bastos.svg" alt="carta-uno-de-bastos">
                    <img class="col" src="/static/img/cartas/tres-bastos.svg" alt="carta-tres-de-bastos">
                    <img class="col" src="/static/img/cartas/cuatro-bastos.svg" alt="carta-cuatro-de-bastos">
                </div>
                <div class="row bastos">
                    <img class="col" src="/static/img/cartas/cinco-bastos.svg" alt="carta-cinco-de-bastos">
                    <img class="col" src="/static/img/cartas/seis-bastos.svg" alt="carta-seis-de-bastos">
                    <img class="col" src="/static/img/cartas/siete-bastos.svg" alt="carta-siete-de-bastos">
                </div>
                <h2>Las espadas</h2>
                <p>Las espadas, gracias a su gama de colores fríos, pensamos que era la adecuada para hacer referencia a <strong>"los caminantes blancos"</strong> (white walkers). Se pensó cómo sería una espada que les representase. Se diseñó a raíz de ser <strong>muy estética</strong>, con muchas <strong>curvas</strong> y muchos picos, un <strong>mango agresivo</strong> y siguiendo con esa gama fría en todo momento.</p>
                <p>Además, al ser el uno de espadas la carta con <strong>mayor valor</strong> del juego, se necesitaba obligatoriamente que fuera la más bonita de todas, con el diseño más cuidado.</p>
                <div class="row espadas">
                    <img class="col" src="/static/img/cartas/uno-espadas.svg" alt="carta-uno-de-espadas">
                    <img class="col" src="/static/img/cartas/tres-espadas.svg" alt="carta-tres-de-espadas">
                    <img class="col" src="/static/img/cartas/cuatro-espadas.svg" alt="carta-cuatro-de-espadas">
                </div>
                <div class="row espadas">
                    <img class="col" src="/static/img/cartas/cinco-espadas.svg" alt="carta-cinco-de-espadas">
                    <img class="col" src="/static/img/cartas/seis-espadas.svg" alt="carta-seis-de-espadas">
                    <img class="col" src="/static/img/cartas/siete-espadas.svg" alt="carta-siete-de-espadas">
                </div>
                <h2>Los oros</h2>
                <p>La familia que mejor puede representar el palo de los oros es <strong>"La Casa Lannister"</strong>, por toda su relación con <strong>el dinero</strong> en la serie. De tal manera que creamos unas monedas con la intención de mostrar de manera sutil el emblema de los lannister.</p>
                <div class="row oros">
                    <img class="col img-fluid" src="/static/img/cartas/tres-oros.svg" alt="carta-tres-de-oros">
                    <img class="col img-fluid" src="/static/img/cartas/cuatro-oros.svg" alt="carta-cuatro-de-oros">
                </div>
                <div class="row oros">
                    <img class="col img-fluid" src="/static/img/cartas/cinco-oros.svg" alt="carta-cinco-de-oros">
                    <img class="col img-fluid" src="/static/img/cartas/seis-oros.svg" alt="carta-seis-de-oros">
                    <img class="col img-fluid" src="/static/img/cartas/siete-oros.svg" alt="carta-siete-de-oros">
                </div>
                <h2>Las copas</h2>
                <p>Para el diseño de las copas, nos ayudamos de la imagen del bando más representativo que queda en la serie, el cual son <strong>"Los dragones"</strong>. Por ello, se intentó vectorizar una copa formada por una base ancha y un <strong>huevo roto de dragón</strong>, el cual se adorna con pequeñas piedras o diamantes.</p>
                <div class="row copas">
                    <img class="col img-fluid" src="/static/img/cartas/tres-copas.svg" alt="carta-tres-de-copas">
                    <img class="col img-fluid" src="/static/img/cartas/cuatro-copas.svg" alt="carta-cuatro-de-copas">
                </div>
                <div class="row copas">
                    <img class="col img-fluid" src="/static/img/cartas/cinco-copas.svg" alt="carta-cinco-de-copas">
                    <img class="col img-fluid" src="/static/img/cartas/seis-copas.svg" alt="carta-seis-de-copas">
                    <img class="col img-fluid" src="/static/img/cartas/siete-copas.svg" alt="carta-siete-de-copas">
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
