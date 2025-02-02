import { Console } from "./console.js"
import {load_music} from "./loadmusic.js"


/**
 * 
 * @param {HTMLElement} game 
 * @param {HTMLElement} startbtn 
 * @param {HTMLElement} loading 
 * @param {HTMLElement} spinner 
 */
export async function loading_screen() {
    // when entering this func there has been already one interaction

    const game = document.getElementById("game")
    const startbtn = document.getElementById("startbtn")
    const loading_screen = document.getElementById("loading_screen")
    const spinner = document.getElementById("spinner_container")

    startbtn.classList.add("hidden");
    spinner.classList.remove("hidden");

    // ? maybe add loading function? to load everything and have a single await
    // const music_players = await load_music();
    const console = Console.create("assets/games/dungeon.json");


    spinner.classList.add("hidden")
    loading_screen.classList.add("fadeout")
    game.classList.add("fadein")


    return music_players;
}