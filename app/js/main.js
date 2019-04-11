//   remove check
console.log('main-ok');

import {arrayData} from './model/DataGame.js';
import NameLocalStorage from './model/NameLocalStorage.js';
import Score from './model/Score.js';
import ScoreLocalStorage from './model/ScoreLocalStorage.js';
import BoardLocalStorage from './model/BoardLocalStorage.js'
import CreateTerretoryBoard from './model/CreateTerretoryBoard.js'

import DrawingBoard from './view/DrawBoard.js';
import CreateSelect from './view/CreateSelect.js';
import ViewCurrentData from './view/ViewCurrentData.js'
import ViewCurrentPlayer from './view/ViewCurrentPlayer.js';

import StartInitializesHandler from './controller/StartInitializesHandler.js';
import MakeAMoveHandler from './controller/MakeAMoveHandler.js';
import PassHandler from './controller/PassHandler.js';
import SurrenderHandler from './controller/SurrenderHandler.js';
import InputNameHandler from './controller/InputNameHandler.js';



// drawing play board 

let initializeData = arrayData;
let canvas=arrayData.canvas;
let context=canvas.getContext('2d');

const boardDrawing=new DrawingBoard(context);

boardDrawing.drawingBoard(context)
boardDrawing.drawingLetters( context );
boardDrawing.drawingNumbers( context );

const createSelect= new CreateSelect(arrayData)
createSelect.createSelectLetters();
createSelect.createSelectNumbers();



// initialization data 

const score = new Score(initializeData);

const newScoreLocalStorage = new ScoreLocalStorage(score);

const createTerretoryBoard = new CreateTerretoryBoard(initializeData);

const boardLocalStorage = new BoardLocalStorage(createTerretoryBoard.createArrayObjects());

const viewCurrentData = new ViewCurrentData(context); 

const initializes = new StartInitializesHandler(score,
                                                newScoreLocalStorage,
                                                createTerretoryBoard,
                                                boardLocalStorage,
                                                initializeData,
                                                viewCurrentData,
                                                context);
initializes.initializationPlay();


//make a move 

const currentScoreLocalStorage = new ScoreLocalStorage(); 
const makeAMoveHandler = new MakeAMoveHandler(currentScoreLocalStorage,viewCurrentData);
makeAMoveHandler.makeAmove();


// make a pass
const passHandler=new PassHandler(currentScoreLocalStorage,viewCurrentData);
passHandler.movePass();

// make a surrender
const surrenderHundler = new SurrenderHandler( currentScoreLocalStorage, viewCurrentData );
surrenderHundler.moveSurrender();


// click 'input name'
const inputNameHandler=new InputNameHandler();
// console.dir(inputNameHandler);
inputNameHandler.inputNamePlayer();


// this variables for window.onload function
const onloadScore = new ScoreLocalStorage();
const currentBoardLocalStorage = new BoardLocalStorage();
const nameLocalStorage=new NameLocalStorage();
const viewCurrentPlayer = new ViewCurrentPlayer(); 

window.onload=function(){
    
    let namePlayers=nameLocalStorage.outPutName();
    viewCurrentPlayer.viewPlayer(namePlayers);

    let currentBoard=currentBoardLocalStorage;
    viewCurrentData.viewBoard(currentBoard.outPutBoard());
    
    let score=onloadScore.outPutScore();
    
    viewCurrentData.viewScore(score);

    
    
}

