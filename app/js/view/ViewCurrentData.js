

import {arrayData} from '../model/DataGame.js';

let data=arrayData;

export default class ViewCurrentData{

    constructor(context){
        this.data=data;
        this.context=context;
    }

    viewScore(ScoreLocalStorageObject){

        let currentScore=ScoreLocalStorageObject

        if(currentScore.turnTurn=='black'){

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

            document.getElementById('player1').value='';
            document.getElementById('player2').value='';
            document.getElementById('player1').style.display='none';
            document.getElementById('player2').style.display='none';

            document.getElementById('move').style.display='block';
            document.getElementById('blockMakeAMove').style.display='block';

            document.getElementById('resultGameOwer').style.display='none';

            document.getElementById('namePlayer1').innerText=currentScore.namePlayerBlack;
            document.getElementById('namePlayer2').innerText=currentScore.namePlayerWhite;
            document.getElementById('territoryBlack').innerText=currentScore.territoryBlack;
            document.getElementById('territoryWhite').innerText=currentScore.territoryWhite;
            document.getElementById('captivityBlack').innerText=currentScore.captivityBlack
            document.getElementById('captivityWhite').innerText=currentScore.captivityWhite;

           
            if(currentScore.lastBlackMove!=''||currentScore.lastMoveWhite!=''){

                document.getElementById('lastMoveBlack').style.display="block";
                document.getElementById('lastMoveBlack').innerText=currentScore.lastBlackMove;

                document.getElementById('lastMoveWhite').style.display="block";
                document.getElementById('lastMoveWhite').innerText=currentScore.lastWhiteMove;

            }
            else{

                document.getElementById('lastMoveBlack').style.display="block";
                document.getElementById('lastMoveWhite').style.display="block";

            }

        }
        else if(currentScore.phase==="endGame"){

            
            document.getElementById('player1').style.display='block';
            document.getElementById('player2').style.display='block';
            document.getElementById('resultGameOwer').style.display='block';

            document.getElementById('namePlayer1').innerText='Гравець чорних.';
            document.getElementById('namePlayer2').innerText='Гравець білих';
            
            document.getElementById('move').style.display='none';
            document.getElementById('blockMakeAMove').style.display='none';


            document.getElementById('lastMoveWhite').innerText='';
            document.getElementById('lastMoveBlack').innerText='';


            document.getElementById('territoryBlack').innerText='0';
            document.getElementById('territoryWhite').innerText='0';
            document.getElementById('captivityBlack').innerText='0';
            document.getElementById('captivityWhite').innerText='0';
        
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
        let radius = 0.3 * this.data.width/16;


        function drawPiece(x, y, colorIn, colorBorder) {

            // Coordinates on canvas : 
            // x horizontal increasing from left to right
            // y vertical increasing from top to bottom

            var a = x;
            var b = y;

            // Draw piece
            
            that.context.beginPath();
            that.context.arc(a, b, radius, 0, 2*Math.PI, false);
            that.context.fillStyle = colorIn;
            that.context.fill();
            that.context.lineWidth = 1;
            that.context.strokeStyle = colorBorder;
            that.context.stroke();
        }


        let arr=CurrentDataBoard;

        

        for(let i=0; i<this.data.rows;i++){

            let arr_rows=arr[i];

            for(let j=0; j<this.data.cols;j++){
                
                let obj=arr_rows[j];
                let y=obj.coord_x;
                let x=obj.coord_y;
                let colorIn=obj.stateTerritory;
                let colorBorder;

                if(colorIn=='black'){

                    colorBorder='white';
                }
                else{

                    colorBorder='black'
                }

                if(obj.stateTerritory!=0){
                   
                    drawPiece(x,y,colorIn,colorBorder);

                }


            }
        }



    }


}