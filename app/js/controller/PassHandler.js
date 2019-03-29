
// describes pass button  work   

export default class PassHandler{

    constructor(ScoreLocalStorageObject){

        this.ScoreLocalStorageObject=ScoreLocalStorageObject;
        this.move=document.getElementById('pass');
    }


    movePass(){

        let that=this;

        this.move.onclick=function(){
            console.log('click pass');
            
            let score=that.ScoreLocalStorageObject.outPutScore();

            if(score.turnTurn==='black'){
                
                score.lastBlackMove='pass';
                score.turnTurn='white';
                that.ScoreLocalStorageObject.saveScore(score);
                document.getElementById('turnTurn').className='circleTurnTurn white';
                
            }
            else{
                score.lastWhiteMove='pass';
                score.turnTurn='black';
                that.ScoreLocalStorageObject.saveScore(score);
                document.getElementById('turnTurn').className='circleTurnTurn black';


            };
        }



    }
}