import React, { useState } from 'react'
import "./TermsPolicyStyle.css" 
import TERMS from '../../Mock'
import PolicyParagraph from '../../components/PolicyParagraph'
import PageHead from '../../components/pageHead/PageHead'

function TermsPolicy() {
    // const [texts, setTexts] = useState(TERMS)

    return (
        <div className='terms-container'>
            <PageHead pageName={"Gizlilik Politikası"} lastPath={"/login"}/>
            <div className='policy-area'>
                {TERMS.termsPolicy.map(text => <PolicyParagraph text={text}/>)}
            </div> 
        </div>
    )
}

export default TermsPolicy