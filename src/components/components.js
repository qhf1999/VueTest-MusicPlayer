// 这是全局组件 js
import menu from './header/menu.vue'
import search from './header/search.vue'
import music_list from './body/music-list.vue'
import play_icon from './small_part/play_icon.vue'
import footer from './footer/footer.vue'
export default (Vue) => {
  Vue.component("music-menu", menu)  // 前者必须是字符串格式
  Vue.component("music-search", search)  // 前者必须是字符串格式
  Vue.component("music-list", music_list)  // 前者必须是字符串格式
  Vue.component("play-icon", play_icon)  // 前者必须是字符串格式
  Vue.component("player", footer)  // 前者必须是字符串格式
}