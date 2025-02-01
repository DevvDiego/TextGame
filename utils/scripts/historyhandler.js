export class HistoryHandler{
    constructor(url){
        this.history = this.load_history(url)
        .then(()=>{
            console.log("Historia cargada correctamente.");
        })
        .catch((error)=>{
            console.error("Error al cargar la historia: " + error);
        })



        

    }



    async load_history(url){
        try {
            const response = await fetch(url); // Ruta al archivo JSON
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON.");
    
            }
            
            return await response.json(); 
        
        }catch(error){
            throw error;
    
        }
    
    }

}