/* 
    Describes a record of the location of the stones on
     the board

*/

export default class BoardLocalStorage{

    // the constructor takes an array of objects

    constructor(arrayOfObjects){

        this.arrayOfObjects=arrayOfObjects;
        this.myKey='goban';
    };

    // The method that saves changes to local storage

    saveBoard(arrayOfObjects){

        if(this.arrayOfObjects!==undefined){

            const serialArray=JSON.stringify(this.arrayOfObjects);
            window.localStorage.setItem(this.myKey,serialArray);

        }
        else{

            const serialArray=JSON.stringify(arrayOfObjects);
            window.localStorage.setItem(this.myKey,serialArray);
        }


    };

    // The method that pulls data from local storage and save in the new array
    outPutBoard(){

        const renderArray=[];

        const returnArrayFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));

        for (let i=0; i<=returnArrayFromLocalStorage.length-1;i++){
            renderArray[i]=returnArrayFromLocalStorage[i];
        };

        return renderArray;

    };

};