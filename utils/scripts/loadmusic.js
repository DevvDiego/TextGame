import {AudioPlayer} from "./audioplayer.js"

export async function load_music(){

    const menu_song = new AudioPlayer();    
    await menu_song.load("assets/sounds/cave_theme.ogg");

    const ambience_song = new AudioPlayer();    
    await ambience_song.load("assets/sounds/dungeon_ambient.ogg");

    const horror_song = new AudioPlayer();    
    await horror_song.load("assets/sounds/horror_ambient.ogg");

    const goodend_song = new AudioPlayer();    
    await goodend_song.load("assets/sounds/A_bitter_hope.mp3");

    const music_players = {
        "menu":menu_song,
        "ambience":ambience_song,
        "horror_1":horror_song,
        "good_end":goodend_song
    }

    return music_players

}