import './Question.css';
import rightArrow from './right-arrow.svg';
import leftArrow from './left-arrow.svg';

function Question(props) {
    const { question, choices, addResult, removeResult} = props;

    return (
        <>
            <div className='middle-container'>
                <img src={leftArrow} width='70' onClick={() => removeResult()}/>
                <div className='question-container'>
                    <h1 className='question'>{question}</h1>
                    <div className='options'>
                        <h1 className='option' onClick={() => addResult(choices[0], -1)}>{choices[0]}</h1>
                        <h1 className='option' onClick={() => addResult(choices[1], 1)}>{choices[1]}</h1>
                    </div>
                </div>
                <img src={rightArrow} width='70' onClick={() => addResult('skip', 0)}/>    
            </div>
            
        </>
    );
}

export default Question;
