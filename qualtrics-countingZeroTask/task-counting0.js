/* 
title: counting 0 task for BDS502 group C 
author: Jinyi Kuang
date: 2019-04-05
email: jkuang000@gmail.com 
note: the following JS is developed based on the task description provided by Michael at 2019-04-05
*/

//===========================================================
/*
No Punishment round(1-5 and 11-15) 
Requirement:
    - no time limit
    - correct range [-1,1]
    - reminder message before counting task
solution: we do not need JS
*/


//===========================================================
/*
Punishment round(6-10) 
Requirement:
    - no time limit
    - correct range [-1,1]
    - reminder message before counting task
    - message after each task if enter wrong number or skipping 
    - deduct amount
    - show initial amount and after amount being deducted 
*/



//display message 
Qualtrics.SurveyEngine.addOnReady(function() {
    

    // initiate score [ONLY put this in the first punishment task of each treatment]
    var initialECU = 50;
    Qualtrics.SurveyEngine.setEmbeddedData( 'lastECU', initialECU);
    
    // get updated ECU from previous response
    lastECU = Qualtrics.SurveyEngine.getEmbeddedData('lastECU');
    lastECU= parseInt(lastECU);

    this.hideNextButton();
    var fakeButton = document.getElementById("submit_button");

    //show alert when click the next button. 
    // jQuery("#NextButton").onclick = function (event) {
    function submit(fakeButton) {
            fakeButton.onclick = function() {    

        /* Everything in here will run when you click the next button. It has access to javascript variables from the enclosing function. However, if you declare something in here with "var" then it will be a LOCAL variable */
        
        // get question ID and input value
        
        var QID = this.questionId;
        var input = jQuery("QR~"+QID+" .InputText");
        var answer = parseInt(input.value);
        var solution = 59;
        var document.getElementsByName("zeroNumber")[0].value;

    
        // show message by condition
        
       if (answer == solution){
            currentECU = lastECU;
            alert("You have entered the correct number." +"\nYour current ECU is:" +  currentECU);
            
        } 
        if (answer == ""){
            currentECU = lastECU-7;
            alert("You have skipped the task." + "\n7 ECU will be deducted."+"\nYour previous ECU is:" + lastECU  + "\nYour current ECU is: \n" +  currentECU);
            
        } 
        else {
            currentECU = lastECU-7;
            alert("You have entered the wrong number." + "\n7 ECU will be deducted."+"\nYour previous ECU is:" +  lastECU +"\nYour previous ECU is:" +   currentECU );
            
        }
        jQuery('#NextButton').show();
    }
}
    submit(fakeButton);

        // updating ECU
        Qualtrics.SurveyEngine.setEmbeddedData('currentECU', currentECU);

    // run the event that the normal next button is supposed to do
       
    (function(){button_next.clickNextButton();}).delay(2);
});



//===========================================================
/*
Risky Punishment round(6-10) 
Requirement:
    - no time limit
    - correct range [-1,1]
    - reminder message before counting task
    - message after each task if enter wrong number or skipping 
    - deduct amount
    - show initial amount and after amount being deducted 
*/

Qualtrics.SurveyEngine.addOnload(function()
{
 
	function randomPunishment() {
		var randomValue = -5;
		if(Math.random() > 0.5) {
			randomValue = -9;
		}
		
		return randomValue;
	}


//===========================================================
/*
Uncertain Punishment round(6-10) 
Requirement:
    - no time limit
    - correct range [-1,1]
    - reminder message before counting task
    - message after each task if enter wrong number or skipping 
    - deduct amount
    - show initial amount and after amount being deducted 
*/


    Qualtrics.SurveyEngine.addOnload(function()
{
 
	function randomPunishment() {
		var randomValue = -5;
		if(Math.random() > 0.5) {
			randomValue = -9;
		}
		
		return randomValue;
    }
    


    function feedback() {

    }
