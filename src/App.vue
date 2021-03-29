<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="rv-contetn"/>
  </div>
</template>

<script>
import { getAppStatus, getAppNames } from 'single-spa'

export default {
  created () {
  },
  mounted () {
    const status = getAppStatus('@patpat-f2e/turing-navbar')
    console.log('truing sso', status, getAppNames())
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.rv-contetn {
  margin-left: var(--navbar-left-width);
  // background-color: hotpink;
}
</style>
