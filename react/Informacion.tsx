import React from 'react'
import type { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles';
import "./informacion.css";

const CSS_HANDLES = [
    'container',
    'item',
    'icn',
    'howtobuy',
    'title',
    'text',
    'payin',
    'cocards',
    'shipping',
    'link',
    'buyrisk',
    'warranty',
    'secure']

const Informacion: FC = () => {
    const handles: any = useCssHandles(CSS_HANDLES)

    return (
        <div>
            <div className={`${handles.container}`}>
                <div className={`${handles.item}`}>
                    <a href="/como-comprar" className={`${handles.icn} ${handles.howtobuy}`}></a>
                    <a href="/como-comprar" className={`${handles.title}`}>Compra fácil</a>
                    <div className={`${handles.text}`}>
                        Elige tu producto, selecciona el medio de pago, la dirección de envío y listo.
                    </div>
                </div>
                <div className={`${handles.item}`}>
                    <a href="/como-comprar" className={`${handles.icn} ${handles.payin}`}></a>
                    <a href="/como-comprar" className={`${handles.title}`}>Medios de Pago</a>
                    <div className={`${handles.cocards}`}>
                    </div>
                </div>
                <div className={`${handles.item}`}>
                    <a href="/como-comprar" className={`${handles.icn} ${handles.shipping}`}></a>
                    <a href="/como-comprar" className={`${handles.title}`}>Envios GRATIS*</a>
                    <div className={`${handles.text}`}>
                        *En compras superiores a $99.000.
                        <a href="/forma-de-entrega" className={`${handles.link}`}>Conoce más</a>
                    </div>
                </div>
                <div className={`${handles.item}`}>
                    <a href="/como-comprar" className={`${handles.icn} ${handles.buyrisk}`}></a>
                    <a href="/como-comprar" className={`${handles.title}`}>Tu producto rápido</a>
                    <div className={`${handles.text}`}>
                        El tiempo de entrega dependerá de la ciudad en la que te encuentres.*
                        <a href="forma-de-entrega" className={`${handles.link}`}>Conoce más</a>
                    </div>
                </div>
                <div className={`${handles.item}`}>
                    <a href="/como-comprar" className={`${handles.icn} ${handles.warranty}`}></a>
                    <a href="/como-comprar" className={`${handles.title}`}>Garantía directa</a>
                    <div className={`${handles.text}`}>
                        Todas tus compras cuentan con el respaldo directo de Sony.
                    </div>
                </div>
                <div className={`${handles.item}`}>
                    <a href="/como-comprar" className={`${handles.icn} ${handles.secure}`}></a>
                    <a href="/como-comprar" className={`${handles.title}`}>Compra segura 100% certificada</a>
                </div>
            </div>
        </div>
    )
}

export default Informacion
