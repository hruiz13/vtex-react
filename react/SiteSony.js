import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import "./siteSony.css";

const CSS_HANDLES = ['sonySiteBtn', 'sonySiteLink']
const SiteSony = () => {
    const handles = useCssHandles(CSS_HANDLES)
    return (
        <>
            <a href="https://www.sony.com.co/" className={`${handles.sonySiteLink}`}><button className={`${handles.sonySiteBtn}`}>Sitio Sony</button></a>
        </>
    )
}

export default SiteSony
