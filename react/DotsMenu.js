import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import "./siteSony.css";
import { Icon } from 'vtex.store-icons'


const CSS_HANDLES = ['helpIcons', 'nextIcons', 'dotsCol', 'dotsText', 'dotsContainer', 'dotsLink']
const DotsMenu = () => {
    const handles = useCssHandles(CSS_HANDLES)
    return (
        <div className={`${handles.dotsContainer}`} >
            <div className={`${handles.dotsCol}`}>
                <a href="/como-comprar" className={`${handles.dotsLink}`}>
                    <Icon id="inf-help--outline" size="18" className={`${handles.helpIcons}`} />
                    <span className={`${handles.dotsText}`}>Ayuda</span>
                </a>
                <Icon id="nav-caret--right" size="18" activeClassName={`${handles.nextIcons}`} />
            </div>
            <hr />
            <div className={`${handles.dotsCol}`}>
                <a href="https://www.sony.com.co/cliente/login" className={`${handles.dotsLink}`}>
                    <Icon id="hpa-profile" size="18" className={`${handles.helpIcons}`} />
                    <span className={`${handles.dotsText}`}>Login Sony</span>
                </a>
                <Icon id="nav-caret--right" size="18" activeClassName={`${handles.nextIcons}`} />
            </div>
            <div className={`${handles.dotsCol}`}>
                <a href="https://www.sony.com.co/" className={`${handles.dotsLink}`}>
                    <Icon id="mpa-globe" size="18" className={`${handles.helpIcons}`} />
                    <span className={`${handles.dotsText}`}>Sitio Sony</span>
                </a>
                <Icon id="nav-caret--right" size="18" activeClassName={`${handles.nextIcons}`} />
            </div>

        </div >
    )
}

export default DotsMenu
