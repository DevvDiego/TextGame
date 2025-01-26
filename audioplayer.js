export class AudioPlayer {
    constructor() {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.audioBuffer = null;
      this.source = null;
    }
  
    // Método para cargar el audio
    async loadAudio(url) {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        console.log('Audio cargado correctamente.');
      } catch (error) {
        console.error('Error al cargar el audio:', error);
      }
    }
  
    // Método para reproducir el audio en loop
    playAudio() {
      if (!this.audioBuffer) {
        console.error('No se ha cargado ningún audio.');
        return;
      }
  
      if (this.source) {
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
  
    // Método para detener el audio
    stopAudio() {
      if (this.source) {
        this.source.stop();
        this.source.disconnect();
        this.source = null;
        // console.log('Audio detenido.');
      } else {
        console.warn('No hay audio en reproducción.');
      }
    }
  }