import React from 'react'
import PropTypes from 'prop-types'

/**
 * Wrapper Component to assign an id.
 * component made by hruiz
 */


interface Props {
    wrapperId?: string
    children?: React.ReactNode
}

const WrapperLink = (props: Props) => {
    const { wrapperId = "empty", children } = props

    if (wrapperId === "empty") {
        return (<div>{children}</div>)
    } else {
        return (<div id={wrapperId}>{children}</div>)
    }
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

WrapperLink.propTypes = {
    wrapperId: PropTypes.string
}

export default WrapperLink
