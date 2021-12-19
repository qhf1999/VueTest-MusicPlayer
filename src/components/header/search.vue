<template>
  <div>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="音乐/歌手"
      @select="handleSelect"
      @keyup.enter.native="onEnter"
    ></el-autocomplete>
    <music-list :music_list="search_list"></music-list>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getSearchSuggest, getSearchHot, search } from "@/api/index.js";
import formatSongs from "@/Utils/Format_song.js";
import musicList from "../body/music-list.vue";
export default {
  components: { musicList },
  data() {
    return {
      state: "",
      search_list: [],
      timeout: null,
    };
  },
  methods: {
    ...mapMutations({
      setPlaylist: "SET_PLAYLIST",
    }),
    querySearchAsync(queryString, cb) {
      var result_songs = [];
      if (queryString) {
        getSearchSuggest(queryString).then(({ result }) => {
          result.albums.forEach((v) => {
            result_songs.push({ value: v.name, name: v.artist.name });
          });
        });
      } else {
        getSearchHot().then(({ result }) => {
          result.hots.forEach((v) => {
            result_songs.push({ value: v.first });
          });
        });
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(result_songs);
      }, 3000 * Math.random());
    },

    onEnter() {
      search(this.state).then(({ result }) => {
        this.search_list = formatSongs(result.songs);
         if(this.music_list){
           this.music_list.forEach((value) => {value.songlistindex=false});
         }
        this.setPlaylist(this.search_list);
      });
    },

    handleSelect(item) {
      // 这个是查看被选中的是哪一个
      console.log(item);
    },
  },
};
</script>