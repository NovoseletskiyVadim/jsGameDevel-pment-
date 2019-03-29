



export default class PassHandler{

    constructor(){

        this.move=document.getElementById('pass');
    }


    movePass(){

        let that=this;

        this.move.onclick=function(){

            console.log('click pass');

        }



    }
}