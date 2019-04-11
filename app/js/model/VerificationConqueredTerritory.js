
// Describes verification of conquered territory
import {arrayData}  from './DataGame.js';
import SaveMoveChange from './SaveMoveChanges.js';



export default class VerificationConqueredTerritory{


    constructor(objectsArray){

        this.data=arrayData;
        this.objectsArray=objectsArray;
        this.saveMoveChange=new SaveMoveChange();


    };


    verificationConqueredTerritory(objectsArray){

        if(this.objectsArray!=null||this.objectsArray!=undefined){

            let arr=objectsArray;

            for(let i=0; i<this.data.rows;i++) {

                for(let j=0; j<this.data.cols;j++){

                    if(arr[i][j].stateTerritory=='black'|| arr[i][j].stateTerritory=='white'){

                        continue;

                    }
                    else{

                        let up=checkUp(arr[i][j], arr);
                        
                        // console.log('territory result='+up);

                        let down=checkDown(arr[i][j], arr,this.data);

                        // console.log('territory result='+down);

                        let right=checkRight(arr[i][j], arr,this.data);

                        // console.log('territory result='+right);

                        let left =checkLeft(arr[i][j], arr);

                        // console.log('territory result='+left);

                        let checkTerritory=[]
                        let blackTerritory=0;
                        let whiteTerritory=0;

                        checkTerritory.push(up,down,right,left);

                        for(let i=0; i<checkTerritory.length;i++){

                            if(checkTerritory[i]=='blackTerritory'){
                                
                                blackTerritory+=1;
                            }
                            else if(checkTerritory[i]=='whiteTerritory'){
                                
                                whiteTerritory+=1;
                            }
                            else{
                                continue;
                            };

                        };

                        let finishCheckResult=0;

                        if(blackTerritory>whiteTerritory){
                            
                            finishCheckResult='blackTerritory';
                        }
                        else if (whiteTerritory>blackTerritory){

                            finishCheckResult='whiteTerritory';

                        };

                        let saveResultObject=arr[i][j].stateTerritory=finishCheckResult;

                        this.saveMoveChange.saveChangeObject(saveResultObject);
                    };

                } ;
            } ; 
            
        }
        else{
           
            let arr=objectsArray;


            for(let i=0; i<this.data.rows;i++) {

                for(let j=0; j<this.data.cols;j++){

                    if(arr[i][j].stateTerritory=='black'|| arr[i][j].stateTerritory=='white'){

                        continue;

                    }
                    else{

                        let up=checkUp(arr[i][j], arr);
                        let down=checkDown(arr[i][j], arr,this.data);
                        let right=checkRight(arr[i][j], arr,this.data);
                        let left =checkLeft(arr[i][j], arr);

                        let checkTerritory=[];
                        let blackTerritory=0;
                        let whiteTerritory=0;

                        checkTerritory.push(up,down,right,left);

                        for(let i=0; i<checkTerritory.length;i++){

                            if(checkTerritory[i]=='blackTerritory'){
                                
                                blackTerritory+=1;
                            }
                            else if(checkTerritory[i]=='whiteTerritory'){
                                
                                whiteTerritory+=1;
                            }
                            else{
                                continue;
                            };

                        };

                        let finishCheckResult=3;

                        if(blackTerritory>whiteTerritory){
                            
                            finishCheckResult=1;
                        }
                        else if (whiteTerritory>blackTerritory){

                            finishCheckResult=2;

                        };

                        arr[i][j].stateTerritory=finishCheckResult
                        let saveResultObject=arr[i][j];

                        

                        this.saveMoveChange.saveChangeObject(saveResultObject);
                    };

                };
            }; 
            

        };

        function checkUp(currentObj, arrX2){

            // console.warn('function checkUp territory');

            const checkObj=currentObj;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let territory=null;
           
    
           
    
    
            for(let i=a-1; i>=0;i--){
                
                

                if(arr[i][b].stateTerritory=='black'){
                    
                    territory='blackTerritory';
                    break;

                }
                else if (arr[i][b].stateTerritory=='white'){
                
                    territory='whiteTerritory';
                    break;
                }
                else{

                    territory=0;
                };
                
            };
            
            // console.log(' check  UP  territory='+territory);
            return territory;
            
        }; 


        function checkDown(currentObj, arrX2, data){
        
            // console.log('function checkDown');

            const checkObj=currentObj;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let territory=null;
            const mydata=data;
           
    
    
            for(let i=a+1; i<mydata.rows;i++){

                
                if(arr[i][b].stateTerritory=='black'){
                    
                    territory='blackTerritory';
                    break;

                }
                else if (arr[i][b].stateTerritory=='white'){
                
                    territory='whiteTerritory';
                    break;
                }
                else{

                    territory=0;
                };
                
                
            };

            // console.log(' check  DOWN  territory='+territory);
           return territory;
            
        };

        function checkRight(currentObj, arrX2, data){

            // console.log('function checkRight');

            const checkObj=currentObj;
            const arr=arrX2;
            const mydata = data;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let territory=null;
    
    
            
            for(let j=b+1; j<mydata.cols;j++){

                if(arr[a][j].stateTerritory=='black'){
                    
                    territory='blackTerritory';
                    break;

                }
                else if (arr[a][j].stateTerritory=='white'){
                
                    territory='whiteTerritory';
                    break;
                }
                else{

                    territory=0;
                };
              

               
            };

            // console.log(' check  RIGHT  territory='+territory);                
            return territory;
        };

        function checkLeft (currentObj, arrX2){
        
            // console.log('function checkLeft');

            const checkObj=currentObj;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let territory=null;
    
    
           
            
            for(let j=b-1; j>=0;j--){

                if(arr[a][j].stateTerritory=='black'){
                    
                    territory='blackTerritory';
                    break;

                }
                else if (arr[a][j].stateTerritory=='white'){
                
                    territory='whiteTerritory';
                    break;
                }
                else{

                    territory=0;
                };
                
                
            };

            // console.log(' check  LEFT  territory='+territory);                

            return territory;
           
        };


    };

};
