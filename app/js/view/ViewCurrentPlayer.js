// describes the display of player names before the game starts.



export default class ViewCurrentPlayer{


    constructor(objPlayers){

        this.objPlayers=objPlayers;

    }

    

    viewPlayer(objPlayers){

    
        if(this.objPlayers!=undefined){

            let players=this.objPlayers;

            console.log('players.player1='+players.player1);
            console.log('players.player2='+players.player2);

            if(players.player1!=''||players.player1!=undefined){

                document.getElementById('namePlayer1').innerText=players.player1;
                document.getElementById('fieldPlayer1').style.display='block';
                document.getElementById('namePlayer1').style.display='inline';
                document.getElementById('resultGameOwer').style.display='none';
                
            }else{

                document.getElementById('namePlayer1').style.display='none';
                document.getElementById('fieldPlayer1').style.display='none';

            };

            if(players.player2!=''||players.player2!=undefined){

    
                document.getElementById('namePlayer2').innerText=players.player2;
                document.getElementById('fieldPlayer2').style.display='block';
                document.getElementById('namePlayer2').style.display='inline';

    
            }
            else{
    
                document.getElementById('namePlayer2').style.display='none';
                document.getElementById('fieldPlayer2').style.display='none';

    
            };

        }
        else if(objPlayers==null){
            
            document.getElementById('namePlayer1').style.display='none';
            document.getElementById('fieldPlayer1').style.display='none';

            document.getElementById('namePlayer2').style.display='none';
            document.getElementById('fieldPlayer2').style.display='none';
    
        }
        else{

            if(objPlayers.player1!=''||objPlayers.player1!=undefined){

                document.getElementById('namePlayer1').innerText=objPlayers.player1;
                document.getElementById('fieldPlayer1').style.display='block';                
                document.getElementById('namePlayer1').style.display='inline';
                document.getElementById('resultGameOwer').style.display='none';
                
            }
            else{
                document.getElementById('namePlayer1').style.display='none';
                document.getElementById('fieldPlayer1').style.display='none';
            };
            
            if(objPlayers.player2!=''||objPlayers.player2!=undefined){
    
                document.getElementById('namePlayer2').innerText=objPlayers.player2;
                document.getElementById('fieldPlayer2').style.display='block';
                document.getElementById('namePlayer2').style.display='inline';
    
            }
            else{
    
                document.getElementById('namePlayer2').style.display='none';
                document.getElementById('fieldPlayer2').style.display='none';
    
            };

        }; 

    };

};





