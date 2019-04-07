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
    var container_div = document.getElementById("container");
	this.hideNextButton();
	var button_next = this;
    // initiate score [ONLY put this in the first punishment task of each treatment]
    var currentECU = 50;
    Qualtrics.SurveyEngine.setEmbeddedData( 'currentECU', currentECU);
    
    // get updated ECU from previous response
    currentECU = Qualtrics.SurveyEngine.getEmbeddedData('currentECU');

    // get question ID
    var currentQuestionID = this.getQuestionInfo().QuestionID;
    this.hideNextButton();
    var fakeButton = document.getElementById("submit_button");
    
    //show alert when click the fake button. 
    function submit(fakeButton) {
        fakeButton.onclick = function() {


        /* Everything in here will run when you click the next button. It has access to javascript variables from the enclosing function. However, if you declare something in here with "var" then it will be a LOCAL variable */
        
        // Save the current question's input value
        var responseTextField = document.getElementById(currentQuestionID + '~1~result');
        var answer = responseTextField.value;
        var solution = 59;
    
        // show message by condition
        if (Math.abs(answer - solution) > 1){
            currentECU = currentECU-7;
            alert("You have entered the wrong number." + "\n7 ECU will be deducted.\n"+"Your current ECU is:\n" + "{e://Field/" + currentECU + "}");
        } 
        else if (answer == ""){
            alert("You have skipped the task." + "\n7 ECU will be deducted.\n"+"Your previous ECU is:\n" + "{e://Field/" + currentECU + "}" + "Your current ECU is: \n" + "{e://Field/" + currentECU -7 + "}");
            currentECU = currentECU-7;
        } 
        else {
            currentECU = currentECU;
            alert("You have entered the correct number." +"Your current ECU is:\n" + "{e://Field/" + currentECU + "}");
        }

        // updating ECU
        Qualtrics.SurveyEngine.setEmbeddedData('currentECU', currentECU);

        function(){this.clickNextButton();}).delay(5);
    // run the event that the normal next button is supposed to do

    }
}

submit(fakeButton);

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
