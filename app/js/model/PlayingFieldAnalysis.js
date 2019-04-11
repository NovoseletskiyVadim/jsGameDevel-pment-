// Describes playing field analysis

import {arrayData}  from './DataGame.js';

export default class PlayingFieldAnalysis{

    constructor(territoryObj,arrX2){

        this.territoryObj=territoryObj;
        this.arrX2=arrX2;
        this.data=arrayData;

    };

    

    analysisSyiside(territoryObj, arrX2){

        let that=this;

        
        if(this.territoryObj!=null || this.territoryObj!=undefined){

            var currentCheckTerretory=this.territoryObj;
            const arr=this.arrX2;
            
            

            checkLeft(currentCheckTerretory,arr,this.data);


            if(currentCheckTerretory.cheskBreath==true){

                return currentCheckTerretory;
            }
            else if(currentCheckTerretory.cheskBreath==false){

                checkRight(currentCheckTerretory,arr,this.data);

                if(currentCheckTerretory.cheskBreath==true){

                    return currentCheckTerretory;
                }
                else if(currentCheckTerretory.cheskBreath==false){
    
                    checkUp(currentCheckTerretory,arr,this.data)
    
                    if(currentCheckTerretory.cheskBreath==true){
    
                        return currentCheckTerretory;
                    }
                    else if(currentCheckTerretory.cheskBreath==false){
                        
                       
                        checkDown(currentCheckTerretory,arr,this.data);

                        if(currentCheckTerretory.cheskBreath==true){
    
                            return currentCheckTerretory;
                        }
                        else if(currentCheckTerretory.cheskBreath==false){

                            // console.log('situation!!!')
                            currentCheckTerretory.stateTerritory=0;
                            // console.dir(currentCheckTerretory);
                            return currentCheckTerretory;

                        };

                    };
                };
               
            };

        }
        else{

            var currentCheckTerretory=territoryObj;
            const arr=arrX2;
            
            

            checkLeft(currentCheckTerretory,arr,this.data);


            if(currentCheckTerretory.cheskBreath==true){

                return currentCheckTerretory;
            }
            else if(currentCheckTerretory.cheskBreath==false){

                checkRight(currentCheckTerretory,arr,this.data);

                if(currentCheckTerretory.cheskBreath==true){

                    return currentCheckTerretory;
                }
                else if(currentCheckTerretory.cheskBreath==false){
    
                    checkUp(currentCheckTerretory,arr,this.data)
    
                    if(currentCheckTerretory.cheskBreath==true){
    
                        return currentCheckTerretory;
                    }
                    else if(currentCheckTerretory.cheskBreath==false){
                        
                       
                        checkDown(currentCheckTerretory,arr,this.data);

                        if(currentCheckTerretory.cheskBreath==true){
    
                            return currentCheckTerretory;
                        }
                        else if(currentCheckTerretory.cheskBreath==false){

                            // console.log('situation!!!')
                            currentCheckTerretory.stateTerritory=0;
                            // console.dir(currentCheckTerretory);
                            return currentCheckTerretory;

                        };

                    };
                };
               
            };
            
            
        };
        // ++++++++++++++++++  check UP DOWN  RIGHT LEFT  +++++++++++++++++++++

        function checkUp(currentObj, arrX2,data){

            // console.log('function checkUp');

            const checkObj=currentObj;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata=data;
           
    
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            }
    
    
            for(let i=a-1; i>=0;i--){
                
                

                if(currentCheckTerretory.cheskBreath==true){

                    break;

                }
                else{
                
                    if(
                        arr[i][b].stateTerritory==0 ||
                        arr[i][b].stateTerritory==1 ||
                        arr[i][b].stateTerritory==2 ||
                        arr[i][b].stateTerritory==3 
                    ){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[i][b].stateTerritory==enemyTerritory){

                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[i][b].stateTerritory==checkObj.stateTerritory){
                        
                        checkNeighborRight(arr[i][b],arrX2, mydata);
                        
                        if(currentCheckTerretory.cheskBreath==true){
                            
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
                            checkNeighborLeft(arr[i][b],arrX2, mydata);

                            if(currentCheckTerretory.cheskBreath==true){
                            
                                checkObj.cheskBreath=true;
                                break;
                            }
                            else{
                                checkObj.cheskBreath=false;
                                continue;
                            };
                            
                        };

                        
                    };
                };
                
            };
            

            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        }; 
       
