import { AudioPlayer } from "./utils/audioplayer.js";
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