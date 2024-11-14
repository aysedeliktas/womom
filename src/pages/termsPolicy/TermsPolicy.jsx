import React, { useState } from 'react'
import "./TermsPolicyStyle.css"
import TERMS from '../../Mock'
import PolicyParagraph from '../../components/PolicyParagraph'
import PageHead from '../../components/pageHead/PageHead'
import { Link } from 'react-router-dom'

function TermsPolicy() {
    // const [texts, setTexts] = useState(TERMS)

    return (
        <div className='terms-container'>
            <PageHead pageName={"Gizlilik Politikası"} lastPath={"/promo-video"} />
            <div className='policy-area'>
                {TERMS.termsPolicy.map(text => <PolicyParagraph text={text} />)}
                <span className='policy-span'>
                    <Link to={"/login"} style={{ width: "fit-content" }} className='linkin-park'>
                        <button className='terms-except-btn'>Okudum, anladım, kabul ediyorum.</button>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default TermsPolicy