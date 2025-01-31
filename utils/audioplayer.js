export class AudioPlayer {
    constructor(){
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.audioBuffer = null;
        this.source = null;
        this.isLoaded = false;
    }
  
    async load(url) {
        try{
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            this.isLoaded = true;
            console.log('Audio cargado correctamente.');
        
        }catch(error) {
            console.error('Error al cargar el audio:', error);
            this.isLoaded = false;
      
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
      this.source.loop = true;
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