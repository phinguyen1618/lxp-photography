<template>
  <transition name="fade" mode="out-in">
    <div class="album" :key="index">
      <div class="statement" v-if="library[index].statement[0] !== ''">
        <h2>{{library[index].album}}</h2>
        <p v-for="(paragraph, i) in library[index].statement" :key="i">
          {{paragraph}}
        </p>
      </div>
      <img v-for="(image, i) of library[index].images" 
           :key="i" :src="image" class="image">
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { PhotoLibrary } from '@/scripts';

@Component
export default class AlbumView extends Vue {
  @Prop() private index!: number;
  public library = PhotoLibrary;
}
</script>

<style lang="scss" scoped>

.album {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;   
  height: 100%;
  padding: 100px 50px 0 250px;
}

.statement {
  white-space: normal;
  display: inline-block;
  height: 100%;
  width: 250px;
  h2 {
    line-height: 0;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
  }
  margin: 0 40px 0 20px;
}

.image {
  display: inline-block;
  margin: 0 20px 0 20px;
  height: 72vh;
  transition: all .2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.image:hover {
  cursor: pointer;
  transform: scale(1.02, 1.02);
}

.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}

</style>
