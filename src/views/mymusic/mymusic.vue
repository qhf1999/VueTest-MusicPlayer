<template>
  <music-list :music_list="this.orderList"></music-list>
</template>

<script>
import { mapGetters, } from "vuex";

export default {
  data() {
    return {
    }
  },
computed: {
    
    ...mapGetters(["orderList"]),
  },
methods: {
},

}

</script>

<style>
</style>