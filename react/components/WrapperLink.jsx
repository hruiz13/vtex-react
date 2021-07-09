import React from 'react'

/**
 * Wrapper Component to assign an id and do anchors.
 * component made by hruiz
 */


// interface Props {
//     wrapperId?: string
//     children?: React.ReactNode
// }

const WrapperLink = (props) => {
    const { wrapperId = "nada", children } = props

    return (
        <div id={wrapperId}>{children}</div>
    )
}

WrapperLink.schema = {
    title: 'editor.countdown.wrapper.id',
    description: 'editor.countdown.wrapper.id.description',
    type: 'object',
    properties: {
        wrapperId: {
            title: 'admin/editor.logo.href.title',
            description: 'admin/editor.logo.href.description',
            type: 'string',
        },
    },
}


export default WrapperLink
