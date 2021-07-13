import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import "./siteSony.css";
import { Icon } from 'vtex.store-icons'

const CSS_HANDLES = ['helpIcons']
const DotsIcon = () => {
    const { handles } = useCssHandles(CSS_HANDLES)
    return (
        <Icon id="inf-help--outline" size="18" className={`${handles.helpIcons}`} />
    )
}

export default DotsIcon
