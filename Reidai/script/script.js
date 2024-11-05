// JavaScript用ファイル
new Vue({
    el: '#app',
    data: {
      password: '',
      confirmPassword: ''
    },
    computed: {
      // パスワードが一致しているかを確認する算出プロパティ
      passwordMismatch() {
        return this.password && this.confirmPassword && this.password !== this.confirmPassword;
      },
      // 登録ボタンを有効にするかどうか
      canRegister() {
        return this.password && this.confirmPassword && !this.passwordMismatch;
      }
    }
  });