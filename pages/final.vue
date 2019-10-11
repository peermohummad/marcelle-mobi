<!-- pages/direction.vue => localhost:3000/direction -->

<template>
  <div class="body">
    <h1>SpeechMobile</h1>

    <h2 class="bienvenue">Votre bus arrivera dans</h2>
    <div class="passage">
      <p><h1>4mn</h1></p>
    </div>

    <h2 class="bienvenue">le bus suivant est prévu dans</h2>
    <div>
      <p><h1>14mn</h1></p>
    </div>

    <div>
        <button class="choix" @click="speak('le bus suivant est prévu dans 14 minutes')">Suivant</button>
    </div>
    <div>
        <button class="choix" @click="speak('stephan a une petite quequette'),speak2('stephan have a little dick')">Blague du jour</button>
    </div>

  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: '',
      isActive: false
    }
  },

  methods: {
    speak(item) {
      var msg = new SpeechSynthesisUtterance()
      var voices = window.speechSynthesis.getVoices()
      msg.voice = voices[6]
      msg.voiceURI = 'native'
      msg.volume = 1
      msg.rate = 0.9
      msg.pitch = 0.9
      msg.text =item
      speechSynthesis.speak(msg)
    },
    speak2(item) {
      var msg = new SpeechSynthesisUtterance()
      var voices = window.speechSynthesis.getVoices()
      msg.voice = voices[2]
      msg.voiceURI = 'native'
      msg.volume = 1
      msg.rate = 0.9
      msg.pitch = 0.9
      msg.text =item
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
