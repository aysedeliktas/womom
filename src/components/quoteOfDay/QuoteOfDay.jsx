import React, { useEffect, useState } from 'react'
import "./QuoteOfDayStyle.css"
import { getQuoteOfDay } from '../../utils/GetData';

function QuoteOfDay() {
    const [quoteOfDay, setQuoteOfDay] = useState(null)

    useEffect(() => {
            fnGetData()
    }, []);

    const fnGetData = async () => {
        
        const quoties = await getQuoteOfDay();
        setQuoteOfDay(quoteCollector(quoties.Quotes)); 
    };

    function quoteCollector(items) {
        const today = new Date();
        const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
        return items[dayIndex % items.length];
    }

    return (
        <div className='quote-container'>
            {/* <h1>Günün Sözü</h1> */}
            <p className='quote'>{quoteOfDay}</p>
        </div>
    )
}

export default QuoteOfDay