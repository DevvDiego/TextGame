export class Console{
    constructor(){
        const system = document.getElementById("console_text");
        const input = document.getElementById("console_input");

        input.addEventListener("keypress", (ev)=>{
            if(ev.key == "Enter"){
                console.log("Nuevo texto entrante")
                let text_in = input.value.toLowerCase();
                

                if(text_in == "hola"){
                    
                    system.innerText = "Hola, el juego apenas habla jaaaaaaaaaaaaa";
                    console.log("texto de consola reemplazado");
                }

            }
        });

    }



}