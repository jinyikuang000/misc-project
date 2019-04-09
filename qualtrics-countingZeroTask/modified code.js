/*
No punishment round 1
*/
Qualtrics.SurveyEngine.addOnReady(function() {
    
    this.hideNextButton();
    var fakeButton = document.getElementById("submit_button");

    // initiate scores
    var lastECU = 50;
    var currentECU = 50;
	var lastCharity = 0;
	var currentCharity = 0; 
    
    
    
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
        var solution = 8;
				function isEmpty(str){
    return !str.replace(/\s+/, '').length;
}

    
        // show message by condition
				
   if( isEmpty(input)  ){
	   currentECU = lastECU;
			alert("You skipped the task." +"\nYour current ECU is: "  +  currentECU +"\nYou earned " +lastCharity+  " cents for UNICEF.");
            
  console.log( "not input any value" );
   }
				

      
				else if (answer == solution || answer == 7 || answer == 9){
            currentECU = lastECU;
		   currentCharity = lastCharity +3; 
		   alert("You entered the correct number of zeros." +"\nYour current ECU is: "  +  currentECU +"\nYou earned " + currentCharity+  " cents for UNICEF." );
         
        }
				 
        else {
           currentECU = lastECU;
			alert("You entered the wrong number of zeros." +"\nYour current ECU is: "  +  currentECU +"\nYou earned " +lastCharity+  " cents for UNICEF.");
            
        }
				
        //update count
        Qualtrics.SurveyEngine.setEmbeddedData("lastECU", currentECU);
        console.log('currentECU was updated' + currentECU); 
				
		Qualtrics.SurveyEngine.setEmbeddedData("lastCharity", currentCharity);
        console.log('currentCharity was updated' + currentCharity); 

        // auto advance to next page
jQuery('#NextButton').show();
              // auto advance to next page
        if($('NextButton')){$('NextButton').show();
        $('NextButton').click();}


    }
}
    submit(fakeButton);

 
   
});