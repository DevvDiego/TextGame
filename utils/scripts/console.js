import { HistoryHandler } from "./historyhandler.js";

export class Console{
    constructor(history){
        const system = document.getElementById("console_text");
        const input = document.getElementById("console_input");
        this.history_handler = new HistoryHandler(history);
       
        input.addEventListener("keypress", this.process_input);

    }

    /**
     * 
     * @param {KeyboardEvent} ev 
     */
    process_input(ev){
        if(ev.key == "Enter"){
            console.log("Nuevo texto entrante")
            let text_in = input.value.toLowerCase();
            

        }
    }

}