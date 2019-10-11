<!-- pages/direction.vue => localhost:3000/direction -->

<template>
  <div class="body">
    <h1>SpeechMobile</h1>

    <h2 class="bienvenue">Choisissez votre direction</h2>
    <button class="choix" @click="submit(),speak('Castelanne')">
      <a>Castellane</a>
    </button>
    <button class="choix" @click="submit(),speak('Luminy')">
      <a>Luminy</a>
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
    submit() {
      this.$router.push({
        path: '/list_arret'
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
        'Vous avez choisi la direction ' +
        item +
        ' Veuillez choisir votre arret'
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
