sp = getSpotifyApi(1);

exports.init = init;

function init() {

    updatePageWithTrackDetails();

    sp.trackPlayer.addEventListener("playerStateChanged", function (event) {
        
        console.log('Event', event);

        // Only update the page if the track changed
        if (event.data.curtrack == true) {
            updatePageWithTrackDetails();
        }
    });
}

function updatePageWithTrackDetails() {

    var content = document.getElementById("content");

    // This will be null if nothing is playing.
    var playerTrackInfo = sp.trackPlayer.getNowPlayingTrack();
    console.log('track', playerTrackInfo);

    if (playerTrackInfo == null) {
        content.innerText = "Nothing playing!";
    } else {
        var track = playerTrackInfo.track;
        content.innerText = track.name + " on the album " + track.album.name + " by " + track.album.artist.name + ".";
    }
}
