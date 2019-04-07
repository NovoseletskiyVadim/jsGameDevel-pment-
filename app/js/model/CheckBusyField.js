
// Describes check busy field


export default class CheckBusyField{


    constructor(){

        

    }


    checkBusyField(objectField){

        if(objectField.stateTerritory==0){

            return objectField;
        }
        else{

            alert (`поле  ' ${objectField.letter} ${objectField.number}' - занято`)
            
            return null;
        }

    }

}