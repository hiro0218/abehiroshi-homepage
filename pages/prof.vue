<template>
  <div class="prof-container">
    <h2 class="page-title">阿部 寛のプロフィール</h2>
    <table class="profile-list">
      <tr>
        <th>本名</th>
        <td>阿部 寛（あべ ひろし）</td>
      </tr>
      <tr>
        <th>生年月日</th>
        <td>1964年6月22日 蟹座 辰年</td>
      </tr>
      <tr>
        <th>血液型</th>
        <td>Ａ型</td>
      </tr>
      <tr>
        <th>出身地</th>
        <td>神奈川県横浜市</td>
      </tr>
      <tr>
        <th>学歴</th>
        <td>中央大学理工学部 電気工学科卒業</td>
      </tr>
      <tr>
        <th>サイズ</th>
        <td>身長189ｃｍ 体重 75Ｋｇ 靴 27ｃｍ</td>
      </tr>
      <tr>
        <th>趣味</th>
        <td>テニス、古武道</td>
      </tr>
      <tr class="adjust-deview">
        <th>デビュー</th>
        <td>
          1983年 大学在学中にモデルデビュー<br>
          雑誌<a href="#">「メンズノンノ」</a>創刊以来、3年6ヶ月表紙を飾る。<br>
          大学卒業と同時に、「はいからさんが通る」で映画デビュー<br>
          つかこうへい作・演出 舞台「熱海殺人事件～モンテカルロ・イリュージョン～」の主人公を演じ話題となる
        </td>
      </tr>
      <tr class="adjust-award">
        <th>受賞歴</th>
        <td>
          ・「京都国際映画祭2016」で「三船敏郎賞」受賞<br>
          ・第38回日本アカデミー賞「ふしぎな岬の物語」優秀主演男優賞　受賞<br>
          ・第38回日本アカデミー賞 「柘榴坂の仇討」優秀助演男優賞　受賞<br> ・2012年　日本アカデミー賞　「テルマエ・ロマエ」で最優秀主演男優賞受賞<br>
          ・2012年　ブルーリボン賞　「カラスの親指」「麒麟の翼」「テルマエ・ロマエ」で主演男優賞受賞<br>
          ・2012年　ヨコハマ映画祭　　「テルマエ・ロマエ」で主演男優賞受賞<br>
          ・2012年　日本シアタースタッフ映画祭ＩＮ成城　　「テルマエ・ロマエ」で主演男優賞受賞<br>
          ・2008年公開映画「歩いても歩いても」、「青い鳥」<br>
          ・第63回毎日映画コンクール男優主演賞 受賞<br>
          ・1994年度インディペンデント映画祭プロフェッショナル大賞受賞「凶銃ルガーPO8」
        </td>
      </tr>
      <tr class="adjust-office">
        <th>事務所</th>
        <td>
          （有）茂田オフィス<br>
          107-0052<br>
          東京都港区赤坂9-5-29 赤坂ロイヤルマンション303<br>
          TEL : 03-5410-8585
        </td>
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
.prof-container {
  min-height: 100%;
  background: url("~assets/image/profile.jpg");
  padding-bottom: 25px;

  .page-title {
    // margin-top: 28px;
    padding-bottom: 45px;
  }
}

.profile-list {
  width: 752px;
  margin: 0 auto;
  margin-bottom: 33px;
  text-align: left;
}
.profile-list th,
.profile-list td {
  vertical-align: top;
  height: 50px;
}
.profile-list th {
  width: 120px;
  font-weight: normal;
}
.profile-list .adjust-deview th {
  height: 150px;
}
.profile-list .adjust-award th {
  height: 375px;
}
.profile-list .adjust-office th {
  height: 100px;
}
.profile-list .adjust-deview th,
.profile-list .adjust-award th,
.profile-list .adjust-office th {
  vertical-align: middle;
}
</style>
