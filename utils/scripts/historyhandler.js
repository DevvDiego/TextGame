export class HistoryHandler {
    constructor(history) {
        this.history = history;
        this.room = this.history["habitacion_1"]; // initial room
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

    what_room() {
        return this.room;
    }

    what_desc() {
        return this.room["descripcion"];
    }

    what_options() {
        return this.#parse_options();
    }

    #parse_options() {
        this.room.opciones;
        let opcionesString = "Opciones:\n";
    
        // Recorrer las opciones y agregarlas al string
        for (const key in opciones) {
            if (opciones.hasOwnProperty(key)) {
                const opcion = opciones[key];
                opcionesString += `${key}: ${opcion.texto}\n`;
            }
        }
    
        return opcionesString;
    }

}