/* 
    Describes the structure of the object (chips),
     which will be stored in a two-dimensional array
     of objects

    property  "stateTerritory" can have such values:
        
        null-free territory - you can make a move;
        black -the field is occupied by a black
                stone (the course can not be done
                but you can take a prisoner;
        white - the field is occupied by white stone
                the course can not be done but you can
                take a prisoner;
        
        whiteTerritory - the territory is captured 
                        by white you can make a move;
        blackTerritory - the territory is captured 
                        by black you can make a move;                                 

*/

export default class Territory{

    // the constructor takes data for a single cell field
    
    constructor(letter,number,coord_x,coord_y, arr_i, arr_j, stateTerritory ){

        this.letter=letter;
        this.number=number;
        this.coord_x=coord_x;
        this.coord_y=coord_y;
        this.arr_i=arr_i;
        this.arr_j=arr_j;
        this.stateTerritory=stateTerritory;
        
    };

};