        function checkDown(currentObj, arrX2, data){
            
            // console.log('function checkDown');

            const checkObj=currentObj;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata=data;
           
    
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            }
    
    
            for(let i=a+1; i<mydata.rows;i++){

                if(currentCheckTerretory.cheskBreath==true){

                    break;

                }
                else{

                    if( 
                        arr[i][b].stateTerritory==0 ||
                        arr[i][b].stateTerritory==1 ||
                        arr[i][b].stateTerritory==2 ||
                        arr[i][b].stateTerritory==3
                    ){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[i][b].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[i][b].stateTerritory==checkObj.stateTerritory){
    
                        checkNeighborRight(arr[i][b],arrX2, mydata);

                        if(currentCheckTerretory.cheskBreath==true){
                        
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
                            checkNeighborLeft(arr[i][b],arrX2, mydata);
    
                            if(currentCheckTerretory.cheskBreath==true){
                            
                                checkObj.cheskBreath=true;
                                break;
                            }
                            else{
                                checkObj.cheskBreath=false;
                                continue;
                            };
                            
                        };
                        
                    };

                };
                
            };

            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
            
            
        };

        function checkRight(currentObj, arrX2, data){

            // console.log('function checkRight');

            const checkObj=currentObj;
            const arr=arrX2;
            const mydata = data;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
    
    
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            }
            
            for(let j=b+1; j<mydata.cols;j++){

                if(currentCheckTerretory.cheskBreath==true){

                    break;

                }
                else{
                    if( 
                        arr[a][j].stateTerritory==0 ||
                        arr[a][j].stateTerritory==1 ||
                        arr[a][j].stateTerritory==2 ||
                        arr[a][j].stateTerritory==3   
                    ){

                        checkObj.cheskBreath=true;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==checkObj.stateTerritory){
                        
                        checkNeighborUp(arr[a][j],arrX2, data);
                        
    
                        if(currentCheckTerretory.cheskBreath==true){
                            
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
    
                            checkNeighborDown(arr[a][j],arrX2, data);
    
                            if(currentCheckTerretory.cheskBreath==true){
                            
                                checkObj.cheskBreath=true;
                                break;
                            }
                            else{
                                
                                continue;
                            };
                        };
                    };
                };

               
            };

            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        };

        function checkLeft (currentObj, arrX2, data){
            
            // console.log('function checkLeft');

            const checkObj=currentObj;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata =data; 
    
    
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            }
            
            for(let j=b-1; j>=0;j--){

                if(currentCheckTerretory.cheskBreath==true){

                    break;

                }
                else{

                    if(
                        arr[a][j].stateTerritory==0 ||
                        arr[a][j].stateTerritory==1 ||
                        arr[a][j].stateTerritory==2 ||
                        arr[a][j].stateTerritory==3 
                    ){

                        checkObj.cheskBreath=true;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==checkObj.stateTerritory){
                        
                        checkNeighborUp(arr[a][j],arrX2, mydata);
                        
                        if(currentCheckTerretory.cheskBreath==true){
                            
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
    
                            checkNeighborDown(arr[a][j],arrX2, data);
    
                            if(currentCheckTerretory.cheskBreath==true){
                            
                                checkObj.cheskBreath=true;
                                break;
                            }
                            else{
                                
                                continue;
                            };
                        };
                    };

                };
                
                
                
            };

            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        };

        // ++++++++++++++++++  check Neighbor UP DOWN  RIGHT LEFT  +++++++++++++++++++++


        function checkNeighborUp(checkObjUp,arrX2,data){

            // console.log(' function checkNeighborUp');

            const checkObj=checkObjUp;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata=data;
           
    
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            }
    
    
            for(let i=a; i>=0;i--){

                if(currentCheckTerretory.cheskBreath==true){

                    break;
                }
                else{

                    if(
                        arr[i][b].stateTerritory==0 ||
                        arr[i][b].stateTerritory==1 ||
                        arr[i][b].stateTerritory==2 ||
                        arr[i][b].stateTerritory==3 
                    ){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[i][b].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[i][b].stateTerritory==checkObj.stateTerritory){
                        
                        checkObj.cheskBreath=false;
                        continue;
                    };
                };
                
            };
            
            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };

        };

        function checkNeighborDown(checkObjUp,arrX2,data){

            // console.log(' function checkNeighborDown');

            const checkObj=checkObjUp;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata=data;

            
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            };
    
    
            for(let i=a; i<mydata.rows;i++){

                if(currentCheckTerretory.cheskBreath==true){

                    break;
                }else{

                    if(
                        arr[i][b].stateTerritory==0 ||
                        arr[i][b].stateTerritory==1 ||
                        arr[i][b].stateTerritory==2 ||
                        arr[i][b].stateTerritory==3 
                    ){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[i][b].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[i][b].stateTerritory==checkObj.stateTerritory){
                        
                        checkObj.cheskBreath=false;
                        continue;
                    };
                };
                
                
            };
            
            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        };

        function checkNeighborRight(checkObjUp,arrX2,data){
            
            // console.log(' function checkNeighborRight');

            const checkObj=checkObjUp;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata=data;

            
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            };
    
    
            for(let j=b+1; j<mydata.cols;j++){

                if(currentCheckTerretory.cheskBreath==true){

                    break;
                }
                else{

                    if(
                        arr[a][j].stateTerritory==0 ||
                        arr[a][j].stateTerritory==1 ||
                        arr[a][j].stateTerritory==2 ||
                        arr[a][j].stateTerritory==3 
                    ){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[a][j].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==checkObj.stateTerritory){
                        
                        checkObj.cheskBreath=false;
                        continue;
                    };
                };
                
                
            };
            
            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        };

        function checkNeighborLeft(checkObjUp,arrX2,data){

            // console.log(' function checkNeighborLeft');

            const checkObj=checkObjUp;
            const arr=arrX2;
            let a=checkObj.arr_i; 
            let b=checkObj.arr_j;
            let enemyTerritory=null;
            const mydata=data;

            
            if(checkObj.stateTerritory=='black'){
    
                enemyTerritory='white';

            }
            else{
    
                enemyTerritory='black';
            };
    
    
            for(let j=b-1; j>=0;j--){

                if(currentCheckTerretory.cheskBreath==true){

                    break;
                }
                else{

                    if(
                        arr[a][j].stateTerritory==0 ||
                        arr[a][j].stateTerritory==1 ||
                        arr[a][j].stateTerritory==2 ||
                        arr[a][j].stateTerritory==3 
                    ){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[a][j].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==checkObj.stateTerritory){
                        
                        checkObj.cheskBreath=false;
                        continue;
                    };
                };
                
            };
            
            if(currentCheckTerretory.cheskBreath==false){
                currentCheckTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        };




    };//END METHOD  'analysisSyiside'

};

