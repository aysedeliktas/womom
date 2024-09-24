import React from 'react'
import "./PromoStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import ActionButton from '../../components/actionButton/ActionButton'
import WomenImg from '../../icons/WomenImg'

function Promo() {
    return (
        <div className="promo-container">
            <PageHead lastPath={""} pageName={"Tanıtım Videosu"} />
            <div className="promo-child-container">
                <div className="promo-content">
                    <h2 className="promo-content-tag">
                        Uygulamayı Tanıyalım
                    </h2>
                    <div className="promo-svg">

                    </div>
                    <p className="promo-content-text">
                        WoMOM, hamilelik sürecini takip eden ve hamilelere eğitim içerikleri sunan bir gebelik uygulamasıdır.
                    </p>
                    <ActionButton text={"İzleyelim"} specificStyle={{ marginTop: "5rem" }} />
                </div>
            </div>
            <div className='promo-img-container'>
                <WomenImg />
            </div>
        </div>
    )
}

export default Promo