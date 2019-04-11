
// Describes check busy field


export default class CheckBusyField{


    constructor(){

        

    }


    checkBusyField(objectField){

        if(
            objectField.stateTerritory==0 ||
            objectField.stateTerritory==1 ||
            objectField.stateTerritory==2 ||
            objectField.stateTerritory==3 

        ){

            return objectField;
        }
        else{

            alert (`поле  ' ${objectField.letter} ${objectField.number}' - занято`)
            
            return null;
        }

    }

}