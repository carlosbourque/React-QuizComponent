import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    render() {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
        return (
            <div>                
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion
                    quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                />}                 
            </div>
        );
    };
    constructor(props) {
        super(props);
        this.state = {quiz_position : 1};
        
    };
    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        });
    };
}

export default Quiz;