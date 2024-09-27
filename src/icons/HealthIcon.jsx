import React from 'react'

export default function HealthReport({ isClick }) {

    if (isClick == null) {
        isClick = false;
    }

    if (isClick) {
        return (
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.04175 0.833659V1.75033C9.04175 1.84237 8.96713 1.91699 8.87508 1.91699H2.79175C2.12605 1.91699 1.58189 2.43738 1.54387 3.09355L1.54175 3.16699V14.8337C1.54175 15.4994 2.06213 16.0435 2.7183 16.0815L2.79175 16.0837H14.4584C15.1241 16.0837 15.6683 15.5633 15.7063 14.9071L15.7084 14.8337V8.75033C15.7084 8.65828 15.783 8.58366 15.8751 8.58366H16.7917C16.8838 8.58366 16.9584 8.65828 16.9584 8.75033V14.8337C16.9584 16.2144 15.8391 17.3337 14.4584 17.3337H2.79175C1.41104 17.3337 0.291748 16.2144 0.291748 14.8337V3.16699C0.291748 1.78628 1.41104 0.666992 2.79175 0.666992H8.87508C8.96713 0.666992 9.04175 0.741611 9.04175 0.833659ZM16.1085 1.30859C16.9221 2.12219 16.9221 3.44128 16.1085 4.25487L10.5467 9.81666C10.5126 9.85073 10.4655 9.86839 10.4174 9.86508L7.88168 9.6902C7.79867 9.68447 7.7326 9.6184 7.72687 9.5354L7.552 6.9997C7.54868 6.95162 7.56634 6.90445 7.60042 6.87038L13.1622 1.30859C13.9758 0.495002 15.2949 0.495002 16.1085 1.30859ZM12.698 3.54048L8.88669 7.35175C8.85261 7.38583 8.83495 7.43299 8.83826 7.48107L8.90906 8.50789L9.9362 8.57841C9.98426 8.58171 10.0314 8.56405 10.0655 8.52998L13.8764 4.71882L12.698 3.54048ZM14.0917 2.15012L14.0461 2.19248L13.5818 2.65632L14.7605 3.83507L15.2246 3.37099C15.5352 3.06034 15.5494 2.56546 15.267 2.23807L15.2246 2.19248C14.914 1.88183 14.4191 1.86771 14.0917 2.15012Z" fill="#333333" />
            </svg>
        )
    }
    else {
        return (
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.04175 0.833659V1.75033C9.04175 1.84237 8.96713 1.91699 8.87508 1.91699H2.79175C2.12605 1.91699 1.58189 2.43738 1.54387 3.09355L1.54175 3.16699V14.8337C1.54175 15.4994 2.06213 16.0435 2.7183 16.0815L2.79175 16.0837H14.4584C15.1241 16.0837 15.6683 15.5633 15.7063 14.9071L15.7084 14.8337V8.75033C15.7084 8.65828 15.783 8.58366 15.8751 8.58366H16.7917C16.8838 8.58366 16.9584 8.65828 16.9584 8.75033V14.8337C16.9584 16.2144 15.8391 17.3337 14.4584 17.3337H2.79175C1.41104 17.3337 0.291748 16.2144 0.291748 14.8337V3.16699C0.291748 1.78628 1.41104 0.666992 2.79175 0.666992H8.87508C8.96713 0.666992 9.04175 0.741611 9.04175 0.833659ZM16.1085 1.30859C16.9221 2.12219 16.9221 3.44128 16.1085 4.25487L10.5467 9.81666C10.5126 9.85073 10.4655 9.86839 10.4174 9.86508L7.88168 9.6902C7.79867 9.68447 7.7326 9.6184 7.72687 9.5354L7.552 6.9997C7.54868 6.95162 7.56634 6.90445 7.60042 6.87038L13.1622 1.30859C13.9758 0.495002 15.2949 0.495002 16.1085 1.30859ZM12.698 3.54048L8.88669 7.35175C8.85261 7.38583 8.83495 7.43299 8.83826 7.48107L8.90906 8.50789L9.9362 8.57841C9.98426 8.58171 10.0314 8.56405 10.0655 8.52998L13.8764 4.71882L12.698 3.54048ZM14.0917 2.15012L14.0461 2.19248L13.5818 2.65632L14.7605 3.83507L15.2246 3.37099C15.5352 3.06034 15.5494 2.56546 15.267 2.23807L15.2246 2.19248C14.914 1.88183 14.4191 1.86771 14.0917 2.15012Z" fill="#333333" />
            </svg>
        )
    }
}

{/* <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.1332" y="2.75186" width="13.8" height="17.8" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.2" />
<path d="M3.5332 2.15186V1.15186H8.0332H12.5332V2.15186" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.2" />
<path d="M2.5332 11.6253L4.0332 10.6779L6.0332 13.52L7.5332 8.7832L8.5332 13.52L10.0332 12.099L11.0332 13.52L12.0332 12.5727H13.5332" stroke="#221F1F" stroke-opacity="0.6" />
</svg> */}
