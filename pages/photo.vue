<template>
  <div class="photo-container">
    <h2 class="page-title">写真集</h2>
    <hr>
    <table class="photo-list" border="1">
      <tr>
        <th>映画</th>
        <td><a href="#">「鉄人28号」</a></td>
      </tr>
      <tr>
        <th>映画</th>
        <td><a href="#">「トリック劇場版」</a></td>
      </tr>
      <tr>
        <th>舞台</th>
        <td><a href="#">熱海殺人事件 「阿部ちゃん写真館」</a></td>
      </tr>
      <tr>
        <th>TV</th>
        <td><a href="#">「神様のいたずら」</a></td>
      </tr>
      <tr>
        <th>映画</th>
        <td><a href="#">「タオの月」</a></td>
      </tr>
      <tr>
        <th>映画</th>
        <td><a href="#">「３０－ｔｈｉｒｔｙ－」</a></td>
      </tr>
      <tr>
        <th>TV</th>
        <td><a href="#">「天晴れ夜十郎」</a></td>
      </tr>
      <tr>
        <th>雑誌</th>
        <td><a href="#">メンズノンノ阿部寛</a></td>
      </tr>
    </table>
    <hr>
  </div>
</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style lang="scss" scoped>
.photo-container {
  min-height: 100%;
  background: url("~assets/image/abehiroshi.jpg");

  .page-title {
    padding-bottom: 45px;
  }
}

.photo-list {
  width: 700px;
  margin: 0 auto;
  margin-top: 49px;
  margin-bottom: 33px;
  font-weight: bold;
  text-align: left;
}
</style>
