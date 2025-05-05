import React from 'react';
import './App.css';
import books from './books.json';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📚 Decentralized library</h1>

      <ul className="space-y-4">
        {books.map((book, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <a
              href={`https://ipfs.io/ipfs/${book.ipfsHash}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
