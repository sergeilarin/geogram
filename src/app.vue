<template>
  <div id="app">
    <user-msg/>
    <app-header />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>

import appHeader from './cmps/app-header'
import appFooter from './cmps/app-footer'
import userMsg from './cmps/user-msg'

export default {
  components: {
    appHeader,
    appFooter,
    userMsg
  }
}
</script>

