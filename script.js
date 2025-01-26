class AudioPlayer {
    constructor(){
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.audioBuffer = null;
        this.source = null;
        this.isLoaded = false; // Track if the audio is loaded
    }
  
    async load(url) {
        try{
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            this.isLoaded = true; // Mark audio as loaded
            console.log('Audio cargado correctamente.');
        
        }catch(error) {
            console.error('Error al cargar el audio:', error);
            this.isLoaded = false; // Mark audio as not loaded
      
        }
    }
  
    play() {
        if(!this.isLoaded) {
            console.error('No se ha cargado ningún audio.');
            return;

        }
  
        if(this.source) {
            console.warn('El audio ya está en reproducción.');
            return;

        }

      this.source = this.audioContext.createBufferSource();
      this.source.buffer = this.audioBuffer;
      this.source.loop = true; // Activar el loop
      this.source.connect(this.audioContext.destination);
      this.source.start();
      console.log('Audio en reproducción (loop).');

  }

    stop() {
        if (this.source) {
            this.source.stop();
            this.source.disconnect();
            this.source = null;
            console.log('Audio detenido.');
        
        } else {
            console.warn('No hay audio en reproducción.');
    
        }
    }
}


//? Make several instances of the player?
//TODO make the history, in deepseek there is a chat helping you

document.addEventListener("DOMContentLoaded", async ()=>{

    const menu_song = new AudioPlayer();    
    await menu_song.load("assets/sounds/cave_theme.ogg");

    const ambience_song = new AudioPlayer();    
    await ambience_song.load("assets/sounds/dungeon_ambient.ogg");
    
    const horror_song = new AudioPlayer();    
    await horror_song.load("assets/sounds/horror_ambient.ogg");
    
    const goodend_song = new AudioPlayer();    
    await goodend_song.load("assets/sounds/A_Bitter_Hope_Half.wav");
    
    const songs = {
        "menu":menu_song,
        "ambience":ambience_song,
        "horror_1":horror_song,
        "good_end":goodend_song
    }

    songs.menu.play();
})