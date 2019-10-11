import WindowContext from '../libs/WindowContext';

export default class BrowserUtils extends WindowContext {
  // 重新加载界面
  static reload () {
    window.location.reload();
  }

  static backLogin () {
    window.localStorage.clear();
    top.location.href = '../login.html';
  }

  // 设置浏览器标题
  static setTitle (title) {
    window.document.title = title;
  }

  // 跳转至某个页面
  static to (url) {
    window.location.href = url;
  }

  // 打开某个页面
  static open (url) {
    window.open(url);
  }
}
