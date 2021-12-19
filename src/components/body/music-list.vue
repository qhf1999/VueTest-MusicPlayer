<template>
  <el-table :data="music_list" style="width: 100%" height="">
    <el-table-column fixed prop="id" label="歌曲ID" width="150">
    </el-table-column>
    <el-table-column prop="name" label="歌曲名" width="120"> </el-table-column>
    <el-table-column prop="singer" label="歌手" width="120"> </el-table-column>
    <el-table-column prop="album" label="专辑" width="120"> </el-table-column>
    <!-- <el-table-column prop="image" label="图像" width="300"> </el-table-column> -->
    <!-- <el-table-column prop="url" label="播放" width="120"> -->
    <el-table-column>
      <template slot-scope="scope">
        <!-- <el-button type="text" @click="checkDetail(scope.row)">播放</el-button> -->
        <play-icon
          class="hover"
          :type="getPlayIconType(scope.row)"
          :size="40"
          @click="select_against(scope.row, scope.$index)"
        ></play-icon>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.songlistindex"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus($event, scope.$index)"
        >
        </el-switch>
      </template>
    </el-table-column>
    <!-- </el-table-column> -->
  </el-table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    music_list: [],
  },
  computed: {
    ...mapGetters(["playing", "currentMusic", "orderList","historyList"]),
  },
  methods: {
    ...mapMutations({
      setPlaying: "SET_PLAYING",
      setCurrentindex: "SET_CURRENTINDEX",
      setPlaylist: "SET_PLAYLIST",
      setaudioele: "SET_AUDIOELE",
      setorderlist: "SET_ORDERLIST",
      sethistorylist: "SET_HISTORYLIST",
    }),

    //改变按钮状态
    changeStatus: function ($event, index) {
      let temp = Array.from(this.orderList);
      if ($event === true) {
        temp.unshift(this.music_list[index]);
        this.setorderlist(temp);
      } else {
        temp.forEach((value) => {
          value.songlistindex = false;
        });
        temp.splice(temp.indexOf(this.music_list[index]), 1);
        temp.forEach((value) => {
          value.songlistindex = true;
        });
        this.setorderlist(temp);
      }
    },
    // 通过改变type的值，改变音乐播放图标
    getPlayIconType(item) {
      const {
        playing,
        currentMusic: { id },
      } = this;
      return playing && id === item.id ? "pause-mini" : "play-mini";
    },
    //当改变播放状态时，将此页面的list添加到vuex中的musiclist。
    select_against(item, index) {
      if (this.currentMusic.id && item.id === this.currentMusic.id) {
        this.setPlaying(!this.playing);
      }
      if (item.id !== this.currentMusic.id) {
        this.setaudioele(item.url);
        this.setCurrentindex(index);
        this.setPlaying(true);
        let temp1 = Array.from(this.historyList);
        temp1.unshift(this.music_list[index])
        this.sethistorylist(temp1)
      }
    },
  },
};
</script>
 