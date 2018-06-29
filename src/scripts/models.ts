export enum ViewType {
  Single, Grid, Slide
}

export interface IAlbum {
  album: string;
  statement: Array<string>;
  images: Array<NodeRequire>;
}
