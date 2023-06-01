import React, {useState} from 'react';
import './quiz.scss'

const Quiz = () => {
    const questions = [
        {
            questionText: 'Кто основной сюжетный персонаж "Властелин колец"',
            answerOption: [
                {answerText: 'Леголас', isCorrect: false},
                {answerText: 'Сэм', isCorrect: false},
                {answerText: 'Том Бомбадил', isCorrect: false},
                {answerText: 'Фродо', isCorrect: true},
            ],
        },
        {
            questionText: 'Кто предводитель эльфов Ривендела',
            answerOption: [
                {answerText: 'Элронд', isCorrect: true},
                {answerText: 'Галадриэль', isCorrect: false},
                {answerText: 'Дамблдор', isCorrect: false},
                {answerText: 'Энрики Эглесиас', isCorrect: false},
            ],
        },
        {
            questionText: 'Древняя страна гномов',
            answerOption: [
                {answerText: 'Шир', isCorrect: false},
                {answerText: 'Гондор', isCorrect: false},
                {answerText: 'Мория', isCorrect: true},
                {answerText: 'Таверна Мо', isCorrect: false},
            ],
        },
        {
            questionText: 'Какой особенностью обладал меч Фродо?',
            answerOption: [
                {answerText: 'При появлении орков начинал светить синим', isCorrect: true},
                {answerText: 'Мог убивать призраков.', isCorrect: false},
                {answerText: 'Даровал бессмертие', isCorrect: false},
                {answerText: 'Увеличивал владельца до человеческого роста', isCorrect: false},
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0)

    const handleNewTryButton = () => {
        setScore(0);
        setShowScore(false);
        setCurrentQuestion(0)
    }
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }
    return (
        <div className='quiz-container'>
            <div className="quiz-section">
                {showScore ? <div className='result'><div className='show-score'>Your got {score} of {questions.length} correct answers</div>
                        <button onClick={handleNewTryButton}>Try again</button></div>
                    :
                    <>
                        <div className="text-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOption.map((answerOption) =>
                                <button
                                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            )}
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Quiz;
