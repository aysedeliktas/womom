import React from 'react'
import "./MemberStyle.css"

function Member({ data }) {
    return (
        <div className='member-container'>
            <span className='member-referance'>
                <h3 className='member-name'>{data?.name}</h3>
                <p className='member-title'>{data?.title}</p>
            </span>
            <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt={data?.name} className='member-image' />
            <p className="member-desc">{data?.desc}</p>
        </div>
    )
}

export default Member