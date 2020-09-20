import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import QuizTitle from './QuizTitle';
import Q1Input from './Q1Input';
import Q1Title from './Q1Title';
import Q2Input from './Q2Input';
import Q2Title from './Q2Title';

const App = () => {
    return (
        <div>
            
                <QuizTitle></QuizTitle>
                <Q1Title></Q1Title>
                <Q1Input></Q1Input>
                <Quiz></Quiz>
                <Q2Title></Q2Title>
                <Q2Input></Q2Input>
              
         
        </div>


    );
};

ReactDOM.render(<App />, document.querySelector('#root'));