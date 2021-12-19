<template>
  <audio
      id="music1"
      :src="musicUrl"
      controls="controls"
      loop="loop"
      ref="audio"
      class="myaudio"
      autoplay="true"
    ></audio>
</template>

<script>
import { mapGetters,} from "vuex";
export default {
  data() {
    return {
      musicUrl:''
    }
  },
  computed:{
    ...mapGetters(["audioEle","playing"]),
  },
  watch:{
    audioEle:function (newvalue, oldvalue) {
      if (newvalue!== oldvalue)
      this.musicUrl = newvalue
    },
    playing:function(newvalue,oldvalue) {
      if (newvalue===false&&newvalue!== oldvalue){
        document.getElementById('music1').pause()
      }
      if(newvalue ===true &&newvalue!== oldvalue){
        document.getElementById('music1').play()
      }
    }
  }
}
</script>

<style>
.myaudio {
  width: 100%;
  height: 40px;
  outline: none;
  background-color: #f1f3f4;
}
</style>