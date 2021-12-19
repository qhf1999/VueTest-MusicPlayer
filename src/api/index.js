import axios from "@/api/request.js";
import { formatTopSongs } from '@/Utils/Format_song.js'
axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL
export function getSearchSuggest(keywords) {
  return axios.get('/search/suggest', {
    params: {
      keywords
    }
  })
}
// 排行榜列表
export function getToplistDetail() {
  return axios.get('/toplist/detail')
}

// 推荐歌单
export function getPersonalized() {
  return axios.get('/personalized')
}

// 得到网易云音乐热搜简略
export function getSearchHot() {
  return axios.get('/search/hot')
}

// 歌单详情
export function getPlaylistDetail(id) {
  return new Promise((resolve, reject) => {
    axios
      .get('/playlist/detail', {
        params: { id }
      })
      .then(({ playlist }) => playlist || {})
      .then(playlist => {
        const { trackIds, tracks } = playlist
        if (!Array.isArray(trackIds)) {
          reject(new Error('获取歌单详情失败'))
          return
        }
        // 过滤完整歌单 如排行榜
        if (tracks.length === trackIds.length) {
          playlist.tracks = formatTopSongs(playlist.tracks)
          resolve(playlist)
          return
        }
        // 限制歌单详情最大 500
        const ids = trackIds
          .slice(0, 500)
          .map(v => v.id)
          .toString()
        getMusicDetail(ids).then(({ songs }) => {
          playlist.tracks = formatTopSongs(songs)
          resolve(playlist)
        })
      })
  })
}

// 根据用户输入 搜索 所有的信息
export function search(keywords, page = 0, limit = 30) {
  return axios.get('/search', {
    params: {
      offset: page * limit,
      limit: limit,
      keywords
    }
  })
}