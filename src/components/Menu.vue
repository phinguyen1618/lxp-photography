<template>
  <div class="menu">
    <h3 class="logo">
      <router-link class="link" to="/">
        <span>Le Xuan Phong</span>
      </router-link>
    </h3>
    <p @click="showAlbums = !showAlbums">
      <span class="header">PROJECTS</span>
    </p>
    <div v-if="showAlbums">
      <p v-for="(album, i) of library" :key="i" class="header album">
        <router-link class="link" :to="`/${album.album.toLowerCase().replace(' ', '')}`">
          <span>{{album.album}}</span>
        </router-link>
      </p>
    </div>
    <p>
      <router-link to="bio" class="link">
        <span class="header">BIOGRAPHY</span>
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PhotoLibrary } from '@/scripts';

@Component
export default class Menu extends Vue {
  public library = PhotoLibrary;
  public showAlbums = true;
}
</script>

<style lang="scss" scoped>
.menu {
  text-align: right;
  padding: 100px 0 0 100px;
  height: calc(100% - 75px);
  width: 220px;
  background-color: white;
  position: fixed;
  left: 0;
  z-index: 30;
  padding: 60px 20px 0 0;
  opacity: .5;
  transition: all .2s ease-in-out;
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
</style>
