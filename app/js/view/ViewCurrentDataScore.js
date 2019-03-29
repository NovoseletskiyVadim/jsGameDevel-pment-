
export default class ViewCurrentDataScore{

    constructor(){

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



}