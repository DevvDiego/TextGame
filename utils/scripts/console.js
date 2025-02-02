import { HistoryHandler } from "./historyhandler.js";

export class Console{
    constructor(history){
        this.system = document.getElementById("console_text");
        this.input = document.getElementById("console_input");
        this.history_handler = history; //expecting an already fetched history json

        //factory verifiyng var
        this.isFactoryCreated = false;

        this.begin();
    }

    /**
     * Factory method. Use this to create an instance
     * 
     * @param {String} history 
     */
    static async create(history){
        this.isFactoryCreated = true;
        this.history_handler = await HistoryHandler.create(history);
        return new Console(history);
    }

    //here starts all the execution, after being factory created
    begin(){
        if(!this.isFactoryCreated){
            console.error("Console class instance must be made by create method");
        }

        this.setConsoleText(this.history_handler.what_desc());

        this.input.addEventListener("keypress", (ev)=>{
            if(ev.key == "Enter"){
                console.log("Nuevo texto entrante")


                switch(this.getConsoleInput()){

                    case "habitacion":
                        this.setConsoleText(
                            this.history_handler.what_room()
                        );
                    break;

                    case "opcion":
                        this.setConsoleText(
                            this.history_handler.what_options()
                        );
                    break;

                }
            }

            
        });
    }

    setConsoleText(text){
        this.system.innerText = "\n" + this.getConsoleText();
    }

    getConsoleText(){
        return this.system.innerText;
    }

    /**
     * 
     * @returns {String} console input trimmed, stringyfied and lower cased
     */
    getConsoleInput(){
        let value = this.input.value;
        value = value
            .toString()
            .trim()
            .toLowerCase();
        
        return value = this.#removeDiacritics(value);
    }

    #removeDiacritics(texto) {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

}