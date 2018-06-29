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

::-webkit-scrollbar {
  width: 30px;
  height: 30px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c0c0c0; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 5px transparent; 
  background: rgb(112, 112, 112); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 65, 65); 
}
</style>
