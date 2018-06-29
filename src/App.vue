<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue';

@Component({
  components: {
    Menu
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand|Montserrat|Lato|Roboto+Condensed');

body {
  padding: 0;
  margin: 0;
  white-space: nowrap;
  //background-image: url('./assets/marble.jpg');
}

#app {
  display: grid;
  font-family: 'Montserrat', serif;
  position: relative;
  overflow-y: hidden;
  height: 100vh;
}
</style>
