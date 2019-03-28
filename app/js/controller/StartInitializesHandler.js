// Describes event handler click button "Start"

export default class StartInitializesHandler{

    constructor(
        score,
        scoreLocalStorage,
        createTerretoryBoard,
        boardLocalStorage,
        objectData,
    ){

        this.score=score;
        this.scoreLocalStorage=scoreLocalStorage;
        this.createTerretoryBoard=createTerretoryBoard;
        this.boardLocalStorage=boardLocalStorage;
        this.objectData=objectData;
        this.start=document.getElementById('start');

    }

    
    initializationPlay(){

        let that=this;

        this.start.onclick=function(){

            console.log("click start is ok")

            let checkResult=that.scoreLocalStorage.outPutScore();
        
            if(checkResult===null){
                        
                let namePlayerBlack=document.getElementById('player1').value;
                let namePlayerWhite=document.getElementById('player2').value;
        
                document.getElementById('player1').style.display='none';
                document.getElementById('player2').style.display='none';
        
                
                if(namePlayerBlack=='' && namePlayerWhite==''){
                    alert('Перед початком гри, введіть імена гравців ')
                }
                else if(namePlayerBlack=='' || namePlayerWhite==''){
        
                    let result =(namePlayerBlack=='')? 'заповніть імя чорного гравця' : 'заповніть імя білого гравця'
                    alert(result);
                }
                else{
        
                    document.getElementById('player1').value='';
                    document.getElementById('player2').value='';
                    document.getElementById('player1').setAttribute('disabled','disabled');
                    document.getElementById('player2').setAttribute('disabled','disabled');

                    let arrayObjects=that.createTerretoryBoard.createArrayObjects()
        
                    
                    if (that.score && arrayObjects){

                        that.score.namePlayerBlack=namePlayerBlack;
                        that.score.namePlayerWhite=namePlayerWhite;
                        that.scoreLocalStorage.saveScore(that.score);
        
                        that.boardLocalStorage.saveBoard(arrayObjects);
        
                        let scoreInfo=that.scoreLocalStorage.outPutScore();
                        let turnTurn=scoreInfo.turnTurn;
                        let namePlayer1=scoreInfo.namePlayerBlack;
                        let namePlayer2=scoreInfo.namePlayerWhite;
                        let territoryBlack=scoreInfo.territoryBlack;
                        let territoryWhite =scoreInfo.territoryWhite;
                        let captivityBlack=scoreInfo.captivityBlack;
                        let captivityWhite=scoreInfo.captivityWhite;
        
        
        
                        document.getElementById('namePlayer1').innerText=namePlayer1;
                        document.getElementById('namePlayer2').innerText=namePlayer2;
                        document.getElementById('territoryBlack').innerText=territoryBlack;
                        document.getElementById('territoryWhite').innerText=territoryWhite;
                        document.getElementById('captivityBlack').innerText=captivityBlack
                        document.getElementById('captivityWhite').innerText=captivityWhite;
                        if(turnTurn==='black'){
                            document.getElementById('turnTurn').className='circleTurnTurn black';
                        }
        
                        console.log('save new score in the local storage ');
                    }
                    else{
                        console.error('error save new score in local storage');
                    };
                };
            }  
            else if (checkResult.phase==='startGame'){
        
                document.getElementById('player1').value='';
                document.getElementById('player2').value='';
                document.getElementById('player1').style.display='none';
                document.getElementById('player2').style.display='none';
                
                alert('Игра уже начата. Что бы начать сначала завершите партию.')
                
            };
             
        };
    };
};









