import React from "react"
import "./import.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var optionGroup = this.props.option.map(v => <a class="wux-header-option" href={v[1]}>{v[0]}</a>);
        return <nav class="wux-header wux-header-fixed">
            <span class="wux-header-title">{this.props.title}</span>
            <span class="wux-header-option-group">{optionGroup}</span>
        </nav>
    }
}

const Wux = {
    Basic: props => <div className="wux-header-fixed-margin">{props.children}</div>,
    Header: Header,
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