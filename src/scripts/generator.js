const fs = require('fs');

function isFolder(file) {
  if (!file) { throw 'Not a file'; }
  return fs.statSync(file).isDirectory();
}

async function getFilesFromFolder(dir) {
  if (!dir) { throw 'Invalid parameter'; }
  const files = await new Promise(resolve => {
    fs.readdir(dir, (err, files) => {
      resolve(files);
    });
  });
  if (!files) { throw 'Invalid folder or folder is empty.' }
  return files;
}

async function writeMetaFile(albums, outputDir) {
  let output = '';
  output += `import { IAlbum } from './models';\n`;
  output += `export const PhotoLibrary: Array<IAlbum> = [\n`;
  for (const album of albums) {
    output += '  {\n';
    output += `    album: \`${album.album}\`,\n`;
    output += `    statement: \`${album.statement}\`,\n`;
    output += `    images: [\n`;
    for (const image of album.images) {
      output += `      require(\`${image}\`),\n`
    }
    output += `    ]\n`;
    output += '  },\n';
  }
  output += '];\n';
  await new Promise((resolve, reject) => {
    fs.writeFile(`${outputDir}library.ts`, output, err => {
      if (err) { reject(err); }
    });
  })
}

async function main() {
  const root = './src/assets/albums/';
  const outputDir = './src/scripts/';
  const albums = [];
  for (const file of await getFilesFromFolder(root)) {
    if (isFolder(root + file)) {
      albums.push(file);
    }
  }
  const metas = [];
  for (const album of albums) {
    const files = await getFilesFromFolder(root + album);
    const images = [];
    let statement = '';
    for (const file of files) {
      if (['.jpg', '.png'].includes(file.substr(file.length - 4))) {
        images.push(`@/assets/albums/${album}/${file}`);
      } else if (file === 'statement.txt') {
        statement = await new Promise((resolve, reject) => {
          fs.readFile(root + album + '/' + file, 'utf8', (err, data) => {
            if (err) { reject(err); }
            resolve(data);
          });
        });
      }
    }
    metas.push({
      album: album,
      images: images,
      statement: statement
    });
  }
  await writeMetaFile(metas, outputDir);
}

main().catch(err => console.log(err));