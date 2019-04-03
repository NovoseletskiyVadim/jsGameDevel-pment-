import {arrayData} from '../model/DataGame.js';

let dataObject=arrayData;

// describes drawing board

export default class DrawingBoard {

    constructor( context ){
        
        this.context = context;
        this.width = dataObject.width;
        this.height = dataObject.height;
        this.arrayLetters = dataObject.fieldLetters;
        this.arrayNumbers = dataObject.fieldNumbers;
        this.canvasWidth = dataObject.canvasWidth;
        this.canvasHeight = dataObject.canvasHeight;

    };

    reDrawingBoard( context ){

        context.clearRect(40, 40, this.canvasWidth, this.canvasHeight);
        
        context.strokeStyle = '#000';

        for (var i = 2; i <=19; i++){
            
            for ( var j = 2; j <=19; j++){

              context.strokeRect(i*this.width/20, j*this.height/20, this.width/21, this.height/21);
            
            };
        
        };

        console.log('re drawing board')


    }


    drawingBoard( context ){

        
        context.strokeStyle = '#000';

        for (var i = 2; i <=19; i++){

            for ( var j = 2; j <=19; j++){

               context.strokeRect(i*this.width/20, j*this.height/20, this.width/21, this.height/21);
            
            };
        
        };

        console.log(' drawing board')
        
    };

    drawingLetters( context ){

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

        context.fillText(this.arrayLetters[0], 40, 510);
        context.fillText(this.arrayLetters[1], 65, 510);
        context.fillText(this.arrayLetters[2], 90, 510);
        context.fillText(this.arrayLetters[3], 110, 510);
        context.fillText(this.arrayLetters[4], 135, 510);
        context.fillText(this.arrayLetters[5], 165, 510);
        context.fillText(this.arrayLetters[6], 185, 510);
        context.fillText(this.arrayLetters[7], 210, 510);
        context.fillText(this.arrayLetters[8], 240, 510);
        context.fillText(this.arrayLetters[9], 260, 510);
        context.fillText(this.arrayLetters[10], 280, 510);
        context.fillText(this.arrayLetters[11], 305, 510);
        context.fillText(this.arrayLetters[12], 325, 510);
        context.fillText(this.arrayLetters[13], 355, 510);
        context.fillText(this.arrayLetters[14], 380, 510);
        context.fillText(this.arrayLetters[15], 405, 510);
        context.fillText(this.arrayLetters[16], 425, 510);
        context.fillText(this.arrayLetters[17], 455, 510);
        context.fillText(this.arrayLetters[18], 475, 510);

        console.log('drawing letters');

    };

    drawingNumbers(context){

        context.font="18px Verdana";

        context.fillText(this.arrayNumbers[0], 10, 50);
        context.fillText(this.arrayNumbers[1], 10, 75);
        context.fillText(this.arrayNumbers[2], 10, 105);
        context.fillText(this.arrayNumbers[3], 10, 125);
        context.fillText(this.arrayNumbers[4], 10, 150);
        context.fillText(this.arrayNumbers[5], 10, 175);
        context.fillText(this.arrayNumbers[6], 10, 200);
        context.fillText(this.arrayNumbers[7], 10, 220);
        context.fillText(this.arrayNumbers[8], 10, 245);
        context.fillText(this.arrayNumbers[9], 5, 270);
        context.fillText(this.arrayNumbers[10], 5, 295);
        context.fillText(this.arrayNumbers[11], 5, 320);
        context.fillText(this.arrayNumbers[12], 5, 345);
        context.fillText(this.arrayNumbers[13], 5, 365);
        context.fillText(this.arrayNumbers[14], 5, 390);
        context.fillText(this.arrayNumbers[15], 5, 415);
        context.fillText(this.arrayNumbers[16], 5, 440);
        context.fillText(this.arrayNumbers[17], 5, 465);
        context.fillText(this.arrayNumbers[18], 5, 485);

        context.fillText(this.arrayNumbers[0], 500, 50);
        context.fillText(this.arrayNumbers[1], 500, 75);
        context.fillText(this.arrayNumbers[2], 500, 105);
        context.fillText(this.arrayNumbers[3], 500, 125);
        context.fillText(this.arrayNumbers[4], 500, 150);
        context.fillText(this.arrayNumbers[5], 500, 175);
        context.fillText(this.arrayNumbers[6], 500, 200);
        context.fillText(this.arrayNumbers[7], 500, 220);
        context.fillText(this.arrayNumbers[8], 500, 245);
        context.fillText(this.arrayNumbers[9], 495, 270);
        context.fillText(this.arrayNumbers[10], 495, 295);
        context.fillText(this.arrayNumbers[11], 495, 320);
        context.fillText(this.arrayNumbers[12], 495, 345);
        context.fillText(this.arrayNumbers[13], 495, 365);
        context.fillText(this.arrayNumbers[14], 495, 390);
        context.fillText(this.arrayNumbers[15], 495, 415);
        context.fillText(this.arrayNumbers[16], 495, 440);
        context.fillText(this.arrayNumbers[17], 495, 465);
        context.fillText(this.arrayNumbers[18], 495, 485);

        console.log('drawing numbers');

    };


};
