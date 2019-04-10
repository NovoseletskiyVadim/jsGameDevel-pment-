// Describes check prisoners 

import {arrayData} from '../model/DataGame.js';

export default class CheckPrisoners{

    constructor(territoryObj,arrX2){

        this.territoryObj=territoryObj;
        this.arrX2=arrX2;
        this.data=arrayData;

    };

    analysisPrisoners(territoryObj, arrX2){

        let that=this;


        if(this.territoryObj!=null || this.territoryObj!=undefined){

            var checkEnemyTerretory=this.territoryObj;
            checkEnemyTerretory.cheskBreath=false;

            const arr=this.arrX2;

            checkEnemyLeft(checkEnemyTerretory,arr,this.data);

            if(checkEnemyTerretory.cheskBreath==true){

                return checkEnemyTerretory;
            }
            else if(checkEnemyTerretory.cheskBreath==false){

                checkEnemykRight(checkEnemyTerretory,arr,this.data);

                if(checkEnemyTerretory.cheskBreath==true){

                    return checkEnemyTerretory;
                }
                else if(checkEnemyTerretory.cheskBreath==false){
    
                    checkEnemykUp(checkEnemyTerretory,arr,this.data)
    
                    if(checkEnemyTerretory.cheskBreath==true){
    
                        return checkEnemyTerretory;
                    }
                    else if(checkEnemyTerretory.cheskBreath==false){
                        
                       
                        checkEnemyDown(checkEnemyTerretory,arr,this.data);

                        if(checkEnemyTerretory.cheskBreath==true){
    
                            return checkEnemyTerretory;
                        }
                        else if(checkEnemyTerretory.cheskBreath==false){

                            // FIXME: что вернется в систему после проверки 
                            // console.log('situation!!!');
                            // checkEnemyTerretory.stateTerritory=0;
                            // console.dir(checkEnemyTerretory);
                            return checkEnemyTerretory;

                        };

                    };
                };
               
            };
        }
        else{

            var checkEnemyTerretory=territoryObj;
            checkEnemyTerretory.cheskBreath=false;
            const arr=arrX2;

            checkEnemyLeft(checkEnemyTerretory,arr,this.data);

            if(checkEnemyTerretory.cheskBreath==true){

                return checkEnemyTerretory;
            }
            else if(checkEnemyTerretory.cheskBreath==false){

                checkEnemykRight(checkEnemyTerretory,arr,this.data);

                if(checkEnemyTerretory.cheskBreath==true){

                    return checkEnemyTerretory;
                }
                else if(checkEnemyTerretory.cheskBreath==false){
    
                    checkEnemykUp(checkEnemyTerretory,arr,this.data)
    
                    if(checkEnemyTerretory.cheskBreath==true){
    
                        return checkEnemyTerretory;
                    }
                    else if(checkEnemyTerretory.cheskBreath==false){
                        
                       
                        checkEnemyDown(checkEnemyTerretory,arr,this.data);

                        if(checkEnemyTerretory.cheskBreath==true){
    
                            return checkEnemyTerretory;
                        }
                        else if(checkEnemyTerretory.cheskBreath==false){

                                // FIXME: что вернется в систему после проверки 
                                // console.log('situation!!!');
                                // checkEnemyTerretory.stateTerritory=0;
                                 // console.dir(checkEnemyTerretory);
                            return checkEnemyTerretory;

                        };

                    };
                };
               
            };
        };

        // ++++++++++++++++++  check Enemy UP DOWN  RIGHT LEFT  +++++++++++++++++++++

        function checkEnemyLeft (currentObj, arrX2, data){
            
            // console.log('function checkEnemyLeft');

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

                if(checkEnemyTerretory.cheskBreath==true){

                    break;

                }
                else{

                    if(arr[a][j].stateTerritory==0){

                        checkObj.cheskBreath=true;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==checkObj.stateTerritory){
                        
                        checkNeighborUp(arr[a][j],arrX2, mydata);
                        
                        if(checkEnemyTerretory.cheskBreath==true){
                            
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
    
                            checkNeighborDown(arr[a][j],arrX2, data);
    
                            if(checkEnemyTerretory.cheskBreath==true){
                            
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
            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
            };

            
        };

        function checkEnemykRight(currentObj, arrX2, data){

            // console.log('function checkEnemykRight');

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

                if(checkEnemyTerretory.cheskBreath==true){

                    break;

                }
                else{
                    if(arr[a][j].stateTerritory==0){

                        checkObj.cheskBreath=true;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[a][j].stateTerritory==checkObj.stateTerritory){
                        
                        checkNeighborUp(arr[a][j],arrX2, data);
                        
    
                        if(checkEnemyTerretory.cheskBreath==true){
                            
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
    
                            checkNeighborDown(arr[a][j],arrX2, data);
    
                            if(checkEnemyTerretory.cheskBreath==true){
                            
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

            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        };

        function checkEnemykUp(currentObj, arrX2,data){

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

                if(checkEnemyTerretory.cheskBreath==true){

                    break;

                }
                else{
                
                    if(arr[i][b].stateTerritory==0){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[i][b].stateTerritory==enemyTerritory){

                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[i][b].stateTerritory==checkObj.stateTerritory){
                        
                        checkNeighborRight(arr[i][b],arrX2, mydata);
                        
                        if(checkEnemyTerretory.cheskBreath==true){
                            
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
                            checkNeighborLeft(arr[i][b],arrX2, mydata);

                            if(checkEnemyTerretory.cheskBreath==true){
                            
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
            

            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
            };
        }; 

        function checkEnemyDown(currentObj, arrX2, data){
            
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

                if(checkEnemyTerretory.cheskBreath==true){

                    break;

                }
                else{

                    if(arr[i][b].stateTerritory==0){

                        checkObj.cheskBreath=true;
                        break;           
                    }
                    else if(arr[i][b].stateTerritory==enemyTerritory){
    
                        checkObj.cheskBreath=false;
                        break;
                    }
                    else if(arr[i][b].stateTerritory==checkObj.stateTerritory){
    
                        checkNeighborRight(arr[i][b],arrX2, mydata);

                        if(checkEnemyTerretory.cheskBreath==true){
                        
                            checkObj.cheskBreath=true;
                            break;
                        }
                        else{
                            checkNeighborLeft(arr[i][b],arrX2, mydata);
    
                            if(checkEnemyTerretory.cheskBreath==true){
                            
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

            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
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

                if(checkEnemyTerretory.cheskBreath==true){

                    break;
                }
                else{

                    if(arr[i][b].stateTerritory==0){

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
            
            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
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

                if(checkEnemyTerretory.cheskBreath==true){

                    break;
                }else{

                    if(arr[i][b].stateTerritory==0){

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
            
            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
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
    

            if(b<18){


                for(let j=b+1; j<mydata.cols;j++){


                    if(checkEnemyTerretory.cheskBreath==true){
    
                        break;
                    }
                    else{
    
                        if(arr[a][j].stateTerritory==0){
    
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
    
                if(checkEnemyTerretory.cheskBreath==false){
                    checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
                };


                
            }
            else{

               
                checkEnemyTerretory.cheskBreath=false;
            };

            

        };

        function checkNeighborLeft(checkObjUp,arrX2,data){


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


                if(checkEnemyTerretory.cheskBreath==true){

                    break;
                }
                else{

                    if(arr[a][j].stateTerritory==0){

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

            
            if(checkEnemyTerretory.cheskBreath==false){
                checkEnemyTerretory.cheskBreath=checkObj.cheskBreath;  
            };


        };


    };//END METHOD  'CheckPrisoners'

};