import { HistoryHandler } from "./historyhandler.js";

export class Console{
    constructor(history){
        this.system = document.getElementById("console_text");
        this.input = document.getElementById("console_input");
        this.history_handler = HistoryHandler.create(history);
       
        this.input.addEventListener("keypress", (ev)=>{
            if(ev.key == "Enter"){
                console.log("Nuevo texto entrante")
                console.log(this.input)
                let text_in = this.input.value.toLowerCase();
                if(text_in == "habitacion"){
                    this.system.innerText = "\n\n" + this.system.innerText + this.history_handler.what_room();
                }
    
                if(text_in == "opciones"){
                    this.system.innerText = "\n\n"+this.system.innerText + this.history_handler.what_options();
                }
            }

            
        });

    }
}