/* 
title: counting 0 task - certain punishement for BDS502 group C 
author: Jinyi Kuang
date: 2019-04-05
email: jkuang000@gmail.com 
note: the following JS is developed based on the task description provided by Michael at 2019-04-05
*/

//===========================================================
/*
Punishment round(6) 
open js, clean existing code, add the following code 
*/
Qualtrics.SurveyEngine.addOnReady(function() {
    
    this.hideNextButton();
    var fakeButton = document.getElementById("submit_button");

    // initiate score [ONLY put this in round 6]
    var lastECU = 50;
    var currentECU = 0;
    
    lastECU= parseInt(lastECU);
    
    //show alert when click the fake button. 
    // jQuery("#NextButton").onclick = function (event) {
    function submit(fakeButton) {
            fakeButton.onclick = function() { 
                console.log('fakeButton was clicked');   

        /* Everything in here will run when you click the next button. It has access to javascript variables from the enclosing function. However, if you declare something in here with "var" then it will be a LOCAL variable */
        
        // get question ID and input value
        var QID = this.questionId;
        var input = document.getElementById("zeroNumber").value;
        var answer = parseInt(input);
        var solution = 59;
    
        // show message by condition
       if (Math.abs(answer - solution)<2){
            currentECU = lastECU;
            alert("You have entered the correct number." +"\nYour current ECU is:" +  currentECU);
            
        } 
        else if (answer == ""){
            currentECU = lastECU-7;
            alert("You have skipped the task." + "\n7 ECU will be deducted."+"\nYour previous ECU is:" + lastECU  + "\nYour current ECU is: \n" +  currentECU);
            
        } 
        else {
            currentECU = lastECU-7;
            alert("You have entered the wrong number." + "\n7 ECU will be deducted."+"\nYour previous ECU is:" +  lastECU +"\nYour current ECU is:" +   currentECU );
            
        }
        jQuery('#NextButton').show();
        
        Qualtrics.SurveyEngine.setEmbeddedData("lastECU", currentECU);

        console.log('currentECU was updated' + currentECU); 

        // auto advance to next page
        if($('NextButton')){$('NextButton').show();
        $('NextButton').click();}


    }
}
    submit(fakeButton);

 
   
});


//===========================================================
/*
Punishment round(7-10) 
open js, clean existing code, add the following code 
*/

Qualtrics.SurveyEngine.addOnReady(function() {
    
    this.hideNextButton();
    var fakeButton = document.getElementById("submit_button");
    var currentECU = 0;
    
    // get updated ECU from last response for round 7-10
    var lastECU = Qualtrics.SurveyEngine.getEmbeddedData('lastECU');
    lastECU= parseInt(lastECU);
    
    //show alert when click the fake button. 
    // jQuery("#NextButton").onclick = function (event) {
    function submit(fakeButton) {
            fakeButton.onclick = function() { 
                console.log('fakeButton was clicked');   

        /* Everything in here will run when you click the next button. It has access to javascript variables from the enclosing function. However, if you declare something in here with "var" then it will be a LOCAL variable */
        
        // get question ID and input value
        var QID = this.questionId;
        var input = document.getElementById("zeroNumber").value;
        var answer = parseInt(input);
        var solution = 59;
    
        // show message by condition
       if (Math.abs(answer - solution)<2){
            currentECU = lastECU;
            alert("You have entered the correct number." +"\nYour current ECU is:" +  currentECU);
            
        } 
        else if (answer == ""){
            currentECU = lastECU-7;
            alert("You have skipped the task." + "\n7 ECU will be deducted."+"\nYour previous ECU is:" + lastECU  + "\nYour current ECU is: \n" +  currentECU);
            
        } 
        else {
            currentECU = lastECU-7;
            alert("You have entered the wrong number." + "\n7 ECU will be deducted."+"\nYour previous ECU is:" +  lastECU +"\nYour current ECU is:" +   currentECU );
            
        }
        
        
        // update ECU
        Qualtrics.SurveyEngine.setEmbeddedData("lastECU", currentECU);

        console.log('currentECU was updated' + currentECU); 

        // auto advance to next page
        jQuery('#NextButton').show();
        if($('NextButton')){$('NextButton').show();
        $('NextButton').click();}


    }
}
    submit(fakeButton);

 
   
});



