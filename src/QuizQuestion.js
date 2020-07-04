import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((currentValue, index) => {
                            return <QuizQuestionButton
                                clickHandler={this.handleClick.bind(this)}
                                button_text={currentValue}
                                key={index} />
                            })
                        }
                    </ul>
                </section>
            </main>
        );
    };
    handleClick(button_text)
    {
        if (button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    };
};

export default QuizQuestion;