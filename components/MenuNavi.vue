<template>
  <div class="menu-container">
    <ul>
      <li class="top"><nuxt-link to="/">トップ</nuxt-link></li>
      <li class="movie"><nuxt-link to="/movie">映画出演</nuxt-link></li>
      <li class="tv"><nuxt-link to="/tv">ドラマ出演</nuxt-link></li>
      <li class="stage"><nuxt-link to="/stage">舞台出演</nuxt-link></li>
      <li class="photo"><nuxt-link to="/photo">写真集</nuxt-link></li>
      <li class="essay"><nuxt-link to="/essay">出版本</nuxt-link></li>
      <li class="kanri"><nuxt-link to="/kanri">管理者</nuxt-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
.menu-container {
  margin-top: 57px;

  ul {
    list-style-type: none;
    margin: 0 0 0 23px;
    padding: 0;
  }

  li {
    white-space: nowrap;
    & + li {
      margin-top: 33px;
    }

    &::before {
      content: "●";
      margin-right: 4px;
    }

    &.top::before {
      color: #FFCCCC;
    }

    &.movie::before {
      color: #00FF00;
    }

    &.tv::before {
      color: #33FFFF;
    }

    &.stage::before {
      color: #0099FF;
    }

    &.photo::before {
      color: #0000FF;
    }

    &.essay::before {
      color: #333399;
    }

    &.kanri::before {
      color: #CC00CC;
    }
  }
}
</style>
