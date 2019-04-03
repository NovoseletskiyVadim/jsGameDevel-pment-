

export default class SurrenderHandler{


    constructor( model, view ){

        this.model = model;
        this.view = view;
        this.move = document.getElementById('surrender');
    }

    moveSurrender(){

        let that = this

        this.move.onclick = function(){

            let score = that.model.outPutScore();
            let turnTurn = score.turnTurn;

            if(turnTurn == "black"){

                let victory = "white";
                score.victory = victory;
                score.phase = 'endGame';

                that.model.saveScore(score);


                let newScore= that.model.outPutScore();
                let view=that.view;
                view.viewScore(newScore);


            }
            else{

                let victory = "black";
                score.victory = victory;
                score.phase = 'endGame';

                that.model.saveScore(score);


                let newScore= that.model.outPutScore();
                let view=that.view;
                view.viewScore(newScore);


            };
            console.log('click surrender');

        }


    }

}