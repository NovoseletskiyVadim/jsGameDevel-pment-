
// Describes  create "select" for section "make a move"

export default class CreateSelect{
    
    constructor(arrayData){

        this.letters=arrayData.fieldLetters;
        this.numbers=arrayData.fieldNumbers;

    };

    createSelectLetters(){

        let select=document.getElementById('lettersSelect');

        for(let i=0; i<this.letters.length; i++){
    
            let newOption=document.createElement('option');
            newOption.setAttribute('value',this.letters[i]);
            newOption.innerText=this.letters[i];
            select.appendChild(newOption);


        };


    };

    createSelectNumbers(){

        let select = document.getElementById('numbersSelect');

        for(let i=0; i<this.numbers.length; i++){

            let newOption=document.createElement('option');
            newOption.setAttribute('value',this.numbers[i]);
            newOption.innerText=this.numbers[i];
            select.appendChild(newOption);


        };

    };

};

