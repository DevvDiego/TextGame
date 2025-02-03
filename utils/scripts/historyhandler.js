export class HistoryHandler {
    constructor(history) {
        // this.history = history;
        this.history = {
            "habitacion_1": {
                "nombre_habitacion": "Habitación Oscura",
                "descripcion": "Estás en una habitación oscura. Hay una puerta al norte y una ventana al este.",
                "opciones": [
                    {
                        "texto": "Abrir la puerta",
                        "siguiente_habitacion": "habitacion_2"
                    },
                    {
                        "texto": "Mirar por la ventana",
                        "siguiente_habitacion": "habitacion_3"
                    },
                    {
                        "texto": "Quedarse quieto",
                        "siguiente_habitacion": "habitacion_1"
                    }
                ]
            },
        };

        this.currentRoom = this.history.habitacion_1; // initial room
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

    roomName() {
        return this.currentRoom.nombre_habitacion;
    }

    roomDesc() {
        return this.currentRoom.descripcion;
    }

    roomOptions() {        
        let opcionesString = "Opciones:\n";

        this.currentRoom.opciones.forEach((opcion, index) => {
            opcionesString += `${index + 1}: ${opcion.texto}\n` 
        });

        return opcionesString;
    }

}