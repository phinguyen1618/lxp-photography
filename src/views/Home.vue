<template>
  <transition name="fade" mode="out-in">
    <div class="home">
      <transition name="fade" mode="out-in">
        <!-- <img :src="library[album].images[image]" :key="album*image+album+image"> -->
        <img :src="library[1].images[0]" alt="">
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setInterval, clearInterval } from 'timers';
import { randRange, PhotoLibrary } from '@/scripts';

@Component({
  components: {},
})
export default class Home extends Vue {
  // private timer!: any;
  // private floatRatio: number = 0;
  // private floatTimer!: any;
  // private album: number = 0;
  // private image: number = 0;
  private library = PhotoLibrary;
  // private created() {
  //   this.floatHandler();
  //   this.timer = setInterval(this.floatHandler, 7000);
  // }
  // private floatHandler() {
  //   this.album = randRange(0, this.library.length);
  //   this.image = randRange(0, this.library[this.album].images.length);
  //   clearInterval(this.floatTimer);
  //   this.floatRatio = 0;
  //   this.floatTimer = setInterval(() => {
  //     this.floatRatio += 0.2;
  //   }, 50);
  // }
  // private onDestroy() {
  //   this.timer.clearInterval();
  // }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 5% 30px 5% 280px;
}

img {
  height: 80vh;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transform: translateX(10px);
}


.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}
</style>
