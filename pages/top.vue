<template>
  <div class="top-container">
    <h1 class="page-title">阿部 寛のホームページ</h1>
    <div class="main-contents">
      <div class="left-content">
        <img class="content-profile-image" src="~assets/image/abe-top2-4.jpg" width="256" height="304" border="0">

        <div class="content-profile">
          <ul>
            <li>阿部 寛（あべ ひろし）</li>
            <li>生年月日 1964年6月22日</li>
            <li>血液型 A型</li>
            <li><nuxt-link to="/prof">プロフィール</nuxt-link></li>
          </ul>
        </div>

        <div class="content-attention">
          If you have any enquiries regarding my TV drama or film, or would like to make an enquiry concerning future projects, please do not hesitate to contact me through the following email address.<br>
          <br>
          mail:<a href="#">shigeta@navy.plala.or.jp</a>
        </div>

        <div>
          所属<b>:</b><br>
          茂田オフィス<br>
          107-0052<br>
          東京都港区赤坂9-5-29<br>
          赤坂ロイヤルマンション303<br>
          TEL : 03-5410-8585<br>
          FAX : 03-5410-0588
        </div>

      </div>
      <div class="right-content">
        <div class="latest-info">
          <span>★★★　最新情報　★★★</span>
        </div>
        <div class="info-movie">
          <hr>
          <div class="movie-award">
          ・<a href="http://www.excite.co.jp/News/cinema/20161016/Mdpr_cinema1624686.html" target="_blank">「京都国際映画祭2016」で「三船敏郎賞」受賞</a><br>
          ・第38回日本アカデミー賞「<a href="http://www.misaki-cafe.jp/" target="_blank">ふしぎな岬の物語</a>」優秀主演男優賞　受賞<br>
          ・第38回日本アカデミー賞 「柘榴坂の仇討」優秀助演男優賞　受賞
          </div>
          <hr>
          <div class="movie-list">
            ・映画
            <div class="movie-opus">
              <div class="nomitori">
                「<a href="http://nomitori.jp/" target="_blank">のみとり侍</a>」<span class="mark-new">New!</span><br>
                2018年公開
              </div>
              <div class="inorinomaku">
                「<a href="http://inorinomaku-movie.jp/" target="_blank">祈りの幕が下りる時</a>」<br>
                2018年1月27日公開
              </div>
              <div class="ku-kai">
                「<a href="http://ku-kai-movie.jp/" target="_blank">空海―KU-KAI―</a>」<br>
                2018年2月24日公開
              </div>
              <div class="kitanosakuramori">
                「<a href="http://www.toei.co.jp/movie/details/1209162_951.html" target="_blank">北の桜守</a>」<br>
                2018年3月10日公開
              </div>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style lang="scss" scoped>
.top-container {
  min-height: 100%;
  background: url("~assets/image/abehiroshi.jpg");

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .page-title {
    font-size: 2em;
    padding: 46px 0 25px;
  }
}

.main-contents {
  display: flex;
  justify-content: space-between;
  width: 794px;
  margin: 0 auto;
}

.left-content {
  width: 258px;
}

.right-content {
  width: 520px;
}

.content-profile-image {
  margin-left: 3px;
  margin-bottom: 20px;
}

.content-profile {
  margin-left: 26px;
  margin-bottom: 56px;
  li {
    padding: 2px 0;
  }
}

.content-attention {
  width: 224px;
  padding-left: 6px;
  margin-bottom: 26px;
}

.latest-info {
  height: 233px;
  padding-right: 7px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-movie {
  padding-top: 21px;
  font-weight: bold;
}

.movie-award {
  margin-top: 50px;
  margin-bottom: 33px;
}

.mark-new {
  color: #f00;
}

.movie-opus {
  padding-top: 80px;
  padding-left: 75px;

  .nomitori {
    margin-bottom: 30px;
  }
  .inorinomaku {
    margin-bottom: 60px;
  }
  .ku-kai {
    margin-bottom: 36px;
  }
  .kitanosakuramori {
    margin-bottom: 10px;
  }
}
</style>
