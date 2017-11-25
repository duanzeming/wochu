<template>
  <div id="app">
    <router-view></router-view>
    <Tabbur></Tabbur>
  </div>
</template>

<script>
import Whole from '../static/css/whole.css'

import Tabbur from './components/Tabbur'

export default {
  name:'app',
  components:{
    Tabbur
  }
}
</script>

<style>

</style>
