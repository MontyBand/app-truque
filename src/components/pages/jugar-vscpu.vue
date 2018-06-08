<template>
    <section class="pagina-jugar">
        <div class="container-fluid">
            <div class="logo_atras">
                <button class="btn-atras" onclick="history.go(-1)">
                        <img src="/static/img/menu/logo-atras.svg" alt="logo-volumen-activo">
                </button>
            </div>
            <div class="jugar_estructura">
                <div class="item1 cartas-rival"></div>
                <div class="item2 chinas-rival"></div>
                <div class="item3 perfil-rival"></div>
                <div class="item4 marcador"></div>
                <div class="item5 mazo-rival"></div>
                <div class="item6 chinas"></div>
                <div class="item7 mazo-usuario"></div>
                <div class="item8 perfil-usuario"></div>
                <div class="item9 chinas-usuario"></div>
                <div class="item10 cartas-usuario"></div>
                <div class="item11 truco-usuario"></div>
                <div class="item12 envido-usuario"></div>
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
