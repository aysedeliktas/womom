import React from 'react'

export default function Porfile({ isClick }) {

    if (isClick == null) {
        isClick = false;
    }

    if (isClick) {
        return (
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.69538 13.498C3.82776 13.498 0.524902 14.0828 0.524902 16.4247C0.524902 18.7666 3.80681 19.3723 7.69538 19.3723C11.563 19.3723 14.8649 18.7866 14.8649 16.4457C14.8649 14.1047 11.584 13.498 7.69538 13.498Z" fill="#B4A7FF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.69534 10.1577C10.2334 10.1577 12.2906 8.09964 12.2906 5.56155C12.2906 3.02345 10.2334 0.966309 7.69534 0.966309C5.15724 0.966309 3.09915 3.02345 3.09915 5.56155C3.09058 8.09107 5.13439 10.1492 7.66296 10.1577H7.69534Z" fill="#B4A7FF" />
            </svg>
        )
    }
    else {
        return (
            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49218 13.498C4.89401 13.498 0.967285 14.0828 0.967285 16.4247C0.967285 18.7666 4.8691 19.3723 9.49218 19.3723C14.0904 19.3723 18.016 18.7866 18.016 16.4457C18.016 14.1047 14.1153 13.498 9.49218 13.498Z" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49222 10.1577C12.5097 10.1577 14.9555 8.09964 14.9555 5.56155C14.9555 3.02345 12.5097 0.966309 9.49222 0.966309C6.47471 0.966309 4.02786 3.02345 4.02786 5.56155C4.01767 8.09107 6.44754 10.1492 9.45373 10.1577H9.49222Z" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    }
}
