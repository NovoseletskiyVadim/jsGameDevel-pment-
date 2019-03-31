
// describes the verification of the correctness of the player's turn

import BoardLocalStorage from './BoardLocalStorage.js';
import {arrayData} from './DataGame.js';

export default class SearchMoveField{

    constructor(){
        
        this.boardLocalStorage= new BoardLocalStorage();
        this.data=arrayData;

    };

    searchMoveField( letter, number ){

        let arr=this.boardLocalStorage.outPutBoard();

        for(let i=0;i<this.data.rows;i++){

            let arr_row=arr[i];

            for(let j=0;j<this.data.cols;j++){

                let searchObj=arr_row[j];
                        
                if( searchObj.letter==letter && searchObj.number==number ){
                   
                    return searchObj;
                };

            };
        };
        
    };

};