// Grading App v1.0
var $;

$( document ).ready(function() {

// establish array to get values from user input
  var gradesLabel=["grade1","grade2","grade3","grade4","grade5","grade6"];
  var cGradesLabel=["cGrade1","cGrade2","cGrade3","cGrade4","cGrade5","cGrade6"];
  var finalGrade = [];
  var num = 0;
  
// when button clicked
  $( "#btnSubmit" ).click(function() {

  	// for loop to move through array
  for (var i=0; i < gradesLabel.length; i++) {

  	var grade = document.getElementById(gradesLabel[i]).value;

  	 // Grade scale
   if (grade >= 90) {
		finalGrade[i] = "A";
	} else if (grade >= 80) {
		finalGrade[i] = "B";
	} else if (grade >= 70) {
		finalGrade[i] = "C";
	} else {
		finalGrade[i] = "F";
	}
	// display letter grade for user's input
	document.getElementById(cGradesLabel[i]).value = finalGrade[i];

	
	// calculate average
	num = num + parseInt(document.getElementById(gradesLabel[i]).value);
	average = Math.round(num / gradesLabel.length);

	 // Grade scale to get letter grade for average
   if (average >= 90) {
		finalAverage = "A";
	} else if (average >= 80) {
		finalAverage = "B";
	} else if (average >= 70) {
		finalAverage[i] = "C";
	} else {
		finalAverage = "F";
	}

	// display average and letter grade
	document.getElementById("average").value = average;
	document.getElementById("cAverage").value = finalAverage;
	
  }

	});
});


