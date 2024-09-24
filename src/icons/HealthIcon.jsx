import React from 'react'

export default function HealthReport({ isClick }) {
    
    if (isClick == null) {
        isClick = false;
    }

    if (isClick) {
        return (
            <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="1.84814" width="15" height="19" fill="#B4A7FF" />
                <path d="M3 1.84814V0.848145H7.5H12V1.84814" stroke="#B4A7FF" stroke-width="1.2" />
                <path d="M2 11.3216L3.5 10.3742L5.5 13.2163L7 8.47949L8 13.2163L9.5 11.7953L10.5 13.2163L11.5 12.269H13" stroke="white" />
            </svg>
        )
    }
    else {
        return (
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.1332" y="2.75186" width="13.8" height="17.8" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.2" />
                <path d="M3.5332 2.15186V1.15186H8.0332H12.5332V2.15186" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.2" />
                <path d="M2.5332 11.6253L4.0332 10.6779L6.0332 13.52L7.5332 8.7832L8.5332 13.52L10.0332 12.099L11.0332 13.52L12.0332 12.5727H13.5332" stroke="#221F1F" stroke-opacity="0.6" />
            </svg>

        )
    }
}

