
/* 
    Describes a record of score in local storage

*/

export default class ScoreLocalStorage{

    // the constructor takes an obj 
    constructor(objectScore){

        this.objectScore=objectScore;
        this.myKey='score';
    };


    // The method that saves changes to local storage

    saveScore(objectScore){

        if(this.objectScore!==undefined){

            const serialObj=JSON.stringify(this.objectScore);
            window.localStorage.setItem(this.myKey,serialObj);
        
        }
        else{
            const serialObj=JSON.stringify(objectScore);
            window.localStorage.setItem(this.myKey,serialObj); 
        }

    };

    // The method that pulls data from local storage  save in the variable and return 

    outPutScore(){

        const returnObjFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));

        return returnObjFromLocalStorage;
    };



};
