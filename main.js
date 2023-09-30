import { NEXTYEARPLAN } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";

$(function(){
    const WHERE = $(".tartalom"); 
    new ListaMegjelenit(NEXTYEARPLAN, WHERE); //itt példányosítom az osztályt
});

