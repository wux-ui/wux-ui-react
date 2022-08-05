import React from "react"
import "./import.css"

const WuX = {
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
    Alert: props => {
        if (props.type === 'icon') return <span className="wux-alert-icon">{props.children}</span>
        else return <div className={`wux-alert wux-alert-${props.type}`}>{props.children}</div>
    },
    Button: props => {
        var type;
        if (props.type) {
            type = props.type.constructor.toString().split(' ')[1].split('(')[0];
            switch (type) {
                case 'String':
                    return <button className={`wux-btn wux-btn-${props.type}`} disabled={props.disabled}>{props.children}</button>
                case 'Array':
                    var className = 'wux-btn';
                    props.type.forEach(v => className += ` wux-btn-${v}`);
                    return <button className={className} disabled={props.disabled}>{props.children}</button>
            }
        }
        else return <button className="wux-btn" disabled={props.disabled}>{props.children}</button>
    }
}

export default WuX;