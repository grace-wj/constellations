function Question(props) {
    const { question, choices } = props;
    return (
        <div>
            <h1>{question}</h1>
            <h1>{choices[0]}</h1>
            <h1>{choices[1]}</h1>
        </div>
    );
}

export default Question;
