import { IAlbum } from './models';
export const PhotoLibrary: Array<IAlbum> = [
  {
    album: `Translucent Wave`,
    statement: `I was only very little when my older brother ran away from home. It took years for my family to convince him to return, but towards everyone he became very distant. To me, he was virtually a stranger. In this personal project, I tried to establish a connection between me and my detached brother - based on clues I found around the house and interviews with my parents or people who knew him. Retracing the journey my brother went through after he left our family, I've come to realize that we have a lot more in common than I think.`,
    images: [
      require(`@/assets/albums/Translucent Wave/01.jpg`),
      require(`@/assets/albums/Translucent Wave/02.jpg`),
      require(`@/assets/albums/Translucent Wave/03.jpg`),
      require(`@/assets/albums/Translucent Wave/04.jpg`),
      require(`@/assets/albums/Translucent Wave/05.jpg`),
      require(`@/assets/albums/Translucent Wave/06.jpg`),
      require(`@/assets/albums/Translucent Wave/07.jpg`),
      require(`@/assets/albums/Translucent Wave/08.jpg`),
    ]
  },
];
