import { loading_screen } from "./utils/loadingscreen.js";
//TODO make the history, in deepseek there is a chat helping you


document.addEventListener("DOMContentLoaded", ()=>{

    const startbtn = document.getElementById("startbtn");
    
    startbtn.addEventListener("click", async ()=>{
        const music_players = await loading_screen();
        
        music_players.menu.play();

    })

})