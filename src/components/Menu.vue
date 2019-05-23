<template>
  <div class="wrapper">
    <button v-if="isMobile" class="toggle-button" @click="toggle">
      <img class="hamburger-button" src="../assets/hamburger.svg" alt="">
    </button>
    <transition name="slide-fade">
      <div v-if="show" :class="`menu ${isMobile ? 'mobile' : 'not-mobile'}`">
        <h3 class="logo">
          <router-link class="link" to="/">
            <span @click="toggle" class="namesake">Xuan-Phong Le</span>
          </router-link>
        </h3>
        <p @click="showAlbums = !showAlbums">
          <span class="header">PROJECTS</span>
        </p>
        <div v-if="showAlbums">
          <p v-for="(album, i) of library" :key="i" class="header album">
            <router-link class="link" :to="`/${album.album.toLowerCase().replace(/ /g, '')}`">
              <span @click="toggle">{{album.album}}</span>
            </router-link>
          </p>
        </div>
        <p>
          <router-link to="bio" class="link">
            <span @click="toggle" class="header">BIOGRAPHY</span>
          </router-link>
        </p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {isMobile, PhotoLibrary} from '@/scripts';

@Component
export default class Menu extends Vue {
  public library = PhotoLibrary;
  public showAlbums = true;
  public isMobile = isMobile;
  public show = true;

  toggle() {
    if (this.isMobile) {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  z-index: 30;
}

.hamburger-button {
  height: 40px;
  width: auto;
  border: 3px solid #fff;
  border-radius: 50%;
  background: white;
}

.toggle-button {
  position: fixed;
  z-index: 50;
  margin: 10px;
}

.menu {
  text-align: right;
  height: calc(100% - 50px);
  width: 200px;
  background-color: white;
  position: fixed;
  left: 0;
  z-index: 30;
  padding: 60px 20px 0 0;
  transition: all .2s ease-in-out;

  &.mobile {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    height: 100%;
    background-color: rgba(255, 255, 255, 0.95);
  }

  &.not-mobile {
    opacity: .5;

    &:hover {
      opacity: 1;
    }
  }
}

.namesake {
  font-family: Archivo Black,Arial,sans-serif;
  font-weight: 800;
}

.logo {
  margin-bottom: 50px;
}

.menu:hover {
  opacity: 1;
}

.header {
  transition: all .1s ease-in-out;
}

.header.album {
  font-size: 13px;
}

.link {
  color: black;
  text-decoration: none;
  font-style: italic;
  transition: all .1s ease-in-out;
}

.header:hover, .link:hover {
  color: red;
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all .15s ease;
}
.slide-fade-leave-active {
  transition: all .15s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
