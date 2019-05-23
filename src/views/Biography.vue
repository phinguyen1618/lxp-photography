<template>
  <transition name="fade" mode="out-in">
    <div :class="`home ${isMobile ? ' mobile' : ''}`">
      <div>
        <p>
          Xuan-Phong Le is a documentary photographer based in Hanoi, Vietnam.
          His idea of photography is developed around observations toward human behavior in everyday life.
          Xuan-Phong’s current personal projects involve creating narratives from the sentiments of himself
          and those close to him.
        </p>
        <p><strong>Email</strong>: lephongsinbox@gmail.com</p>
        <p><strong>Phone</strong>: +84 96 887 5260 (Vietnam)</p>
        <p><strong>Instagram</strong>: @phongsmonologues</p>
      </div>
      <img src="../assets/bio.jpg" alt="">
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {isMobile} from '@/scripts';

@Component({
  components: {},
})
export default class Biography extends Vue {
  public isMobile = isMobile;
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.home {
  white-space: normal;
  padding: 5% 30px 5% 280px;
  display: grid;
  grid-template-columns: 65% 30%;
  grid-column-gap: 40px;

  &.mobile {
    padding: 50px 30px;
    grid-template-columns: 1fr;
  }
}
.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}
</style>
