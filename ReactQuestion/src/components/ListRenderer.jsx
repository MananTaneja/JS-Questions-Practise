import cx from 'classnames'
import React from 'react'

function ListRenderer({ data, typeSelect, onCloseHandler, searchQuery, selectedData, setSelectedData, display }) {

    function rowRenderer(itemData, idx) {
        const isChecked = selectedData.includes(itemData)

        const row = cx(
            'select-item flex gap-2 h-8 items-center border-teal-100 p-2 cursor-pointer'
        )

        return (
            <React.Fragment>
                {display && (<div className={row} key={idx} data-value={itemData} id="sample">
                    <input type={(typeSelect === 'SINGLE') ? 'radio' : 'checkbox'} name="select-checkbox" id={`checkbox-${idx}`} checked={isChecked ? 'select' : ''} readOnly />
                    <div className="select-text">
                        {itemData}
                    </div>
                </div>)}
            </React.Fragment>
        )
    }

    const handleClick = (e) => {
        const row = e.target.closest('div.select-item')
        if (row) {
            if (!selectedData.includes(row.dataset.value)) {
                if (typeSelect === 'SINGLE') {
                    setSelectedData([row.dataset.value])
                }
                else setSelectedData([...selectedData, row.dataset.value])
            }
            else {
                const newSelection = selectedData.filter(d => d !== row.dataset.value)
                setSelectedData(newSelection)
            }
        }
    }

    return (
        <div className="select-group" onClick={(e) => handleClick(e)} key='select-group'>
            {data.map((item, idx) => {
                return rowRenderer(item, idx)
            })}
        </div>
    )

}

export default ListRenderer