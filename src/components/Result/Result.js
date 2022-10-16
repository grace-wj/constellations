import './Result.css';

function Result(props) {
    const { name, title, traits } = props.result;

    return (
        <div className='result-container'>
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
            <p>traits: {traits}</p>
        </div>
    );
}

export default Result;
