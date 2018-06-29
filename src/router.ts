import Vue, { VueConstructor } from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Biography from './views/Biography.vue';
import AlbumView from './components/AlbumView.vue';
import { PhotoLibrary } from '@/scripts';

Vue.use(Router);

interface IRouter {
  routes: Array<{
    path: string;
    name: string;
    component: VueConstructor<Vue>;
    props?: object;
  }>;
}

const router: IRouter = {
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/bio', name: 'bio', component: Biography },
  ],
};

for (const album of PhotoLibrary) {
  router.routes.push({
    path: `/${album.album.toLowerCase().replace(' ', '')}`,
    name: album.album.toLowerCase().replace(' ', ''),
    component: AlbumView,
    props: {
      index: PhotoLibrary.indexOf(album)
    }
  });
}

export default new Router(router);
