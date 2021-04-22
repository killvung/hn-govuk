import React from 'react';

const LABEL_MORE: string = "MORE"

interface PageControlProps {
    offset: number
    perPage: number
    totalLength: number
    handleOnClick: Function
}

const PageControl: React.FC<PageControlProps> = ({ offset, perPage, totalLength, handleOnClick }) => {
    const isEnd = () => (offset * perPage + perPage > totalLength)
    const onClick = () => {
        handleOnClick()
    }

    return (
        <div>
            <button onClick={onClick} disabled={isEnd()} className="govuk-button" data-module="govuk-button">
                {LABEL_MORE}
            </button>
        </div>
    )
}

export default PageControl;
