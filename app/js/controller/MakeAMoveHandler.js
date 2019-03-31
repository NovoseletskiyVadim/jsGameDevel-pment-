
// Describes event handler click button "make a move "
 
/*TODO: 

    работа над обработчивом  кнопки ход


*/

import SearchMoveField from '../model/SearchMoveField.js';
import CheckBusyField from '../model/CheckBusyField.js';
import SaveMoveChanges from '../model/SaveMoveChanges.js';
import BoardLocalStorage from '../model/BoardLocalStorage.js'

export default class MakeAMoveHandler{


    constructor( scoreLocalStorage, viewCurrentDataScore ){

        this.scoreLocalStorage = scoreLocalStorage;
        this.viewCurrentDataScore = viewCurrentDataScore;
        this.searchMoveField = new SearchMoveField();
        this.checkBusyField = new CheckBusyField()
        this.saveMoveChanges = new SaveMoveChanges();
        this.boardLocalStorage = new BoardLocalStorage();
        this.move = document.getElementById('makeAmove');
    }

    makeAmove(){
        
        let that=this;

        this.move.onclick=function(){

            let score = that.scoreLocalStorage.outPutScore();
            let view = that.viewCurrentDataScore.getInputMoveValue();
            let reView = that.viewCurrentDataScore;

            let letter = view.letterMove;
            let number = view.numberMove;


            let searchObject=that.searchMoveField.searchMoveField(letter,number);

            let checkBusy=that.checkBusyField.checkBusyField(searchObject);

            if(checkBusy!=null){



                if(score.turnTurn==='black'){
                    score.turnTurn='white';
                    score.lastBlackMove=letter+number;
                    that.scoreLocalStorage.saveScore(score);

                    checkBusy.stateTerritory='black';
                    that.saveMoveChanges.saveChangeObject(checkBusy);

                    let currentBoard=that.boardLocalStorage.outPutBoard();
                    reView.viewBoard(currentBoard);

                    let currentScore=that.scoreLocalStorage.outPutScore();
                    reView.viewScore(currentScore);
    
                }
                else{
    
                    score.turnTurn='black';
                    score.lastWhiteMove=letter+number;
                    that.scoreLocalStorage.saveScore(score);

                    checkBusy.stateTerritory='white';
                    that.saveMoveChanges.saveChangeObject(checkBusy);

                    let currentBoard=that.boardLocalStorage.outPutBoard();
                    reView.viewBoard(currentBoard);

                    checkBusy.stateTerritory='white';
                    that.saveMoveChanges.saveChangeObject(checkBusy);


    
                    let currentScore=that.scoreLocalStorage.outPutScore();
                    reView.viewScore(currentScore);
    
                    // document.getElementById('turnTurn').className='circleTurnTurn black';
                };

            }




            // TODO: проверка занятости ячейки фишкой 


            

            console.log('click make a move');
        
        }

    }

}

