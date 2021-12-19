<template>
  <!--歌单详情-->
  <div class="details">
    <music-list :music_list="list"></music-list>
  </div>
</template>

<script>
import { getPlaylistDetail } from "@/api/index.js";
import { mapMutations } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      list: [], // 列表
    };
  },
   methods: {
    ...mapMutations({
      setPlaylist: "SET_PLAYLIST",
    }),
    },
  created() {
    // 获取歌单详情
    getPlaylistDetail(this.$route.params.id)
      .then((playlist) => {
        this.list = playlist.tracks;
        this.setPlaylist(playlist.tracks);
      })
      .catch(() => {
      });
  },
};
</script>

<style lang="less" scoped>
// .details {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   .musicList {
//     width: 100%;
//     height: 100%;
//   }
// }
</style>
