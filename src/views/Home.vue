<template>
  <transition name="fade" mode="out-in">
    <div :class="`home ${isMobile ? ' mobile' : ''}`">
      <transition name="fade" mode="out-in">
        <img :src="library[1].images[0]" alt="">
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setInterval, clearInterval } from 'timers';
import { randRange, PhotoLibrary, isMobile } from '@/scripts';

@Component({
  components: {},
})
export default class Home extends Vue {
  private library = PhotoLibrary;
  public isMobile = isMobile;
}
</script>

<style lang="scss" scoped>
.home {
  padding: 5% 30px 5% 280px;

  img {
    height: 80vh;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateX(10px);
  }

  &.mobile {
    padding: 5% 5px;

    img {
      width: 95%;
      height: auto;
    }
  }
}

.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}
</style>
