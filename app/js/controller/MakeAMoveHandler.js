
// Describes event handler click button "make a move "
 
/*TODO: 

    работа над обработчивом  кнопки ход


*/

import SearchMoveField from '../model/SearchMoveField.js';
import CheckBusyField from '../model/CheckBusyField.js';
import PlayingFieldAnalysis from '../model/PlayingFieldAnalysis.js';
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
        this.playingFieldAnalysis=new PlayingFieldAnalysis();
        
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
                    

                    checkBusy.stateTerritory='black';
                    that.saveMoveChanges.saveChangeObject(checkBusy);

                    // TODO: ПРОВЕРКА ДЫХАНИЯ И СУИЦИДА

                    let checkCurrentBoard=that.boardLocalStorage.outPutBoard();
                    let checkCurrentObj=checkBusy;

                    let resultAnalitics=that.playingFieldAnalysis.analysisSyiside(checkCurrentObj,checkCurrentBoard)

                    if(resultAnalitics.stateTerritory==0){

                        that.saveMoveChanges.saveChangeObject(resultAnalitics);
                        alert('Ви не можете зробити  згубний хід');
                        return null;
                    }
                    else{

                        score.turnTurn='white';
                        score.lastBlackMove=letter+number;
                        that.scoreLocalStorage.saveScore(score);

                        that.saveMoveChanges.saveChangeObject(resultAnalitics);
                    }


                    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




                    let currentBoard=that.boardLocalStorage.outPutBoard();
                    reView.viewBoard(currentBoard);

                    let currentScore=that.scoreLocalStorage.outPutScore();
                    reView.viewScore(currentScore);
    
                }
                else{
    
                    

                    checkBusy.stateTerritory='white';
                    that.saveMoveChanges.saveChangeObject(checkBusy);

                    // TODO: ПРОВЕРКА ДЫХАНИЯ И СУИЦИДА

                    let checkCurrentBoard=that.boardLocalStorage.outPutBoard();
                    let checkCurrentObj=checkBusy;

                    // let fieldAnalitics=this.playingFieldAnalysis

                    let resultAnalitics=that.playingFieldAnalysis.analysisSyiside(checkCurrentObj,checkCurrentBoard)

                    if(resultAnalitics.stateTerritory==0){

                        that.saveMoveChanges.saveChangeObject(resultAnalitics);
                        alert('Ви не можете зробити  згубний хід');
                        return null;
                    }
                    else{
                        
                        score.turnTurn='black';
                        score.lastWhiteMove=letter+number;
                        that.scoreLocalStorage.saveScore(score);
                        that.saveMoveChanges.saveChangeObject(resultAnalitics);
                    }


                    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


                    let currentBoard=that.boardLocalStorage.outPutBoard();
                    reView.viewBoard(currentBoard);

                    checkBusy.stateTerritory='white';
                    that.saveMoveChanges.saveChangeObject(checkBusy);


    
                    let currentScore=that.scoreLocalStorage.outPutScore();
                    reView.viewScore(currentScore);
    
                };

            };            
            console.log('click make a move');
        };
    };
};

