Qualtrics.SurveyEngine.addOnload(function()
{
 
	function randomInt() {
		var randomVal = 0;
		if(Math.random() > 0.5) {
			randomVal = 1;
		}
		
		return randomVal;
	}
	
	
	var container_div = document.getElementById("container");
	this.hideNextButton();
	var button_next = this;
	var spinButton = document.getElementById("spin_button");
	var outcome = 0;
	var color = "Black";
	var bonus = "-5 ECU";
	var bet = "${q://QID96/SelectedChoicesRecode}";
	var url = "https://66.media.tumblr.com/0499fbe3eb156c144a3ddb59193b3161/tumblr_poh6gg6AQN1w00asco1_540.gif";
	var out = "You LOST";
	function spin(spinButton) {
		spinButton.onclick = function() {
			outcome = randomInt();
			if(outcome == 0) {
				color = "White";
				url = "https://66.media.tumblr.com/f0764694c429605a6158ff14d421ade2/tumblr_poh6rgy4jF1w00asco1_540.gif";
			}
			
		if(bet == outcome) {
			  bonus  = "+5 ECU";
			  out = "You WON";
			 }	
			   
			   
			var outcomeID =  color + "-spinner-wins-jpg"
			//https://tinyurl.com/Black-spinner-wins-jpg
			var outcomeURL = "https://tinyurl.com/" + outcomeID;
			Qualtrics.SurveyEngine.setEmbeddedData( 'outcomes1A', outcome);
			Qualtrics.SurveyEngine.setEmbeddedData( 'color1A', color);
			Qualtrics.SurveyEngine.setEmbeddedData( 'bonus1A', bonus);
			Qualtrics.SurveyEngine.setEmbeddedData( 'out1A', out);
			spinButton.setAttribute("disabled", "disabled")
			var spinURL = "https://i.imgur.com/hrwDdto.gif";
			var imgURL = "http://www.blacklivesmattersyllabus.com/wp-content/uploads/2017/08/large-white-background.jpg";
 			var time = 5000; //time in milliseconds
 			var c = document.getElementById("container");
 			//var spin = QBuilder('img',{src:spinURL});
			var spin = QBuilder('img',{src:imgURL});
 			var ic = QBuilder('div',{},[spin]);
		 	$(c).appendChild(ic);
		 	//(function(){
			//$(spin).hide();
		 //	$(spin).src = outcomeURL;
 			//}).delay(time/1000);
			//button_next.showNextButton();
			
			(function(){button_next.clickNextButton();}).delay(0.01);
				
				
 			//var time = 10000; //time in milliseconds
 			//var o = document.getElementById("container");
 			//var img = QBuilder('img',{src:imgURL});
 			//var ic2 = QBuilder('div',{},[img]);
		 	//c.appendChild(ic2);
			
		}
	}
	spin(spinButton);
});