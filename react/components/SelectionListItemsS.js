import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import classNames from 'classnames'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

const CSS_HANDLES = ['orderByOptionItem', 'textList']

const SelectionListItemS = ({ option, onItemClick, selected }) => {
    const { setQuery } = useRuntime()
    const handles = useCssHandles(CSS_HANDLES)

    const handleOptionClick = () => {
        onItemClick()
        setQuery({ order: option.value, page: undefined })
    }

    const highlight = selected ? 'bg-blue white b' : 'hover-bg-blue bg-base hover-o-80 hover-white'

    return (
        <div
            className={classNames(
                handles.textList,
                highlight,
                applyModifiers(handles.orderByOptionItem, selected ? 'selected' : ''),
                ' f6 ttu ml-auto db no-underline pointer tl bn pv4 ph5 right-0-ns  w-100'
            )}
            key={option.value}
            onClick={handleOptionClick}
        >
            {option.label}
        </div>
    )
}

export default SelectionListItemS
