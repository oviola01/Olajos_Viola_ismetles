
class ListaMegjelenit{
    constructor(LISTA, szuloElem){
        this.LIST = LISTA;
        this.szuloElem = szuloElem;
        let txt = this.makeContent(NEXTYEARPLAN); 
        this.szuloElem.html(txt);
    }
    
    makeContent(){
        let txt="<ul>";
        for(let i=0; i<this.LIST.length; i++){
            txt += `<li>${this.LIST[i]}</li>;            `
        }
        txt += "</ul>"; 
    };
};

export default ListaMegjelenit;
 