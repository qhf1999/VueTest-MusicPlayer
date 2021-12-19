<template>
  <div>
    <music-list :music_list="this.historyList"></music-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["historyList",]),
  },
  methods: {
    ...mapMutations({
      setPlaylist: "SET_PLAYLIST",
      setorderlist: "SET_ORDERLIST",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>