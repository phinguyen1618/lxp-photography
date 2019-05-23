<template>
  <div :class="`app ${isMobile ? ' mobile' : 'not-mobile'}`">
    <Menu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue';
import {isMobile} from '@/scripts';

@Component({
  components: {
    Menu
  },
})
export default class Home extends Vue {
  public isMobile = isMobile;
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand|Montserrat|Lato|Roboto+Condensed');

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  white-space: nowrap;

  @media (min-width: 750px) {
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
  }
}

.app {
  display: grid;
  font-family: 'Montserrat', serif;
  position: relative;
  height: 100vh;
  overflow-y: hidden;

  &.mobile {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
  }

  &.not-mobile {

  }
}
</style>
