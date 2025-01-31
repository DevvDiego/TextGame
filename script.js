import { loading_screen } from "./utils/loadingscreen.js";

document.addEventListener("DOMContentLoaded", ()=>{

    const startbtn = document.getElementById("startbtn");
    
    startbtn.addEventListener("click", async ()=>{
        const music_players = await loading_screen();
        
        music_players.menu.play();

    })

})