const quizQA=
[

	{
		question: "Q.1 Nobel prize is awarded for which of the following disciplines:",

		a: "Literature, peace and economics",
		b: "Medicine or Physiology",
		c: "Chemistry and Physics",
		d: "All the above",
		ans: "ans4"
	},

	{
		question: "Q.2 Which country operationalized world’s largest radio telescope?",

		a: "USA",
		b: "China",
		c: "Russia",
		d: "India",
		ans: "ans2"
	},
	
	{
		question: "Q.3 Katerina Sakellaropoulou was elected the first woman President of",

		a: "Greece",
		b: "Spain",
		c: "Finland",
		d: "Netherland",
		ans: "ans1"
	},

	{
		question: "Q.4 Which one among the following radiations carries maximum energy?",

		a: "Ultraviolet rays",
		b: "Gamma rays",
		c: "X- rays",
		d: "Infra-red rays",
		ans: "ans2"
	},

	{
		question: "Q.5 What is India’s rank on EIU’s Global Democracy Index 2019?",

		a: "48th Rank",
		b: "50th Rank",
		c: "53rd Rank",
		d: "51st Rank",
		ans: "ans4"
	}



];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
	
	const questionList = quizQA[questionCount];
	question.innerHTML = questionList.question;
	option1.innerHTML = questionList.a;
	option2.innerHTML = questionList.b;
	option3.innerHTML = questionList.c;
	option4.innerHTML = questionList.d;
}

loadQuestion();

function getcheckAnswer() {
	let answer;
	
	answers.forEach((curAnsEl) => {
		if (curAnsEl.checked) {
			answer = curAnsEl.id;
		}
	})
	return answer;

}
const deselectAll = () => {
	answers.forEach((curAnsEl) => curAnsEl.checked = false);
}

submit.addEventListener('click', () => {
	const checkedAnswer = getcheckAnswer();
	console.log(checkedAnswer);
	
	if (checkedAnswer == quizQA[questionCount].ans) {
		score++;
	}
	questionCount++
	deselectAll();
	if (questionCount < quizQA.length) {
		loadQuestion();
	}else{
		showScore.innerHTML = `
		<h3> Your score is ${score}/${quizQA.length} </h3>
		<button class="btn" onclick="location.reload()"> Play Again </button>
		`;
		showScore.style.display = "block";
	}
	
})