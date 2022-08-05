import React from "react"
import "./import.css"

const WuX = {
    HeaderMargin: props => <div className="wux-header-fixed-margin">{props.children}</div>,
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
    Container: props => <div className="wux-container">{props.children}</div>,
    Row: props => {
        var type = props.size.constructor.toString().split(' ')[1].split('(')[0];
        switch (type) {
            case 'String':
                return <div className={`wux-row-${props.size}-${props.number}`}>{props.children}</div>
            case 'Array':
                var className = '';
                props.size.forEach((_, i) => className += ` wux-row-${props.size[i]}-${props.number[i]}`);
                return <div className={className.slice(1)} disabled={props.disabled}>{props.children}</div>
        }
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
    },
    Breadcrumb: props => {
        var type = props.item.constructor.toString().split(' ')[1].split('(')[0];
        switch (type) {
            case 'String':
                return <ul className="wux-breadcrumb"><li className="wux-breadcrumb-item">{props.item}</li></ul>
            case 'Array':
                var breadcrumbItems = props.item.map((v, i) => <li className="wux-breadcrumb-item" key={i}>{v}</li>);
                return <ul className="wux-breadcrumb">{breadcrumbItems}</ul>
        }
    }
}

export default WuX;