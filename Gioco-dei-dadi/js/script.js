
    

    let utenteNum = Math.floor(Math.random() *6 +1);
    let computerNum = Math.floor(Math.random() *6 +1);
    console.log(utenteNum)
    console.log(computerNum)
    if ( utenteNum > computerNum ){
        console.log(utenteNum + ' Hai vinto !!!');
    }else if(utenteNum < computerNum){
        console.log(computerNum + ' Hai perso !!!' );
    }else{
        console.log('Parità !!!');
    }
    
    
