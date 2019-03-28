import Territory from './Territory.js';

export default class CreateTerretoryBoard{

    // the constructor takes data from dataObject 

    constructor(dataObject){

        this.width=dataObject.width;
        this.height=dataObject.height;
        this.rows=dataObject.rows;
        this.cols=dataObject.cols;
        this.fieldLetters=dataObject.fieldLetters;
        this.fieldNumbers=dataObject.fieldNumbers;
    
    };

    // The method that create  array of objects
    
    createArrayObjects(){
        
        let arr = new Array();
        
        for(let i = 0; i <this.rows; i++){
            
            arr[i] = new Array();
            
            for(let j = 0; j <this.cols; j++){

                let number=this.fieldNumbers[i];
                let letter=this.fieldLetters[j];
                let coord_x=(i+2)*this.width/20;
                let coord_y=(j+2)*this.height/20;
                let stateTerritory=0;

                let objTerritory=new Territory(letter,number,coord_x,coord_y,stateTerritory);

                arr[i][j] = objTerritory;           
            };
        };
        return arr;

    };

};