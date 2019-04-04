
/* Describes the entry reading the 
names of the characters from the base */ 


export default class NameLocalStorage{

    constructor(namesObject){

        this.namesObject=namesObject;
        this.myKey='playerName';

    };

    saveName(namesObject){

        if(this.namesObject!=undefined){
            
            const serialNamesPlayer=JSON.stringify(this.namesObject);
            window.localStorage.setItem(this.myKey, serialNamesPlayer);

        }
        else{

            const serialNamesPlayer=JSON.stringify(namesObject);
            window.localStorage.setItem(this.myKey, serialNamesPlayer);
        }



        console.log('change saved');
    };

    outPutName(){

        const returnObjNameFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));
        return returnObjNameFromLocalStorage;

        console.log('outPutName');
    };


}