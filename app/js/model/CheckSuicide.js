
/* 
    Checks suicide. If a player makes a move on the field
    where the breath will be blocked, or this piece or 
    group entirely

*/

export default class CheckSuiside{

    // the constructor accepts an object which returns the class "CheckBusyField"

    constructor(checkBusyFieldObj){

        this.territoryObject=checkBusyFieldObj;
        this.stateTerritory=checkBusyFieldObj.stateTerritory;

    };

    checkSuiside(checkBusyFieldObj){

        let result;

        if(this.territoryObject!=null||this.territoryObject!=undefined){

            let checkTerretory=this.stateTerritory;

            if(checkTerretory=='black'){

            }
            else{

            }


        }
        else{
            let territoryObject=checkBusyFieldObj;
            let stateTerritory=territoryObject.stateTerritory;

            let checkTerretory=stateTerritory;

            if(checkTerretory=='black'){
                
            }
            else{

            }
             
        }

        return result;


    }




}