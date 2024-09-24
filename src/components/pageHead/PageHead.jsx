import React from 'react'
import "./PageHeadStyle.css"
import { Link } from 'react-router-dom'
import MenuIcon from '../../icons/MenuIcon'

function PageHead({ lastPath, pageName }) {
    return (
        <div className='page-head'>
            {lastPath != "" ?
                < Link to={lastPath}>
                    <button className='back-button'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_88_2553)">
                            <path d="M7.828 11.0002H20V13.0002H7.828L13.192 18.3642L11.778 19.7782L4 12.0002L11.778 4.22217L13.192 5.63617L7.828 11.0002Z" fill="#4E4B66" />
                        </g>
                        <defs>
                            <clipPath id="clip0_88_2553">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </button>
                </Link> : <div className='back-button'></div>
            }
            <h2 className='head-tag'>{pageName}</h2>
            <div className='menu-button'>
                {/* <MenuIcon /> */}
            </div>
        </div >
    )
}

export default PageHead