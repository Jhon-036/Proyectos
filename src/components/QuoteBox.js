import React from 'react';
import quotes from '../quotes.json';
import { useState } from 'react';

const QuoteBox = () => {

    const [quote, setQuote] = useState(quotes[getRandom()]);
    
    const changeQuote = () => {
        setQuote(quotes[getRandom()]);
    }

    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#00c9a7", "#0089ba", "#00c2a8", "#a178df"];

    const randomIndex = Math.floor(Math.random() * 8);

    const color = colors[randomIndex];

    document.body.style = `background: ${color}`

    console.log(quotes);

    return (
        <div className='card-quote'  style={{color: color}}>
            <main>
                <i className="fas fa-quote-left"></i> 
                <p>{quote.quote}</p>
            </main>
            <aside>
                <p>{quote.author}</p>
            </aside>
            <div>
            <button onClick={changeQuote}  style={{background: color}}>
                <i className="fas fa-angle-right"></i>
            </button>
            </div>
        </div>
    );
};

//funcion aleatorio
const getRandom = () => Math.floor(Math.random() * quotes.length);

export default QuoteBox;