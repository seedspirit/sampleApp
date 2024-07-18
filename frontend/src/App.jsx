import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = () => {
        axios.get('http://localhost:8080/api/messages')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the messages!", error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/messages', content, {
            headers: {
                'Content-Type': 'text/plain'
            }
        })
            .then(response => {
                setMessages([...messages, response.data]);
                setContent('');
            })
            .catch(error => {
                console.error("There was an error saving the message!", error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Message Board</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Write a message"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded mt-2">Submit</button>
                </form>
                <div>
                    {messages.map(message => (
                        <div key={message.id} className="border-b py-2">{message.content}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;