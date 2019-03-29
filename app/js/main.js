//   remove check
console.log('main-ok');

import {arrayData} from './model/DataGame.js';
import DrawingBoard from './view/DrawBoard.js';
import ScoreLocalStorage from './model/ScoreLocalStorage.js';
import CreateSelect from './view/CreateSelect.js';

import Score from './model/Score.js';
import BoardLocalStorage from './model/BoardLocalStorage.js'
import CreateTerretoryBoard from './model/CreateTerretoryBoard.js'
import StartInitializesHandler from './controller/StartInitializesHandler.js';
import MakeAMoveHandler from './controller/MakeAMoveHandler.js';
import PassHandler from './controller/PassHandler.js';
// drawing play board 

let canvas= document.getElementById('game');
let context=canvas.getContext('2d');
let initializeData = arrayData;

const boardDrawing=new DrawingBoard(initializeData,context );

boardDrawing.drawingBoard(context)
boardDrawing.drawingLetters(context);
boardDrawing.drawingNumbers(context);

const onloadScore= new ScoreLocalStorage();

const createSelect= new CreateSelect(arrayData)
createSelect.createSelectLetters();
createSelect.createSelectNumbers();



// initialization data 
const score = new Score(initializeData);

const newScoreLocalStorage = new ScoreLocalStorage(score);

const createTerretoryBoard = new CreateTerretoryBoard(initializeData);

const boardLocalStorage=new BoardLocalStorage(initializeData);

const initializes = new StartInitializesHandler(score,
                                                newScoreLocalStorage,
                                                createTerretoryBoard,
                                                boardLocalStorage,
                                                initializeData );
initializes.initializationPlay();




const currentScoreLocalStorage = new ScoreLocalStorage(); 
const makeAMoveHandler= new MakeAMoveHandler(currentScoreLocalStorage);
makeAMoveHandler.makeAmove();

const passHandler=new PassHandler();
passHandler.movePass();



window.onload=function(){

    

    let score=onloadScore.outPutScore();
    if(score!==null){

        let turnTurn=score.turnTurn;
        let namePlayer1=score.namePlayerBlack;
        let namePlayer2=score.namePlayerWhite;
        let territoryBlack=score.territoryBlack;
        let territoryWhite =score.territoryWhite;
        let captivityBlack=score.captivityBlack;
        let captivityWhite=score.captivityWhite;

        document.getElementById('namePlayer1').innerText=namePlayer1;
        document.getElementById('namePlayer2').innerText=namePlayer2;
        document.getElementById('territoryBlack').innerText=territoryBlack;
        document.getElementById('territoryWhite').innerText=territoryWhite;
        document.getElementById('captivityBlack').innerText=captivityBlack
        document.getElementById('captivityWhite').innerText=captivityWhite;

        if(turnTurn==='black'){

            document.getElementById('turnTurn').className='circleTurnTurn black';
        
        }
        else{
            document.getElementById('turnTurn').className='circleTurnTurn white';
        }

        if(namePlayer1 && namePlayer2){

            document.getElementById('player1').value='';
            document.getElementById('player2').value='';
            document.getElementById('player1').style.display='none';
            document.getElementById('player2').style.display='none';
        
        }

    }

    
}



