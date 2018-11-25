function nowPlaying(input) {
    let songName = input[0];
    let artistName = input[1];
    let songDuration = input[2];
    console.log(`Now Playing: ${artistName} - ${songName} [${songDuration}]`);
}