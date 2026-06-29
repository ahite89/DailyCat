export const Sentence = ({ words }) => {
    return (
        <div>
            <p>My cat is...</p>
            {words.map((word) => (
                <p key={word.id}>{word.answer}</p>
            ))}
        </div>
    );
};