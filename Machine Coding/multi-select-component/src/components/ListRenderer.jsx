import cx from 'classnames'
import React from 'react'

function ListRenderer({ data, typeSelect, selectedData, setSelectedData, display }) {

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

    const handleClick = (event) => {
        const row = event.target.closest('div.select-item')
        if (row) {
            const selectedItem = row.dataset.value
            if (!selectedData.includes(selectedItem)) {
                if (typeSelect === 'SINGLE') {
                    setSelectedData([selectedItem])
                }
                else setSelectedData([...selectedData, selectedItem])
            }
            else {
                const newSelection = selectedData.filter(item => item !== selectedItem)
                setSelectedData(newSelection)
            }
        }
    }

    return (
        <div className="select-group" onClick={(event) => handleClick(event)} key='select-group'>
            {data.map((item, idx) => {
                return rowRenderer(item, idx)
            })}
        </div>
    )

}

export default ListRenderer