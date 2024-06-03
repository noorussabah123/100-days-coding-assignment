// day 14

// Question 40: Album: Create objects for music albums.


type Album = {

    artist: string,
    title: string,
    tracks?: number
}


function musicAlbum(artist: string, title: string, tracks?: number) {
    let album: Album = {artist, title}
    if (tracks) {
        album['tracks'] = tracks
    }

        

    return album
}

console.log(musicAlbum("Artist one", "The first album"));
console.log(musicAlbum("Artist two", "The second album"));
console.log(musicAlbum("Artist three", "The third album", 12));



// Question 41: Magicians: Display magician names from an array.


let magicians: string[] = ["David", "Alice", "Chris"]

function showMagicians(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician);
        
    })
}

showMagicians(magicians)


// Question 42: Great Magicians: Add "the Great" to magician names.


function makeGreat(magician: string[]) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + ' ' + "The Great"
        
    }
}

makeGreat(magicians)
showMagicians(magicians)
