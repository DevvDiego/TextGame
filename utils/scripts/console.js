import { HistoryHandler } from "./historyhandler.js";

export class Console{
    constructor(history){
        this.system = document.getElementById("console_text");
        this.input = document.getElementById("console_input");

        this.history_handler = history; //expecting an HistoryHandler instance
        
        this.isFactoryCreated = Console.factoryEnabled;
        
        this.begin();
    }

    //factory verifiyng var
    static factoryEnabled = false;

    /**
     * Factory method. Use this to create an instance
     * 
     * @param {String} history 
     */
    static async create(history){
        this.history_handler = await HistoryHandler.create(history);
        
        Console.factoryEnabled = true;
        const consoleInstance = new Console(this.history_handler);
        Console.factoryEnabled = false;
        
        return consoleInstance;
    }

    //here starts all the execution, after being factory created
    begin(){
        if(this.isFactoryCreated == false){
            console.error("Console class instance must be made by create method");
        }

        this.setConsoleText(this.history_handler.what_desc());

        this.input.addEventListener("keypress", (ev)=>{
            if(ev.key == "Enter"){
                console.log("Nuevo texto entrante")


                switch(this.getConsoleInput()){
                    //using fall through for switch-case
                    case "habitaciones":
                    case "cuartos":
                    case "habitacion":
                        this.setConsoleText(
                            this.history_handler.what_room()
                        );
                    break;
                    
                    case "opcion":
                    case "opciones":
                        this.setConsoleText(
                            this.history_handler.what_options()
                        );
                    break;

                }
            }

            
        });
    }

    // ? Scroll top to bottom or bottom to top?
    setConsoleText(text){
        //? bottom to top?
        this.system.innerText = text + "\n\n" + this.getConsoleText();
        
        //TODO Top to bottom
        // this.system.innerText = "\n" + this.getConsoleText();
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