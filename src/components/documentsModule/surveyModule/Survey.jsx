import React, { useState, useEffect, useCallback } from 'react';
import "./SurveyModuleStyle.css";
import { setLocalStorage, getLocalStorage } from '../../../utils/LocalStrManager';


function Survey({ data }) {
  const [answer, setAnswer] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const savedSurveyData = getLocalStorage('surveyResults');
    if (savedSurveyData && savedSurveyData[data.id]) {
      setAnswer(savedSurveyData[data.id].answer);
    }
  }, [data.id]);

  const handleTextChange = useCallback((e) => {
    const newValue = e.target.value;
    setAnswer(newValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      saveAnswerToLocalStorage(newValue);
    }, 1000);

    setTimeoutId(newTimeoutId);
  }, [timeoutId, data.id]);

  const saveAnswerToLocalStorage = (answerText) => {
    const existingData = getLocalStorage('surveyResults') || {};
    
    const updatedData = {
      ...existingData,
      [data.id]: {
        id: data.id,
        question: data.question,
        answer: answerText
      }
    };

    setLocalStorage('surveyResults', updatedData);
    console.log('Cevap kaydedildi:', updatedData);
  };

  return (
    <div className='survey-container'>
      <p className="question">{data?.question}</p>
      <textarea
        className='answer'
        placeholder='Cevabınızı buraya yazabilirsiniz.'
        value={answer}
        onChange={handleTextChange}
        spellCheck="false"
      ></textarea>
    </div>
  );
}

export default Survey;
