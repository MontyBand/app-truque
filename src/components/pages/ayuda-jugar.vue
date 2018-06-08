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
                    <h1>cómo jugar</h1>
                </div>
                <div class="titulo_borde">
                    <img src="/static/img/submenu/cuadro-subtitulo.svg" alt="borde para introducir el titulo">
                </div>
            </div>
            <div class="ayuda_texto">
                <h2>Historia</h2>
                <p>Existe una <strong>leyenda</strong> asociada a que sean pocas las cartas que se emplean en el juego. Dicen los libros musulmanes, que los musulmanes españoles disponían de una baraja entera, pero que en un descuido, los chiquillos la cogieron para jugar a guerras. <strong>Recortaron las figuras</strong>, es decir, los reyes, caballos y sotas; designaron el <strong>as de oros como símbolo</strong> y el de <strong>copas para premio</strong> de los campeonatos. Claro está, quedaron nada más que las cartas con las que se juega al truque. Disgustados, al ver que no podían hacer una partida de brisca, idearon otro juego y de allí nació <strong>"el truc"</strong>.</p>
                <p>A partir de ahí, dependiendo de la zona geográfica, <strong>el truque</strong> se desarrollaba de maneras muy distintas. Los cambios entre <strong>Europa y América del sur</strong> son más pronunciados, ya que incluso cambian el <strong>número de cartas</strong> que se utilizan. Sin embargo, en España hay ciertos detalles que cada zona interpreta de una manera, pero que, en general, la sistemática del juego es siempre la misma.</p>
                <p>En este juego nos centraremos en <strong>el truque</strong> desarrollado en el centro peninsular, en la zona de Castilla-La Mancha.</p>
                <h2>Valor de las cartas</h2>
                <p>En <strong>El Truque</strong> se juega con 22 cartas. Cada una de ellas tiene un valor, que te ayudará a la hora de conseguir puntos al truque (que explicaremos más adelante). El valor de las cartas, de mayor a menor, es el siguiente:</p>
                <div class="texto-centrado text-center p-3">
                    <p>1 de espadas</p>
                    <p>1 de bastos</p>
                    <p>7 de espadas</p>
                    <p>7 de oros</p>
                    <p>Los treses</p>
                    <p>7 de copas / bastos</p>
                    <p>Los seises</p>
                    <p>Los cincos</p>
                    <p>Los cuatros</p>
                </div>
                <h2>Desarrollo del juego</h2>
                <p>Para empezar, se reparten 3 cartas a cada jugador. Una vez recibas tus cartas, podrás hacer señas a tu compañero (en caso de jugar 2 vs 2) para saber las cartas que lleváis entre ambos y jugar de la mejor manera posible esa mano. En <strong>"El Truque"</strong>, hay dos formas de jugarse los puntos: al envido y/o al truco.</p>
                <h3>El envido</h3>
                <p>Para el <strong>envido</strong> se han de tener 2 cartas del mismo palo (si hay tres del mismo palo solo se cuentan las dos mayores), se suma su valor y se le añade veinte (10 por cada carta). En el caso de tener una carta de cada palo, se usa la de valor más alto (por ejemplo, un 7 de bastos sería 17 de envite, si no tienes más bastos). El máximo que se puede tener es 33 (6 + 7 + 20).</p>
                <p>Sólo se puede envidar hasta que el último jugador eche la primera carta. Antes de eso, cualquiea de los jugadores, en su turno, puede ejecutar la acción de <strong>envidar.</strong>Si un jugador truca antes de envidar, los rivales pueden ejecutar igualmente esa acción, que prioriza a la hora de los puntos.</p>
                <p>En caso de empate en el envido, prioriza el jugador que esté a la derecha del encargado de repartir cartas en ese momento. Ese jugador se le denomina <strong>"mano"</strong>. A partir de ahír, se da prioridad a derechas.</p>
                <p>Cuando un jugador activa la acción: "envido", el rival puede querer, no querer o subir la apuesta. Si quieres, el ganador se lleva dos chinas. Si no quieres, el rival se lleva una china. En caso de subir la apuesta, puedes subir el número que quieras de chinas, hasta el máximo que es "la falta", donde se juegan las chinas que le faltan al jugador que más lleva hasta llegar a 20.</p>
                <h3>El truque</h3>
                <p>La pareja que gana la primera ronda empieza la segunda y el que gana la segunda empieza la tercera, siempre el jugador que ha ganado de los 2. En el caso de que haya cartas con el mismo valor <strong>(se hacen "pardas")</strong> la primera mano (Ej.: tres de bastos y tres de copas) se decidirá por quien juegue la carta mayor en valor del truco en la segunda mano. Si se vuelven a dejar pardas, ganará quién tenga la carta de mayor valor del truco en la tercera mano.</p>
                <p>Los puntos (chinas) del <strong>“truco”</strong> se pueden jugar en cualquier momento de la partida. Si una pareja quiere jugárselos, activa la orden: "Truco". Si la otra pareja cree que va a poder ganar dos de las tres rondas, puede aceptar la apuesta y contestar: “quiero”. Se puede seguir subiendo la apuesta con las exclamaciones: “Retruco”, luego: "nueve", después: "doce" y finalmente: "fuera de juego", con el que automáticamente ganas la zanca.</p>
                <h2>Las chinas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a tempora, dolor voluptatibus temporibus sint aliquam cupiditate? Veritatis incidunt tempora rerum quia magni veniam aspernatur distinctio earum repellendus, possimus consequuntur.</p>
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a tempora, dolor voluptatibus temporibus sint aliquam cupiditate? Veritatis incidunt tempora rerum quia magni veniam aspernatur distinctio earum repellendus, possimus consequuntur.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PageAyudaJugar',
  data () {
    return {
    }
  }
}
</script>
