import React from 'react'
import "./SurveyModuleStyle.css"
import Survey from './Survey'

function SurveyModule({data}) {
  // console.log(data.surweys);
  
  return (
    <div className='survey-module-container'> 
        {data?.surweys?.map(surwey => <Survey data={surwey}/>)}
    </div>
  )
}

export default SurveyModule