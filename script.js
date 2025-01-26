import { AudioPlayer } from "./utils/audioplayer.js";
import { loading_screen } from "./utils/loadingscreen.js";
//TODO make the history, in deepseek there is a chat helping you


document.addEventListener("DOMContentLoaded", ()=>{

    const loading_elements = [
        { "game":document.getElementById("game") },
        { "loading":document.getElementById("loading_screen") },
        { "spinner_container":document.getElementById("spinner_container") },
    ];

    const startbtn = document.getElementById("startbtn");
    startbtn.addEventListener("click", async ()=>{
        loading_screen(loading_elements);
        


        // const menu_song = new AudioPlayer();    
        // await menu_song.load("assets/sounds/cave_theme.ogg");
    
        // const ambience_song = new AudioPlayer();    
        // await ambience_song.load("assets/sounds/dungeon_ambient.ogg");
    
        // const horror_song = new AudioPlayer();    
        // await horror_song.load("assets/sounds/horror_ambient.ogg");
    
        // const goodend_song = new AudioPlayer();    
        // await goodend_song.load("assets/sounds/A_Bitter_Hope_Half.wav");
    
        // const songs = {
        //     "menu":menu_song,
        //     "ambience":ambience_song,
        //     "horror_1":horror_song,
        //     "good_end":goodend_song
        // }

    })

})