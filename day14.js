// day 14
function musicAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(musicAlbum("Artist one", "The first album"));
console.log(musicAlbum("Artist two", "The second album"));
console.log(musicAlbum("Artist three", "The third album", 12));
// Question 41: Magicians: Display magician names from an array.
var magicians = ["David", "Alice", "Chris"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagicians(magicians);
// Question 42: Great Magicians: Add "the Great" to magician names.
function makeGreat(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + ' ' + "The Great";
    }
}
makeGreat(magicians);
showMagicians(magicians);
