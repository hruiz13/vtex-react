import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import "./siteSony.css";
import { Icon } from 'vtex.store-icons'

const CSS_HANDLES = ['nextIcons']
const DotsIcon = () => {
    const handles = useCssHandles(CSS_HANDLES)
    return (
        <Icon id="nav-caret--right" size="18" activeClassName={`${handles.nextIcons}`} />
    )
}

export default DotsIcon
