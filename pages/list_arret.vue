<!-- pages/direction.vue => localhost:3000/direction -->

<template>
  <div class="body">
    <h1>SpeechMobile</h1>

    <h2 class="bienvenue">Choisissez votre arret</h2>
    <button class="choix" @click="speak('Madrague de Montredon'),submit()">
      <a>Madrague de Montredon</a>
    </button>
    <button class="choix" @click="speak('Madrague Mont Rose'),submit()">
      <a href>Madrague Mont Rose</a>
    </button>
    <button class="choix" @click="speak('Madrague Lieutenant Mouli'),submit()">
      <a>Madrague Lieutenant Moulin</a>
    </button>
    <button class="choix" @click="speak('Verrerie'),submit()">
      <a>Verrerie</a>
    </button>
    <button class="choix" @click="speak('Grotte Roland'),submit()">
      <a>Grotte Roland</a>
    </button>
    <button class="choix" @click="speak('Engalière'),submit()">
      <a>Engalière</a>
    </button>
    <button class="choix" @click="speak('Montredont Pastré'),submit()">
      <a>Montredont Pastré</a>
    </button>
    <button class="choix" @click="speak('Montredont Chancel'),submit()">
      <a>Montredont Chancel</a>
    </button>
    <button class="choix" @click="speak('Pointe Rouge'),submit()">
      <a>Pointe Rouge</a>
    </button>
    <button class="choix" @click="speak('Tiboulen'),submit()">
      <a>Tiboulen</a>
    </button>
    <button class="choix" @click="speak('Vieille Chapelle'),submit()">
      <a>Vieille Chapelle</a>
    </button>
  </div>
</template>
<script>
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default {
  data: function() {
    return {
      message: '',
      isActive: false
    }
  },

  methods: {
    submit(item) {
      this.$router.push({
        path: '/final'
      })
    },

    speak(item) {
      var msg = new SpeechSynthesisUtterance()
      var voices = window.speechSynthesis.getVoices()
      msg.voice = voices[6]
      msg.voiceURI = 'native'
      msg.volume = 1
      msg.rate = 0.9
      msg.pitch = 0.9
      msg.text =
        "Vous avez choisi l'arret " +
        item +
        ' le passage du prochain bus est dans 4 minutes'
      msg.lang = 'fr-CA'
      speechSynthesis.speak(msg)
    }
  },
  mounted: function() {
    this.$axios
      .$get(
        'http://marcelle-mobi-api.herokuapp.com/vehicules/rtm?grant_token=code4marseillefrioul#'
      )
      .then(response => {
        this.tab = response
      })
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 85px;
  color: white;
}

h2 {
  text-align: center;
  font-size: 85px;
}

h3 {
  color: red;
}

.bienvenue {
  font-size: 50px;
}

.cercle {
  display: block;
  width: 200px;
  height: 200px;
  margin: 25px auto;
  background-color: white;
  border-radius: 50%;
  color: black;
  text-align: center;
}

.body {
  background: #25a9e8;
  color: white;
}

.choix {
  color: white;
  text-decoration: none;
  font-size: 100px;
  font-weight: bold;
  width: 95%;
  background: #66c3ef;
  border: none;
  padding: 10px;
  margin: 30px;
  margin-top: 50px;
}
</style>
