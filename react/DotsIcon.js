import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import "./siteSony.css";
import { Icon } from 'vtex.store-icons'

const CSS_HANDLES = ['dotsBtn']
const DotsIcon = () => {
    const handles = useCssHandles(CSS_HANDLES)
    return (
        //<div>test</div>
        // <button className={handles.dotsBtn}><Icon id="mpa-elypsis" /></button>
        <button className={`${handles.dotsBtn}`}><Icon id="mpa-elypsis" /></button>
    )
}

export default DotsIcon
