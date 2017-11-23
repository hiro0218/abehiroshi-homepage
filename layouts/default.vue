<template>
  <div class="container">
    <nav class="navigation">
      <MenuNavi/>
    </nav>
    <main class="contents">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import MenuNavi from '~/components/MenuNavi.vue'

export default {
  components: {
    MenuNavi
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.navigation {
  height: 100%;
  width: 18%;
  background: #f0f0ff;
}

.contents {
  height: 100%;
  width: 82%;
  overflow: auto;
}

.page-title {
  margin: 0;
  padding: 45px 0 20px;
  font-size: 1.5em;
  text-align: center;
}

.sub-title {
  font-size: 1.5em;
  text-align: center;
}
</style>
