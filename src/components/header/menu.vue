<template>
  <div class="line">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="true"
    >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/recommend">推荐</el-menu-item>
      <el-menu-item index="/mymusic" @click="handleMymusic"
        >我的歌单</el-menu-item
      >
      <el-menu-item index="/history">我听过的</el-menu-item>
    </el-menu>
  </div>
</template>



<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  computed: {
    ...mapGetters(["orderList"]),
  },

  methods: {
    ...mapMutations({
      setPlaylist: "SET_PLAYLIST",
    }),
    handleMymusic() {
      this.setPlaylist(this.orderList)
    },
  },
};
</script>