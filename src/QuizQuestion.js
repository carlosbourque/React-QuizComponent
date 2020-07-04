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
                { (this.state.incorrectAnswer) ? <p className='error'>Sorry, that's not right</p> : null }
            </main>
        );
    };
    constructor(props)
    {
        super();
        this.state = { incorrectAnswer: false };
    };
    handleClick(button_text)
    {
        console.log(button_text);
        console.log(this.props.quiz_question.answer);
        if (button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState({
                incorrectAnswer: false
            });
        }
        else {
            this.setState({
                incorrectAnswer: true
            });
        };
            
    };
};

export default QuizQuestion;