
// Describes event handler click button "make a move "
 
/*TODO: 

    работа над обработчивом  кнопки ход


*/

export default class MakeAMoveHandler{


    constructor(scoreLocalStorage){

        this.scoreLocalStorage=scoreLocalStorage;

        this.move=document.getElementById('makeAmove');
    }

    makeAmove(){
        

        let that=this;

        let selectLetter=document.getElementById('lettersSelect').value;
        let selectNumber=document.getElementById('numbersSelect').value;

        this.move.onclick=function(){

            let score = that.scoreLocalStorage.outPutScore();

            if(score.turnTurn==='black'){

                


                score.turnTurn='white';
                that.scoreLocalStorage.saveScore(score);
                document.getElementById('turnTurn').className='circleTurnTurn white';
            }
            else{

                score.turnTurn='black';
                that.scoreLocalStorage.saveScore(score);
                document.getElementById('turnTurn').className='circleTurnTurn black';
            };

            console.log('click make a move');
        
        }

    }

}


