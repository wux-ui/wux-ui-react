import React from "react"
import "./import.css"

const Wux = {
    Basic: props => <div className="wux-header-fixed-margin">{props.children}</div>,
    Header: props => {
        var optionGroup = props.option.map((v, i) =>
            <a
                className="wux-header-option"
                href={v[1]}
                key={i}>
                {v[0]}
            </a>
        );
        return <nav className="wux-header wux-header-fixed">
            <span className="wux-header-title">{props.title}</span>
            <span className="wux-header-option-group">{optionGroup}</span>
        </nav>
    },
    Col: props => <div className="wux-col">{props.children}</div>,
    Alert: {
        Primary: props => <div className="wux-alert wux-alert-primary">{props.children}</div>,
        Secondary: props => <div className="wux-alert wux-alert-secondary">{props.children}</div>,
        Success: props => <div className="wux-alert wux-alert-success">{props.children}</div>,
        Info: props => <div className="wux-alert wux-alert-info">{props.children}</div>,
        Warning: props => <div className="wux-alert wux-alert-warning">{props.children}</div>,
        Error: props => <div className="wux-alert wux-alert-error">{props.children}</div>,
        Light: props => <div className="wux-alert wux-alert-light">{props.children}</div>,
        Icon: props => <span className="wux-alert-icon">{props.children}</span>,
    }
}

export default Wux;