// creating function
function makeAlbum(artist:string, title:string, tracks?:number) {

const album: {artist:string, title:string, tracks?:number} = {

    artist : artist,
    title : title

}
 if (tracks !== undefined){
    album.tracks == tracks
 }


return album;

}

const ablum1 = makeAlbum('Artist 1', 'Album Title 1');
console.log(ablum1);

const ablum2 = makeAlbum('Artist 2', 'Album Title 2');
console.log(ablum2);

const ablum3 = makeAlbum('Artist 3', 'Album Title 3',12);
console.log(ablum3);