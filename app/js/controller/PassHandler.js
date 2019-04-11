
// describes pass button work   

export default class PassHandler{

    constructor(ScoreLocalStorageObject,viewCurrentDataScore){

        this.ScoreLocalStorageObject=ScoreLocalStorageObject;
        this.viewCurrentDataScore=viewCurrentDataScore;
        this.move=document.getElementById('pass');
    }


    movePass(){

        let that=this;

        this.move.onclick=function(){
           
            
            let score=that.ScoreLocalStorageObject.outPutScore();

            if(score.turnTurn==='black'){
                
                score.lastBlackMove='pass';
                score.turnTurn='white';
                that.ScoreLocalStorageObject.saveScore(score);

                let view=that.viewCurrentDataScore;
                view.viewScore(that.ScoreLocalStorageObject.outPutScore());
                
            }
            else{
                score.lastWhiteMove='pass';
                score.turnTurn='black';
                that.ScoreLocalStorageObject.saveScore(score);

                let view=that.viewCurrentDataScore;
                view.viewScore(that.ScoreLocalStorageObject.outPutScore());


            };

            let checkPass=that.ScoreLocalStorageObject.outPutScore();

            if(checkPass.lastBlackMove==='pass'&& checkPass.lastWhiteMove==='pass'){

                checkPass.phase='endGame';

                let captivityBlack=checkPass.captivityBlack;
                let captivityWhite=checkPass.captivityWhite;
                let territoryBlack=checkPass.territoryBlack
                let territoryWhite=checkPass.territoryWhite;

                let finalResultBlack=territoryBlack-captivityWhite;
                let finalResultWhite=0.5+territoryWhite-captivityBlack;

                if(finalResultBlack>finalResultWhite){

                    checkPass.victory='black';
                }
                else{
                    checkPass.victory='white';
                };


                that.ScoreLocalStorageObject.saveScore(checkPass);
                let view=that.viewCurrentDataScore;
                view.viewScore(checkPass);
                alert('Игра окончена!!')

            };

            console.log('click pass');
        };



    };
};