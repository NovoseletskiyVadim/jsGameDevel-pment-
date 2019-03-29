/* 
    Describes the structure of the object 'Score'
*/

export default class Score{

    // the constructor takes data from data object for a score object and 
    // value of namePlayerBlack and namePlayerWhite

    constructor(dataObject,namePlayerBlack,namePlayerWhite){
        
        this.turnTurn=dataObject.turnTurn;
        this.captivityWhite=dataObject.captivityWhite;
        this.captivityBlack=dataObject.captivityBlack;
        this.territoryWhite=dataObject.territoryWhite;
        this.territoryBlack=dataObject.territoryBlack;
        this.phase=dataObject.phase;
        this.namePlayerBlack=namePlayerBlack;
        this.namePlayerWhite=namePlayerWhite;
        this.lastBlackMove=dataObject.lastBlackMove;
        this.lastWhiteMove=dataObject.lastWhiteMove;

    };

};