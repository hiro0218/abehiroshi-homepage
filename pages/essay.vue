<template>
  <div class="essay-container">
    <h2 class="page-title">「阿部寛 出版本」</h2>
    <table class="essay-list" border="1px">
      <tr>
        <td><a href="#">「なぜベストを尽くさないのか」</a></td>
      </tr>
      <tr>
        <td><a href="#">「どんと来い、超常現象　Ｖ・Ｉ・Ｐ用」</a></td>
      </tr>
      <tr>
        <td><a href="#">「どんと来い超常現象」</a></td>
      </tr>
      <tr>
        <td><a href="#">「アベちゃんの喜劇」</a></td>
      </tr>
      <tr>
        <td><a href="#">「アベちゃんの悲劇」</a></td>
      </tr>
    </table>
    <hr>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.essay-container {
  min-height: 100%;
  background: url("~assets/image/essay.jpg");
}
.essay-list {
  width: 600px;
  margin: 0 auto;
  margin-bottom: 33px;
}
.essay-list a {
  font-weight: bold;
}
</style>
