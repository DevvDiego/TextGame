export class HistoryHandler {
    constructor(history) {
        this.history = history;

        this.currentRoom = this.history.habitacion_1; // initial room
        this.name = this.currentRoom.nombre_habitacion;
        this.desc = this.currentRoom.descripcion;
        this.options = this.currentRoom.opciones;
    }

    // Factory method to handle asynchronously
    static async create(url) {
        const history = await HistoryHandler.load_history(url);
        return new HistoryHandler(history); // Return a new instance with the loaded history
    }

    static async load_history(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON.");
            }
            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    getRoomName() {
        return this.name;
    }

    getRoomDesc() {
        return this.desc;
    }

    getRoomOptions() {        
        let opcionesString = "Opciones:\n";

        this.options.forEach((opcion, index)=>{
            opcionesString += `${index + 1}: ${opcion.texto}\n` 
        });

        return opcionesString;
    }

    changeRoom(newRoom){
        if (typeof newRoom !== 'string' || newRoom.trim() === '') {
            console.error('La nueva habitación debe ser una cadena no vacía.');
            return false;
        }

        if( !(newRoom in this.history) ){
            return false;
        }


        this.currentRoom = this.history[newRoom];
        this.name = this.currentRoom.nombre_habitacion;
        this.desc = this.currentRoom.descripcion;
        this.options = this.currentRoom.opciones;
        
        return true;
    }

    /**
     * 
     * 
     * @param {String} inputOption
     * @returns {Number} index of the found element or -1 to not found 
     */
    isAnOption(inputOption){
        //only checks an index
        let optionIndex = inputOption;
        return optionIndex >= 0 && optionIndex < this.options.length;

        //checks the string input 
        // this.options.forEach((option,index)=>{
        //     if(inputOption == this.clean(option.texto)){
        //         console.log("opcion correcta encontrada");
        //         return true;
        //     }
        // });

        // return false;
    }

    /**
     * 
     * @param {String} text 
     */
    clean(text){
        return text
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

}