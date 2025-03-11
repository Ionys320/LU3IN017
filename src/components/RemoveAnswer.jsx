function RemoveAnswer({ answer, answers, setAnswers }) {
    const removeAnswer = () => {
        const index = answers.indexOf(answer);
        answers.splice(index, 1);

        setAnswers(answers);
    }

    return (
        <div>
            <button onClick={() => removeAnswer(index)}>Remove Answer</button>
        </div>
    );

}

export default RemoveAnswer;