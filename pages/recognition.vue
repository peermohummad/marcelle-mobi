<!-- pages/toto.vue => localhost:3000/toto -->

<template>
  <div>
    <div class='search_container'>
			<!-- Search box-->
			<input type='text' id='speechText' > &nbsp; <input type='button' id='start' value='Start' onclick='startRecording();'>
		</div>

		<!-- Search Result -->
		<div class="container"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSpeech from 'vue-speech'

Vue.use(VueSpeech)

export default {
  name: 'voice',
  data() {
    return {
      msg: 'Speak'
    }
  },
  methods: {
    speak(item) {
      var recognition = new webkitSpeechRecognition();

		  recognition.onresult = function(event) {
			console.log('result');
		  	var saidText = "";
		  	for (var i = event.resultIndex; i < event.results.length; i++) {
		        if (event.results[i].isFinal) {
		            saidText = event.results[i][0].transcript;
		        } else {
		            saidText += event.results[i][0].transcript;
		        }
		    }

		    document.getElementById('speechText').value = saidText;

		   	// Search Posts
		   	searchPosts(saidText);
		}

		function startRecording(){
			recognition.start();
		}

		// Search Posts
		function searchPosts(saidText){

			$.ajax({
				url: 'getData.php',
				type: 'post',
				data: {speechText: saidText},
				success: function(response){
					$('.container').empty();
					$('.container').append(response);
				}
			});
    }
    }
  }
}
</script>

<style lang="css">
</style>
