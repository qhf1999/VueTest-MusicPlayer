
const state = {
  audioEle: null, // audio元素
  playing: false, // 播放状态
  playlist: [], // 播放列表
  orderList: [], // 顺序列表
  currentIndex: -1, // 当前音乐索引
  // historyList: getHistoryList() || [], // 播放历史列表
  historyList: [], // 播放历史列表
}

export default state