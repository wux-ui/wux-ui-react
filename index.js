import React from "react"
import "./import.css"

const WuX = {
    HeaderMargin: props => <div className="wux-header-fixed-margin">{props.children}</div>,
    Header: props => {
        var optionGroup = props.option.map((v, i) =>
            <a
                className={`wux-header-option${v[2] ? ' wux-header-option-bold' : ''}`}
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
            default:
                break;
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
                default:
                    break;
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
            default:
                break;
        }
    },
    Card: props =>
        <div className="wux-card wux-card-hover">
            <div className="wux-card-header">{props.header}</div>
            <div className="wux-card-body">{props.body}</div>
            <div className="wux-card-footer">{props.footer}</div>
        </div>,
    Dialog: props => {
        var CancelBtn = props.cancel;
        var Cancel = props.cancel.type;
        var FooterBtn = props.footer.props.children;
        var type = FooterBtn.constructor.toString().split(' ')[1].split('(')[0];
        var footer;
        switch (type) {
            case 'String':
                footer = props.footer;
                break;
            case 'Object':
                footer = FooterBtn.map(V => <V.type type="submit" {...V.props} />);
                break;
            default:
                break;
        }
        return <>
            <button className="wux-btn" onClick={() => { document.getElementById(props.id).showModal() }}>{props.children}</button>
            <dialog className="wux-dialog" id={props.id}>
                <div className="wux-dialog-header">
                    <h1 className="wux-dialog-header-title">{props.header}</h1>
                </div>
                <div className="wux-dialog-body">{props.body}</div>
                <div className="wux-dialog-footer">
                    <div className="wux-dialog-footer-group">
                        <form method="dialog">
                            <Cancel onClick={() => { document.getElementById(props.id).close() }} {...CancelBtn.props} />
                            {footer}
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    },
    Dropdown: props => {
        var items = props.menu.map((v, i) => <li className="wux-dropdown-item" key={i}>{v}</li>);
        return <div className="wux-dropdown">
            <button className="wux-btn wux-dropdown-trigger">{props.children}</button>
            <ul className="wux-dropdown-menu">{items}</ul>
        </div>
    },
    Input: props =>
        <input
            className={`wux-form-input wux-form-input-${props.size}`}
            placeholder={props.children}
            type="url"
            disabled={props.disabled}
        />,
}

export default WuX;