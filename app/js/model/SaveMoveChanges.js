import BoardLocalStorage from './BoardLocalStorage.js';
import {arrayData} from './DataGame.js';



export default class SaveMoveChange{

    constructor(){

        this.boardLocalStorage= new BoardLocalStorage();
        this.data=arrayData;

    };


    saveChangeObject(changeObj){


        let arr=this.boardLocalStorage.outPutBoard();

        for(let i=0;i<this.data.rows;i++){

            let arr_row=arr[i];

            for(let j=0;j<this.data.cols;j++){
                        
                if( changeObj.arr_i==i && changeObj.arr_j==j ){
                    
                    arr_row[j]=changeObj;
                    break;
                };

            };
        };

        this.boardLocalStorage.saveBoard(arr);


    }

}