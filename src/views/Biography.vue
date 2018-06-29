<template>
  <transition name="fade" mode="out-in">
    <div class="home">
      <p>
        A documentary photographer based in Hanoi, Xuan-Phong Le is currently pursuing
        a BFA in Art Photography at the Hanoi Academy of Theatre and Cinema. 
      </p>
      <p>
        An enthusiast for the socio-cultural, Xuan-Phong has contributed to NGOs & organizations working
        in arts & culture by coordinating many programs introducing art to under-represented
        communities in Vietnam. Xuan-Phong’s present personal projects concern the memories
        and sentiments of those close to him.
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Biography extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  white-space: normal;
  padding: 5% 30px 5% 280px;
}
.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}
</style>
