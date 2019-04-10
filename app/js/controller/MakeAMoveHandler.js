
// Describes event handler click button "make a move "
 
/*TODO: 

    работа над обработчивом  кнопки ход


*/
import {arrayData} from '../model/DataGame.js';
import SearchMoveField from '../model/SearchMoveField.js';
import CheckBusyField from '../model/CheckBusyField.js';
import PlayingFieldAnalysis from '../model/PlayingFieldAnalysis.js';
import SaveMoveChanges from '../model/SaveMoveChanges.js';
import BoardLocalStorage from '../model/BoardLocalStorage.js'
import CheckPrisoners from '../model/CheckPrisoners.js';
import DrawingBoard from '../view/DrawBoard.js';

export default class MakeAMoveHandler{


    constructor( scoreLocalStorage, viewCurrentDataScore ){

        this.scoreLocalStorage = scoreLocalStorage;
        this.viewCurrentDataScore = viewCurrentDataScore;
        this.searchMoveField = new SearchMoveField();
        this.checkBusyField = new CheckBusyField()
        this.saveMoveChanges = new SaveMoveChanges();
        this.boardLocalStorage = new BoardLocalStorage();
        this.playingFieldAnalysis=new PlayingFieldAnalysis();
        this.checkPrisoners=new CheckPrisoners();
        this.drawingBoard=new DrawingBoard();
        this.data=arrayData;
        
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

                    //check syiside +++++++++++++++++++++++++++++++++++

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
                        
                        let checkCurrentBoard=that.boardLocalStorage.outPutBoard();
                        let arr=checkCurrentBoard;

                        var arrDeadStonesWhite=[]

                        let result=null;
                        
                        for(let i=0; i<that.data.rows;i++){
                                                        
                            for(let j=0 ; j<that.data.cols; j++){
                                
                                if(arr[i][j].stateTerritory=='white'){
                                    
                                    // TODO: метод checkPrisoners

                                    result=that.checkPrisoners.analysisPrisoners(arr[i][j],checkCurrentBoard); 
                                    

                                    if(result.cheskBreath==false){

                                        score.captivityWhite+=1;
                                        arrDeadStonesWhite.push(result);
                                    };
                                }
                                else{
                                    continue;
                                };
                            };

                        };

                        // re-drawing board
                        that.drawingBoard.reDrawingBoard(that.data.canvas.getContext('2d'));

                        for(let i=0 ;i<=arrDeadStonesWhite.length;i++){
                           
                            if(arrDeadStonesWhite[i]!=undefined){
                                // console.error('element i='+i);
                                // console.dir(arrDeadStones[i]);
                                arrDeadStonesWhite[i].stateTerritory=0;
                                
                                that.saveMoveChanges.saveChangeObject(arrDeadStonesWhite[i]);
                            }

                        };

                        

                        that.scoreLocalStorage.saveScore(score);

                        that.saveMoveChanges.saveChangeObject(resultAnalitics);

                        arrDeadStonesWhite.length=0;
                    }


                    //view ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                    let currentBoard=that.boardLocalStorage.outPutBoard();
                    reView.viewBoard(currentBoard);

                    let currentScore=that.scoreLocalStorage.outPutScore();
                    reView.viewScore(currentScore);
    
                }
                else{
    
                    

                    checkBusy.stateTerritory='white';
                    that.saveMoveChanges.saveChangeObject(checkBusy);

                     //check syiside +++++++++++++++++++++++++++++++++++

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
                        
                        let checkCurrentBoard=that.boardLocalStorage.outPutBoard();
                        let arr=checkCurrentBoard;

                        var arrDeadStonesBlack=[]

                        let result=null;

                        for(let i=0; i<that.data.rows;i++){
                                                        
                            for(let j=0 ; j<that.data.cols; j++){
                                
                                if(arr[i][j].stateTerritory=='black'){
                                    
                                    // TODO: метод checkPrisoners

                                    result=that.checkPrisoners.analysisPrisoners(arr[i][j],checkCurrentBoard); 

                                    if(result.cheskBreath==false){

                                        score.captivityBlack+=1;
                                        arrDeadStonesBlack.push(result);

                                    };
                                }
                                else{
                                    continue;
                                };
                            };

                        };


                        that.drawingBoard.reDrawingBoard(that.data.canvas.getContext('2d'));

                        for(let i=0 ;i<=arrDeadStonesBlack.length;i++){
                           
                            if(arrDeadStonesBlack[i]!=undefined){

                                arrDeadStonesBlack[i].stateTerritory=0;
                                
                                that.saveMoveChanges.saveChangeObject(arrDeadStonesBlack[i]);
                            };

                        };
                        
                       



                        that.scoreLocalStorage.saveScore(score);
                        that.saveMoveChanges.saveChangeObject(resultAnalitics);
                        arrDeadStonesBlack.length=0;
                    }


                    // view ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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

