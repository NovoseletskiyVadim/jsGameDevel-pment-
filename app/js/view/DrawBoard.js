

import {arrayData} from '../model/DataGame.js';

let dataObject=arrayData;

// describes drawing board

export default class DrawingBoard {

    constructor(context){
        
        this.context=context;
        this.width=dataObject.width;
        this.height=dataObject.height;
        this.arrayLetters=dataObject.fieldLetters;
        this.arrayNumbers=dataObject.fieldNumbers;

    };


    drawingBoard(context){

        for (var i = 2; i <=19; i++){

            for ( var j = 2; j <=19; j++){

               context.strokeRect(i*this.width/20, j*this.height/20, this.width/21, this.height/21);
            
            };
        
        };
        
    };

    drawingLetters(context){

        context.font="18px Verdana";
        context.fillText(this.arrayLetters[0], 40, 30);
        context.fillText(this.arrayLetters[1], 65, 30);
        context.fillText(this.arrayLetters[2], 90, 30);
        context.fillText(this.arrayLetters[3], 110, 30);
        context.fillText(this.arrayLetters[4], 135, 30);
        context.fillText(this.arrayLetters[5], 165, 30);
        context.fillText(this.arrayLetters[6], 185, 30);
        context.fillText(this.arrayLetters[7], 210, 30);
        context.fillText(this.arrayLetters[8], 240, 30);
        context.fillText(this.arrayLetters[9], 260, 30);
        context.fillText(this.arrayLetters[10], 280, 30);
        context.fillText(this.arrayLetters[11], 305, 30);
        context.fillText(this.arrayLetters[12], 325, 30);
        context.fillText(this.arrayLetters[13], 355, 30);
        context.fillText(this.arrayLetters[14], 380, 30);
        context.fillText(this.arrayLetters[15], 405, 30);
        context.fillText(this.arrayLetters[16], 425, 30);
        context.fillText(this.arrayLetters[17], 455, 30);
        context.fillText(this.arrayLetters[18], 475, 30);

        context.fillText(this.arrayLetters[0], 40, 500);
        context.fillText(this.arrayLetters[1], 65, 500);
        context.fillText(this.arrayLetters[2], 90, 500);
        context.fillText(this.arrayLetters[3], 110, 500);
        context.fillText(this.arrayLetters[4], 135, 500);
        context.fillText(this.arrayLetters[5], 165, 500);
        context.fillText(this.arrayLetters[6], 185, 500);
        context.fillText(this.arrayLetters[7], 210, 500);
        context.fillText(this.arrayLetters[8], 240, 500);
        context.fillText(this.arrayLetters[9], 260, 500);
        context.fillText(this.arrayLetters[10], 280, 500);
        context.fillText(this.arrayLetters[11], 305, 500);
        context.fillText(this.arrayLetters[12], 325, 500);
        context.fillText(this.arrayLetters[13], 355, 500);
        context.fillText(this.arrayLetters[14], 380, 500);
        context.fillText(this.arrayLetters[15], 405, 500);
        context.fillText(this.arrayLetters[16], 425, 500);
        context.fillText(this.arrayLetters[17], 455, 500);
        context.fillText(this.arrayLetters[18], 475, 500);

    };

    drawingNumbers(context){

        context.font="18px Verdana";
        context.fillText(this.arrayNumbers[0], 20, 50);
        context.fillText(this.arrayNumbers[1], 20, 75);
        context.fillText(this.arrayNumbers[2], 20, 105);
        context.fillText(this.arrayNumbers[3], 20, 125);
        context.fillText(this.arrayNumbers[4], 20, 150);
        context.fillText(this.arrayNumbers[5], 20, 175);
        context.fillText(this.arrayNumbers[6], 20, 200);
        context.fillText(this.arrayNumbers[7], 20, 220);
        context.fillText(this.arrayNumbers[8], 20, 245);
        context.fillText(this.arrayNumbers[9], 15, 270);
        context.fillText(this.arrayNumbers[10], 15, 295);
        context.fillText(this.arrayNumbers[11], 15, 320);
        context.fillText(this.arrayNumbers[12], 15, 345);
        context.fillText(this.arrayNumbers[13], 15, 365);
        context.fillText(this.arrayNumbers[14], 15, 390);
        context.fillText(this.arrayNumbers[15], 15, 415);
        context.fillText(this.arrayNumbers[16], 15, 440);
        context.fillText(this.arrayNumbers[17], 15, 465);
        context.fillText(this.arrayNumbers[18], 15, 485);

        context.fillText(this.arrayNumbers[0], 490, 50);
        context.fillText(this.arrayNumbers[1], 490, 75);
        context.fillText(this.arrayNumbers[2], 490, 105);
        context.fillText(this.arrayNumbers[3], 490, 125);
        context.fillText(this.arrayNumbers[4], 490, 150);
        context.fillText(this.arrayNumbers[5], 490, 175);
        context.fillText(this.arrayNumbers[6], 490, 200);
        context.fillText(this.arrayNumbers[7], 490, 220);
        context.fillText(this.arrayNumbers[8], 490, 245);
        context.fillText(this.arrayNumbers[9], 485, 270);
        context.fillText(this.arrayNumbers[10], 485, 295);
        context.fillText(this.arrayNumbers[11], 485, 320);
        context.fillText(this.arrayNumbers[12], 485, 345);
        context.fillText(this.arrayNumbers[13], 485, 365);
        context.fillText(this.arrayNumbers[14], 485, 390);
        context.fillText(this.arrayNumbers[15], 485, 415);
        context.fillText(this.arrayNumbers[16], 485, 440);
        context.fillText(this.arrayNumbers[17], 485, 465);
        context.fillText(this.arrayNumbers[18], 485, 485);

    };


};
