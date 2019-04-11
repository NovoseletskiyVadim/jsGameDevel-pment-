
// Describes event handler click button "make a move "
 
import {arrayData} from '../model/DataGame.js';
import SearchMoveField from '../model/SearchMoveField.js';
import CheckBusyField from '../model/CheckBusyField.js';
import PlayingFieldAnalysis from '../model/PlayingFieldAnalysis.js';
import SaveMoveChanges from '../model/SaveMoveChanges.js';
import BoardLocalStorage from '../model/BoardLocalStorage.js'
import CheckPrisoners from '../model/CheckPrisoners.js';
import VerificationConqueredTerritory from '../model/VerificationConqueredTerritory.js';
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
        this.verificationTerritory=new VerificationConqueredTerritory();
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
                        
                        // check all dead enemy of stones(white)++++++++++++
                        for(let i=0; i<that.data.rows;i++){
                                                        
                            for(let j=0 ; j<that.data.cols; j++){
                                
                                if(arr[i][j].stateTerritory=='white'){
                                    
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

                        // save all dead stones
                        for(let i=0 ;i<=arrDeadStonesWhite.length;i++){
                           
                            if(arrDeadStonesWhite[i]!=undefined){

                                arrDeadStonesWhite[i].stateTerritory=0;                                
                                that.saveMoveChanges.saveChangeObject(arrDeadStonesWhite[i]);
                            }

                        };

                        //  territory recalculation
                        let arrObjects=that.boardLocalStorage.outPutBoard();
                        that.verificationTerritory.verificationConqueredTerritory(arrObjects);

                        // zeroing count 
                        score.territoryBlack=0;
                        score.territoryWhite=0;

                        // counting territory
                        for(let i=0; i<that.data.rows;i++){

                            let arr_row=arrObjects[i];

                            
                            for(let j=0;j<that.data.cols;j++){

                                
                                let territory=arr_row[j].stateTerritory;


                                if( territory==1||
                                    territory=='black'
                                ){
                                    score.territoryBlack+=1;
                                }
                                else if (
                                    territory==2||
                                    territory=='white'
                                ){
                                    score.territoryWhite+=1;
                                };

                            };
                        };

                        
                        // save current score
                        that.scoreLocalStorage.saveScore(score);

                        // writes our turn after checking
                        that.saveMoveChanges.saveChangeObject(resultAnalitics);

                        // zeroing
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

                        // check all dead enemy of stones(black)++++++++++++
                        for(let i=0; i<that.data.rows;i++){
                                                        
                            for(let j=0 ; j<that.data.cols; j++){
                                
                                if(arr[i][j].stateTerritory=='black'){
                                    
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

                        // re-drawing board
                        that.drawingBoard.reDrawingBoard(that.data.canvas.getContext('2d'));

                        // save all dead stones
                        for(let i=0 ;i<=arrDeadStonesBlack.length;i++){
                           
                            if(arrDeadStonesBlack[i]!=undefined){

                                arrDeadStonesBlack[i].stateTerritory=0;
                                
                                that.saveMoveChanges.saveChangeObject(arrDeadStonesBlack[i]);
                            };

                        };
                        
                       //territory recalculation
                       let arrObjects=that.boardLocalStorage.outPutBoard();
                       that.verificationTerritory.verificationConqueredTerritory(arrObjects);
                       
                       // zeroing count 
                       score.territoryBlack=0;
                       score.territoryWhite=0;

                        //conting terretory    
                        for(let i=0; i<that.data.rows;i++){

                            let arr_row=arrObjects[i];

                            
                            for(let j=0;j<that.data.cols;j++){

                                
                                let territory=arr_row[j].stateTerritory;


                                if( territory==1||
                                    territory=='black'
                                ){
                                    score.territoryBlack+=1;
                                }
                                else if (
                                    territory==2||
                                    territory=='white'
                                ){
                                    score.territoryWhite+=1;
                                };

                            };
                        };



                        // save current score
                        that.scoreLocalStorage.saveScore(score);

                        // writes our turn after checking 
                        that.saveMoveChanges.saveChangeObject(resultAnalitics);

                        // zeroing
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

