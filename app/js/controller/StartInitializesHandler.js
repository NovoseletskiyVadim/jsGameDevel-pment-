// Describes event handler click button "Start"
import DrawingBoard from '../view/DrawBoard.js';
import NameLocalStorage from '../model/NameLocalStorage.js';

export default class StartInitializesHandler{

    constructor(
        scoreObject,
        scoreLocalStorageObject,
        createTerretoryBoardObject,
        boardLocalStorageObject,
        dataObject,
        viewCurrentDataScoreObject,
        context

    ){

        this.score=scoreObject;
        this.scoreLocalStorage=scoreLocalStorageObject;
        this.createTerretoryBoard=createTerretoryBoardObject;
        this.boardLocalStorage=boardLocalStorageObject;
        this.objectData=dataObject;
        this.view=viewCurrentDataScoreObject;
        this.context=context;

        this.drawingBoard=new DrawingBoard();
        this.nameLocalStorage= new NameLocalStorage();
        
        this.start=document.getElementById('start');

    }

    
    initializationPlay(){

        let that=this;

        this.start.onclick=function(){

            let checkResult=that.scoreLocalStorage.outPutScore();
        
            if(checkResult===null){
                
                let currentName =that.nameLocalStorage.outPutName();
        
                if(currentName==null || currentName.player1=='' && currentName.player2==''){
                    alert('Перед початком гри, введіть імена гравців ');
                }
                else if(currentName.player1=='' || currentName.player2==''){
        
                    let result =(currentName.player1=='')?
                        'заповніть ім\'я 1-го гравця \\fill in the name of the first player' 
                     :  'заповніть ім\'я 2-го гравця \\fill in the name of the second player'
                    alert(result);
                }
                else{
        
                    let arrayObjects=that.createTerretoryBoard.createArrayObjects();
                    let currentPlayers=that.nameLocalStorage.outPutName();

                    let namePlayerBlack, namePlayerWhite=undefined;

                    function whoIswho(min,max, currentPlayers){


                        if(currentPlayers){

                            let player1=Math.floor(Math.random() * (max - min + 1)) + min;
                            let player2=Math.floor(Math.random() * (max - min + 1)) + min;

                            if(player1>=player2){
                                namePlayerBlack=currentPlayers.player1;
                                namePlayerWhite=currentPlayers.player2;
                            }
                            else{
                                namePlayerBlack=currentPlayers.player2;
                                namePlayerWhite=currentPlayers.player1;
                            };
                        };
                    };


                    whoIswho(1,20,currentPlayers);

                    
                    if (that.score && arrayObjects){

                        let resetPlayers=that.nameLocalStorage.outPutName();
                        resetPlayers.player1='';
                        resetPlayers.player2='';
                        that.nameLocalStorage.saveName(resetPlayers);

                        that.score.namePlayerBlack=namePlayerBlack;
                        that.score.namePlayerWhite=namePlayerWhite;
                        that.scoreLocalStorage.saveScore(that.score);
        
                        that.boardLocalStorage.saveBoard(arrayObjects);
        
                        let scoreInfo=that.scoreLocalStorage.outPutScore();
                        
                        that.view.viewScore(scoreInfo);
        
                        console.log('save new score in the local storage ');
                    }
                    else{
                        console.error('error save new score in local storage');
                    };
                };
 
            }  
            
            else if(checkResult.phase==='endGame'){

                let currentName =that.nameLocalStorage.outPutName();
        
                if(currentName==null || currentName.player1=='' && currentName.player2==''){
                    alert('Перед початком гри, введіть імена гравців ');
                }
                else if(currentName.player1=='' || currentName.player2==''){
        
                    let result =(currentName.player1=='')?
                        'заповніть ім\'я 1-го гравця \\fill in the name of the first player' 
                     :  'заповніть ім\'я 2-го гравця \\fill in the name of the second player'
                    alert(result);
                }
                else{
        
                    let arrayObjects=that.createTerretoryBoard.createArrayObjects();
                    let currentPlayers=that.nameLocalStorage.outPutName();

                    let namePlayerBlack, namePlayerWhite=undefined;

                    function whoIswho(min,max, currentPlayers){


                        if(currentPlayers){

                            let player1=Math.floor(Math.random() * (max - min + 1)) + min;
                            let player2=Math.floor(Math.random() * (max - min + 1)) + min;

                            if(player1>=player2){
                                namePlayerBlack=currentPlayers.player1;
                                namePlayerWhite=currentPlayers.player2;
                            }
                            else{
                                namePlayerBlack=currentPlayers.player2;
                                namePlayerWhite=currentPlayers.player1;
                            };
                        };
                    };


                    whoIswho(1,20,currentPlayers);

                    
                    if (that.score && arrayObjects){

                        let resetPlayers=that.nameLocalStorage.outPutName();
                        resetPlayers.player1='';
                        resetPlayers.player2='';
                        that.nameLocalStorage.saveName(resetPlayers);

                        that.score.namePlayerBlack=namePlayerBlack;
                        that.score.namePlayerWhite=namePlayerWhite;
                        that.scoreLocalStorage.saveScore(that.score);
        
                        that.boardLocalStorage.saveBoard(arrayObjects);
        
                        let scoreInfo=that.scoreLocalStorage.outPutScore();
                        
                        that.drawingBoard.reDrawingBoard(that.context);

                        that.view.viewScore(scoreInfo);
        
                        console.log('save new score in the local storage ');
                    }
                    else{
                        console.error('error save new score in local storage');
                    };
                };
            };             

            console.log("click start is ok")
        };
    };
};









