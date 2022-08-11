import React from "react";
import "./import.css";

function getClass(defaultValue, type, noDefault = false) {
    if (type) {
        var typeType = type.constructor.toString().split(' ')[1].split('(')[0];
        switch (typeType) {
            case 'String':
                return `${noDefault ? '' : defaultValue + ' '}${defaultValue}-${type}`;
            case 'Array':
                var className = noDefault ? '' : defaultValue;
                type.forEach(v => className += ` ${defaultValue}-${v}`);
                return className;
            default:
                break;
        }
    }
    else return defaultValue;
}

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
        const { type, children, ...otherProps } = props;
        return <button className={getClass('wux-btn', type)}  {...otherProps}>{children}</button>
    },
    ButtonGroup: props => {
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
        const { id, header, body, cancel, footer, children, ...otherProps } = props;
        var cancelBtn = cancel;
        var Cancel = cancel.type;
        var FooterBtn = footer.props.children;
        var type = FooterBtn.constructor.toString().split(' ')[1].split('(')[0];
        var footerElement;
        switch (type) {
            case 'String':
                footerElement = footer;
                break;
            case 'Object':
                footerElement = FooterBtn.map(V => <V.type type="submit" {...V.props} />);
                break;
            default:
                break;
        }
        return <>
            <button className="wux-btn" onClick={() => { document.getElementById(id).showModal() }}>{children}</button>
            <dialog className="wux-dialog" id={id} {...otherProps}>
                <div className="wux-dialog-header">
                    <h1 className="wux-dialog-header-title">{header}</h1>
                </div>
                <div className="wux-dialog-body">{body}</div>
                <div className="wux-dialog-footer">
                    <div className="wux-dialog-footer-group">
                        <form method="dialog">
                            <Cancel onClick={() => { document.getElementById(id).close() }} {...cancelBtn.props} />
                            {footerElement}
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
    Input: props => {
        const { size, children, ...otherProps } = props;
        return <input
            className={`wux-form-input wux-form-input-${size}`}
            placeholder={children}
            type="url"
            {...otherProps}
        />
    },
    Textarea: props => {
        const { children, ...otherProps } = props;
        return <textarea className="wux-form-input wux-form-input-md" placeholder={children} {...otherProps} />
    },
    Check: props => {
        const { checked = false, children, ...otherProps } = props;
        const [state, setState] = React.useState({ checked: checked });
        return <label>
            <input
                className="wux-form-checks"
                type="checkbox"
                checked={state.checked}
                onChange={() => { setState({ checked: !state.checked }) }}
                {...otherProps} />
            {children}
        </label>
    },
    Radio: props => {
        const { suffix = <br />, children, ...otherProps } = props;
        var Suffix = suffix.type;
        var radios = children.map((v, i) => [
            <label key={`label-${i}`}>
                <input className="wux-form-radios" type="radio" name="contact" {...otherProps} />
                {v}
            </label>,
            (i !== children.length - 1) && <Suffix key={`text-${i}`} {...suffix.props} />
        ]);
        return <form>{radios}</form>
    },
    Range: props => <input className="wux-form-range" type="range" {...props} />,
    Select: props => {
        var { value, children, ...otherProps } = props;
        value = value || children[0];
        const [state, setState] = React.useState({ value: value });
        var options = children.map((v, i) => <option key={i}>{v}</option>)
        return <select
            className="wux-form-select"
            onChange={(e) => { setState(e.target.value) }}
            value={state.value}
            {...otherProps}
        >{options}</select>
    },
    Upload: props => <input className="wux-form-upload" type="file" {...props} />,
    Loading: props => {
        const { type, ...otherProps } = props
        switch (type) {
            case "button":
                return <button className="wux-btn wux-loading" {...otherProps} />
            case "span":
                return <span className="wux-loading" {...otherProps} />
            default:
                break;
        }
    },
    Jumbotron: props => {
        const { title, subtitle, btn, ...otherProps } = props;
        var linkBtn = btn.map((v, i) => {
            const { type, children } = v[1].props;
            return <a href={v[0]} key={i} className={getClass('wux-btn', type)}  {...v[2]}>{children}</a>;
        })
        return <div className="wux-jumbotron" {...otherProps}>
            <h1 className="wux-jumbotron-title">{title}</h1>
            <p className="wux-jumbotron-subtitle">{subtitle}</p>
            <div className="wux-jumbotron-btn-group">{linkBtn}</div>
        </div>
    },
    List: props => {
        const { type, children, ...otherProps } = props;
        var group = children.map((v, i) => <li className={getClass(`wux-list-item`, type[i])} key={i}>{v}</li>);
        return <ul className="wux-list-group" {...otherProps}>{group}</ul>
    },
    Progress: props => {
        const { value, max, ...otherProps } = props;
        return <progress className="wux-progress" value={String(value)} max={String(max)}  {...otherProps} />
    },
    Tooltip: props => {
        const { btn = (<WuX.Button />), type, text, children, ...otherProps } = props;
        return <button className={`${getClass('wux-btn', btn.props.type)} wux-tooltip`} {...otherProps}>
            {children}
            <span className={`wux-tooltip-item wux-tooltip-item-${type}`}>{text}</span>
        </button>
    },
    Table: props => {
        const { children, ...otherProps } = props;
        var head = [];
        for (const key in children) {
            head.push(key);
        }
        var body = [];
        head = head.map((v, i) => {
            if (i === 0) children[v].forEach((value, index) => {
                body[index] = [];
                body[index][i] = <th key={`th-${index}-${i}`}>{value}</th>;
            })
            else children[v].forEach((value, index) => body[index][i] = <td key={`td-${index}-${i}`}>{value}</td>)
            return <th key={`head-${i}`}>{v}</th>;
        })
        return <table className="wux-table wux-table-fluid" {...otherProps}>
            <thead><tr>{head}</tr></thead>
            <tbody>{body.map((v, i) => <tr key={`body-${i}`}>{v}</tr>)}</tbody>
        </table>
    },
    Tag: props => {
        const { type, children, ...otherProps } = props;
        return <span className={getClass('wux-tag', type, (type && type.includes('close')))} {...otherProps}>{children}</span>
    },
}

export default WuX;