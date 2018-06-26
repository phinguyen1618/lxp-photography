export enum ViewType {
  Single, Grid, Slide
}

export interface IAlbum {
  album: string;
  statement: string;
  images: Array<NodeRequire>;
}
