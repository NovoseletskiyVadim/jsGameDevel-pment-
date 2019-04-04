// Describes event handler click button "input name"

import NamesPlayer from '../model/NamesPlayer.js';
import NameLocalStorage from '../model/NameLocalStorage.js';
import ViewCurrentPlayer from '../view/ViewCurrentPlayer.js';


export default class InputNameHandler{

    constructor(){

        this.namesPlayer=new NamesPlayer();
        this.nameLocalStorage=new NameLocalStorage();
        this.viewCurrentPlayer=new ViewCurrentPlayer();

        this.inputName=document.getElementById('inputNamePlayer');
    }

    inputNamePlayer(){

        let that=this;

        this.inputName.onclick=function(){
            
            let checkNameLocalStorage=that.nameLocalStorage.outPutName();

            if(checkNameLocalStorage==null||checkNameLocalStorage==undefined){

                let names=that.namesPlayer;

                names.player1='';
                names.player2='';

                that.nameLocalStorage.saveName(names);

            };

            let checkCurrentNameLocalStorage=that.nameLocalStorage.outPutName();
            
            if(checkCurrentNameLocalStorage.player1==''||checkCurrentNameLocalStorage.player2==''){
               
                let name=prompt('Введіть своє і\'мя \\ Input your name', 'і\'мя\\name');

                let objName=that.nameLocalStorage.outPutName();

                if(objName.player1==''||objName.player1==undefined){
                    
                    objName.player1=name;
                    objName.player2='';

                   that.nameLocalStorage.saveName(objName);

                   let curentName1=that.nameLocalStorage.outPutName();
                   that.viewCurrentPlayer.viewPlayer(curentName1);


                }
                else if(objName.player2==''||objName.player2==undefined){

                    objName.player2=name;
                    that.nameLocalStorage.saveName(objName);

                    let curentName2=that.nameLocalStorage.outPutName();
                    that.viewCurrentPlayer.viewPlayer(curentName2);


                };
                  
            }
            else if(checkNameLocalStorage.player1!=''&& checkNameLocalStorage.player2!=''){

                
                let result=confirm('Ви хочете змінити ім\'я? \\Do you want to change the name?');
                
                if(result){

                    let changePlayer1=confirm('Ви хочете змінити ім\'я 1 го гравця? \\Do you want to change the name of the first player?') ;
                    
                    if(changePlayer1){

                        let name=prompt('Введіть своє і\'мя \\ Input your name', 'і\'мя\\name');
                        let objName=that.nameLocalStorage.outPutName();

                        objName.player1=name;
                        that.nameLocalStorage.saveName(objName);

                        let curentName1=that.nameLocalStorage.outPutName();
                        that.viewCurrentPlayer.viewPlayer(curentName1);
                    }
                    else{

                        let changePlayer2=confirm('Ви хочете змінити ім\'я 2 го гравця? \\Do you want to change the name of the second player?');
                        if(changePlayer2){

                            let name=prompt('Введіть своє і\'мя \\ Input your name', 'і\'мя\\name');
                            let objName=that.nameLocalStorage.outPutName();

                            objName.player2=name;
                            that.nameLocalStorage.saveName(objName);

                            let curentName1=that.nameLocalStorage.outPutName();
                            that.viewCurrentPlayer.viewPlayer(curentName1);

                        };
                    };
                };
            };
                    

            // console.log('click input name '); 
        };

    };
};

