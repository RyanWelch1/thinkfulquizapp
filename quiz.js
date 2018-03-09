// render quiz app ??

$(document).ready(function(){
    $('.quiz-questions').hide();
    $("#nextQuestion").hide();
});


// when user clicks submit button new layout with all questions will show 



// store questions and answers

const state = {
  correctAnswers: 0,
    
questions:[
{title: "In what year was the city of Dallas granted an NFL expansion franchise?",
 choices: [1960,1964,1958,1962],
 quesNum: 1,
 correctAns: 1960},
 

 {title: "Who was the first Dallas Cowyboy to win the NFL MVP Award?",
 choices: ["Emmit Smith","Randy White","Bob Lilly","Roger Staubach"],
 quesNum: 2,
 correctAns: "Emmit Smith"},

 {title: "What Dallas Cowboy holds the record passes to start a career without an incerption?",
 choices: ["Dak Prescott","Tony Romo","Roger Staubach","Troy Aikman"],
 quesNum: 3,
 correctAns: "Dak Prescott"},
    
 {title: "What Dallas Cowboys coach created the 'Flex Defense'?",
 choices: ["Jimmy Johnson","Bill Parcells","Tom Landry","Barry Switzer"],
 quesNum: 4,
 correctAns: "Tom Landry"},
    
 {title: "Who was the first Cowboys coach who didn't take team to Super Bowl",
 choices: ["Chan Gailey","Wade Phillips","Barry Switzer","Dave Campo"],
 quesNum: 5,
 correctAns: "Chan Gailey"},
 
 {title: "What was added to the Dallas Cowboy Logo in 1964?",
 choices: ["A Gray Circle","A White line & Border","The Word Cowboys","A Mustang"],
 quesNum: 6,
 correctAns: 1},
    
 {title: "In 2016, which Wide Reciever led the cowboys in receptions?",
 choices: ["Cole Beasley","Jason Witten","Ezeiel Elliot","Dez Bryant"],
 quesNum: 7,
 correctAns: "Cole Beasley"},
    
 {title: "What number did Jason Garrett wear as a Cowboy?",
 choices: [8,13,17,19],
 quesNum: 8,
 correctAns: 17},
    
 {title: "What team did Dallas defeat 52-17 in Super Bowl XXVII?",
 choices: ["Broncos","Steelers","Dolphins","Bills"],
 quesNum: 9,
 correctAns: "Bills"},
    
 {title: "How many consecutive winning seasons did the Dallas Cowboys have under Tom Landry?",
 choices: [20,16,12,8],
 quesNum: 10,
 correctAns: 20},
 ],
feedback: '',
currentQuestionIndex: 0,
}

$("#start").on("click", function (){
    event.preventDefault();
    $("#start-quiz").hide();
    $(".quiz-questions").show();
    renderQuestion();

});
// will render Question
function renderQuestion(){
    let question= state.questions[state.currentQuestionIndex];
    $(".questionTitle").text(question.title);
    
    //clear out previous questions and answers
    $(".choices").html("");
    
    question.choices.forEach(function(choice) {
        $(".choices").append(`<div class="answer-two">
                                  <label>
                                  <input type="radio" name="radio" value="${choice}"/>
                                    <span>${choice}</span>
                                  </label>
                             </div>`);
    }); 
};

 // this will listen for when user selects answer and clicks submits  
$("#submitUserGuess").on("click",function() {
    
    let checkedAnswer=$('input[name=radio]:checked').val();
      if (checkedAnswer) {
          
          if (checkedAnswer == (state.questions[state.currentQuestionIndex].correctAns)){
              $(".feedback").text("That is the correct answer");
              $("#submitUserGuess").hide();
              state.correctAnswers++;
              $(".answeredCorrectly").html(" You have answered " + state.correctAnswers + " correctly");
              $("#nextQuestion").show();
              $(".feedback").show();

          }
          else {
              $(".feedback").text("That is the incorrect answer. The correct answer is" + " " +(state.questions[state.currentQuestionIndex].correctAns) );
              $("#submitUserGuess").hide();
              $(".answeredCorrectly").html(" You have answered " + state.correctAnswers + " correctly");
              $("#nextQuestion").show();
              $(".feedback").show();
          }
      }
    
    else {
        alert("Please Select An Answer");
    }
});

// user clicks next question and will bring up next series of Q and A

$("#nextQuestion").on("click", function() {
    $(".feedback").hide();
    $("#submitUserGuess").show();
    $("#nextQuestion").hide();
    state.currentQuestionIndex.length;
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < 10) {
        renderQuestion();
}
   else {
    $('.quiz-questions').hide();
    $("#nextQuestion").hide();
         $("#quiz-results").append(`<div id="quiz-results">
                                    <h1> Quiz Results</h1>
                                    <h2> You Got </h2>
                                    ${state.correctAnswers}
                                    <h2> Correctly </h2>
                                    </div>`)
   }
    
});
    

    

// user will select answer from radio button 
//have event listener and update index property so it 

// if answer is correct details on answer will return



// if answer is wrong = it will tell user answer is wrong




// stats will be recorded based on how many questions user has gotten correct and what questions user is on



//user will submit to go to next questions


// on last question user can submit to finish quiz and will bring up new layout with quiz results



// results pages- user will see how well he or she did and have option to start over