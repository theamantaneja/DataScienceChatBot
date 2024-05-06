import React, { useState } from 'react';


const QnABot = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        })
        .then((response) => response.json())
        .then((data) => setAnswer(data.answer))
        .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 relative">ChatBot with Maximum IQ </h1>
            <form onSubmit={handleSubmit} className="mb-4 flex items-center">
                <input 
                    type="text" 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask me anything related to Data Science..."
                    className="border p-2 rounded w-2/3"  // Adjusting the width
                />
                <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Ask
                </button>
            </form>
            {answer && (
                <div className="mt-4">
                    <p className="text-lg">Answer: {answer}</p>
                </div>
            )}
        </div>
    );
};

export default QnABot;
