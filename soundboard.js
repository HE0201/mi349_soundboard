const sounds = ['Start', 'Skid', 'Crash'];

for (let i = 0; i < sounds.length; ++i){
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sounds[i];

    btn.addEventListener('click', () => {
        document.getElementById(sounds[i]).play();
    });

    document.getElementById('buttons').appendChild(btn);
}

function stopSongs(){
    for (let i = 0; i < sounds.length; ++i){
        const song = document.getElementById(sounds[i]);
        song.pause();
        song.currentTime = 0;
    }
}