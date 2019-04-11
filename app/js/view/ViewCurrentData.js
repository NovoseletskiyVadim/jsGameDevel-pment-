import {arrayData} from '../model/DataGame.js';
import DrawingBoard from './DrawBoard.js';

let data=arrayData;

export default class ViewCurrentData{

    constructor( context ){

        this.data=data;
        this.context=context;
        this.drawingBoard=new DrawingBoard( context );
        
    }

    viewScore(ScoreLocalStorageObject){

        let currentScore=ScoreLocalStorageObject;
        if (currentScore==null){
            return null;
        }
        else if(currentScore.turnTurn=='black'){

            document.getElementById('turnTurn').className='circleTurnTurn black'; 

            document.getElementById('lastMoveWhite').style.display='block';
            document.getElementById('lastMoveWhite').innerText=currentScore.lastWhiteMove;
            
        }
        else{

            document.getElementById('turnTurn').className='circleTurnTurn white'; 

            document.getElementById('lastMoveBlack').style.display='block';
            document.getElementById('lastMoveBlack').innerText=currentScore.lastBlackMove;

        };

        if(currentScore.phase==="startGame"){

           
            document.getElementById('start').style.display='none';
            document.getElementById('inputNamePlayer').style.display='none';

            document.getElementById('pass').style.display='inline-block';
            document.getElementById('surrender').style.display='inline-block';

            document.getElementById('scoreBlack').style.display='block';
            document.getElementById('scoreWhite').style.display='block';

            document.getElementById('fieldPlayer1').style.display='block';
            document.getElementById('fieldPlayer2').style.display='block';

            document.getElementById('number1').style.display='none';
            document.getElementById('number2').style.display='none';
            


            document.getElementById('move').style.display='block';
            document.getElementById('blockMakeAMove').style.display='block';

            document.getElementById('resultGameOwer').style.display='none';

            // console.error('currentScore.namePlayerBlack='+currentScore.namePlayerBlack);

           

            document.getElementById('namePlayer1').innerText=currentScore.namePlayerBlack;
            document.getElementById('namePlayer2').innerText=currentScore.namePlayerWhite;
            document.getElementById('territoryBlack').innerText=currentScore.territoryBlack;
            document.getElementById('territoryWhite').innerText=currentScore.territoryWhite;
            document.getElementById('captivityBlack').innerText=currentScore.captivityBlack
            document.getElementById('captivityWhite').innerText=currentScore.captivityWhite;

            document.getElementById('namePlayer1').style.display='block';
            document.getElementById('namePlayer2').style.display='block';

           
            if(currentScore.lastBlackMove!=''||currentScore.lastMoveWhite!=''){

                document.getElementById('lastMoveBlack').style.display="block";
                document.getElementById('lastMoveBlack').innerText=currentScore.lastBlackMove;

                document.getElementById('lastMoveWhite').style.display="block";
                document.getElementById('lastMoveWhite').innerText=currentScore.lastWhiteMove;

            }
            else{

                document.getElementById('lastMoveBlack').style.display="block";
                document.getElementById('lastMoveWhite').style.display="block";

            };

        }
        else if(currentScore.phase==="endGame"){

            document.getElementById('namePlayer1').innerText='';
            document.getElementById('namePlayer2').innerText='';

            document.getElementById('scoreBlack').style.display='none';
            document.getElementById('scoreWhite').style.display='none';

            document.getElementById('number1').style.display='block';
            document.getElementById('number2').style.display='block';
            
            document.getElementById('move').style.display='none';
            document.getElementById('blockMakeAMove').style.display='none';

            document.getElementById('lastMoveWhite').innerText='';
            document.getElementById('lastMoveBlack').innerText='';

            document.getElementById('start').style.display='inline-block';
            document.getElementById('inputNamePlayer').style.display='inline-block';

            document.getElementById('pass').style.display='none';
            document.getElementById('surrender').style.display='none';


            document.getElementById('resultGameOwer').style.display='block';

            if(currentScore.victory=='black'){

                document.getElementById('victory').className='circleTurnTurn black';

            }
            else{

                document.getElementById('victory').className='circleTurnTurn white'; 

            };
                   
        };

    };

    getInputNameValue(){

        let namePlayerBlack=document.getElementById('player1').value;
        let namePlayerWhite=document.getElementById('player2').value;
        
        return {
            'namePlayerBlack':namePlayerBlack,
            'namePlayerWhite':namePlayerWhite

        };
    };

    getInputMoveValue(){

        let letterMove=document.getElementById('lettersSelect').value;
        let numberMove=document.getElementById('numbersSelect').value;
        
        return {

            'letterMove':letterMove,
            'numberMove':numberMove

        }
    }

    viewBoard(CurrentDataBoard){

        let that=this;

        // Radius of each piece
        let radius = 0.2 * this.data.width/16;


        function drawPiece(x, y, colorIn, colorBorder) {

            // console.warn('funck draw piece');

            // Coordinates on canvas : 
            // x horizontal increasing from left to right
            // y vertical increasing from top to bottom

            var a = x;
            var b = y;

            // Draw piece
            
            that.context.beginPath();
            that.context.arc(a, b, radius, 0,2*Math.PI, false);
            that.context.fillStyle = colorIn;
            that.context.fill();
            that.context.lineWidth = 1;
            that.context.strokeStyle = colorBorder;
            that.context.stroke();
        };


        if(CurrentDataBoard==null){

            this.drawingBoard.drawingBoard(this.context);
            
        }
        else{

            let arr=CurrentDataBoard;
            
            for(let i=0; i<this.data.rows;i++){

                let arr_rows=arr[i];

                for(let j=0; j<this.data.cols;j++){
                    
                    let obj=arr_rows[j];
                    let y=obj.coord_x;
                    let x=obj.coord_y;
                    let colorIn=null;
                    let colorBorder;

                    if(obj.stateTerritory==0){
                        // colorIn ='green';
                        // colorBorder='black';
                        // drawPiece(x,y,colorIn,colorBorder);
                        continue;
                    }
                    else if(obj.stateTerritory==1){
                        // colorIn ='red'
                        // colorBorder='black';
                        // drawPiece(x,y,colorIn,colorBorder);
                    }
                    else if(obj.stateTerritory==2){

                        // colorIn='blue'
                        // colorBorder='white';
                        // drawPiece(x,y,colorIn,colorBorder);
                    }
                    else if(obj.stateTerritory==3){
                        // colorIn ='yellow';
                        // colorBorder='black';
                        // drawPiece(x,y,colorIn,colorBorder);

                    }
                    else if(obj.stateTerritory=='black'){
                        
                        colorIn='black';
                        colorBorder='black';
                        drawPiece(x,y,colorIn,colorBorder);
                        

                        
                    }
                    else if(obj.stateTerritory=='white'){
                        colorIn='white'
                        colorBorder='black';
                        drawPiece(x,y,colorIn,colorBorder);

                    };

                    
                };
            };
        };
    };
};