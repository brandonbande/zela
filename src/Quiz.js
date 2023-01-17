import React, { useState } from 'react';
  const questions = [
    {
        question: "What is the main cause of deforestation?",
        answerOptions: [
            {answerText: "Urbanization", isCorrect: false},
            {answerText: "Agriculture", isCorrect: true},
            {answerText: "Industrialization", isCorrect: false},
            {answerText: "Overpopulation", isCorrect: false}
        ]
    },
    {
        question: "Which gas is primarily responsible for the greenhouse effect?",
        answerOptions: [
            {answerText: "Methane", isCorrect: false},
            {answerText: "Carbon dioxide", isCorrect: true},
            {answerText: "Water vapor", isCorrect: false},
            {answerText: "Nitrogen", isCorrect: false}
        ]
    },
    {
        question: "Which environmental issue is caused by the release of sulfur dioxide and nitrogen oxides into the atmosphere?",
        answerOptions: [
            {answerText: "Air pollution", isCorrect: true},
            {answerText: "Water pollution", isCorrect: false},
            {answerText: "Soil erosion", isCorrect: false},
            {answerText: "Biodiversity loss", isCorrect: false}
        ]
    },
    {
        question: "What is the most common type of renewable energy?",
        answerOptions: [
            {answerText: "Solar", isCorrect: false},
            {answerText: "Wind", isCorrect: false},
            {answerText: "Hydroelectric", isCorrect: true},
            {answerText: "Geothermal", isCorrect: false}
        ]
    },
    {
        question: "Which of the following is not a cause of ocean acidification?",
        answerOptions: [
            {answerText: "Carbon dioxide emissions", isCorrect: false},
            {answerText: "Overfishing", isCorrect: true},
            {answerText: "Ocean pollution", isCorrect: false},
            {answerText: "Deforestation", isCorrect: false}
        ]
    },
    {
        question: "Which of the following is not a renewable energy source?",
        answerOptions: [
            {answerText: "Nuclear", isCorrect: true},
            {answerText: "Solar", isCorrect: false},
            {answerText: "Wind", isCorrect: false},
            {answerText: "Hydroelectric", isCorrect: false}
        ]
    },
    {
        question: "What is the primary cause of soil erosion?",
        answerOptions: [
            {answerText: "Overgrazing", isCorrect: true},
            {answerText: "Urbanization", isCorrect: false},
            {answerText: "Deforestation", isCorrect: false},
            {answerText: "Industrialization", isCorrect: false}
        ]
    },
    {
        question: "Which of the following is not a greenhouse gas?",
        answerOptions: [
            {answerText: "Carbon dioxide", isCorrect: false},
            {answerText: "Methane", isCorrect: false},
            {answerText: "Nitrogen", isCorrect: true},
            {answerText: "Water vapor", isCorrect: false}]
    }
];

const Quiz = () => {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
    }

export default Quiz;
