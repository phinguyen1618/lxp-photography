<template>
  <transition name="fade" mode="out-in">
    <div :class="`album ${isMobile ? ' mobile' : ''}`" :key="index">
      <div :class="`statement ${isMobile ? ' mobile' : ''}`" v-if="library[index].statement[0] !== ''">
        <h2>{{library[index].album}}</h2>
        <p v-for="(paragraph, i) in library[index].statement" :key="i">
          {{paragraph}}
        </p>
      </div>
      <img v-for="(image, i) of library[index].images" alt=""
           :key="i" :src="image" :class="`image ${isMobile ? ' mobile' : ''}`">
    </div>
  </transition>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {isMobile, PhotoLibrary} from '@/scripts';

@Component
export default class AlbumView extends Vue {
  @Prop() private index!: number;
  public library = PhotoLibrary;
  public isMobile = isMobile;
}
</script>

<style lang="css" scoped>

.album {
  box-sizing: border-box;   
  height: 100%;
  padding: 100px 50px 0 250px;
}

.album.mobile {
  height: auto;
  padding: 60px 5% 5%;
  display: flex;
  flex-direction: column;
}

.statement {
  white-space: normal;
  display: inline-block;
  height: 100%;
  width: 250px;
  margin: 0 40px 0 20px;
}

.statement.mobile {
  width: auto;
  margin: 30px 0;
}

.statement p {
  font-size: 16px;
}

.statement h2 {
  line-height: 0;
  margin-bottom: 30px;
}

.image {
  display: inline-block;
  margin: 0 20px;
  height: 72vh;
  transition: all .2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  
}

.image.mobile {
  width: 100%;
  height: auto;
  margin: 10px 0;
}

.image:hover {
  cursor: pointer;
  transform: scale(1.02, 1.02);
  z-index: 20 !important;
}

.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}

</style>
