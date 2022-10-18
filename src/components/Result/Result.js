import './Result.css';

function Result(props) {
    const { name, title, traits } = props.result;

    return (
        <div className='result-container'>
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
            <p>{traits}</p>
            <a href={document.location.href} className='retake-button'>Take the test again</a>
        </div>
    );
}

export default Result;
