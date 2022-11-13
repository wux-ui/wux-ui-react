import React, { useState } from 'react';
import './import.css';

function getClass(defaultValue, type, noDefault = false) {
    if (type) {
        let typeType = type.constructor.toString().split(' ')[1].split('(')[0];
        switch (typeType) {
            case 'String':
                return `${noDefault ? '' : defaultValue + ' '}${defaultValue}-${type}`;
            case 'Array':
                let className = noDefault ? '' : defaultValue;
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
    Header: ({ type, option, title, small, ...otherProps }) => {
        let optionGroup = option.map((v, i) => {
            if (v.constructor.toString().split(' ')[1].split('(')[0] === 'Object') {
                if (v.$$typeof === (<p />).$$typeof) {
                    let Type = v.type;
                    return <Type key={i} {...v.props} />;
                }
                else {
                    const { title, link, bold } = v;
                    return <a
                        className={`wux-header-option${bold ? ' wux-header-option-bold' : ''}`}
                        href={link}
                        key={i}>
                        {title}
                    </a>;
                }
            }
            else return <></>;
        });
        return <nav className={type ? getClass('wux-header', type) : 'wux-header'} {...otherProps}>
            <span className="wux-header-title">{title}</span>
            <button className="wux-header-small-option-group">{small}</button>
            <span className="wux-header-option-group">{optionGroup}</span>
        </nav>
    },
    Container: props => <div className="wux-container">{props.children}</div>,
    Row: props => {
        let type = props.size.constructor.toString().split(' ')[1].split('(')[0];
        switch (type) {
            case 'String':
                return <div className={`wux-row-${props.size}-${props.number}`}>{props.children}</div>
            case 'Array':
                let className = '';
                props.size.forEach((_, i) => className += ` wux-row-${props.size[i]}-${props.number[i]}`);
                return <div className={className.slice(1)} disabled={props.disabled}>{props.children}</div>
            default:
                break;
        }
    },
    Col: props => <div className="wux-col">{props.children}</div>,
    Alert: props => {
        if (['icon', 'option-group'].includes(props.type)) return <span className={`wux-alert-${props.type}`}>{props.children}</span>
        else return <div className={`wux-alert wux-alert-${props.type}`}>{props.children}</div>
    },
    Button: ({ WuXType, ...otherProps }) => <button className={getClass('wux-btn', WuXType)}  {...otherProps} />,
    ButtonGroup: ({ type, ...otherProps }) => <div className={getClass('wux-btn-group', type)} {...otherProps} />,
    Breadcrumb: props => {
        let type = props.item.constructor.toString().split(' ')[1].split('(')[0];
        switch (type) {
            case 'String':
                return <ul className="wux-breadcrumb"><li className="wux-breadcrumb-item">{props.item}</li></ul>
            case 'Array':
                let breadcrumbItems = props.item.map((v, i) => <li className="wux-breadcrumb-item" key={i}>{v}</li>);
                return <ul className="wux-breadcrumb">{breadcrumbItems}</ul>
            default:
                break;
        }
    },
    Card: ({ type = 'hover', header, body, footer, ...otherProps }) =>
        <div className={getClass('wux-card', type)} {...otherProps}>
            <div className="wux-card-header">{header}</div>
            <div className="wux-card-body">{body}</div>
            <div className="wux-card-footer">{footer}</div>
        </div>,
    Dialog: ({ id, header, body, cancel, footer, btn = <WuX.Button />, children, ...otherProps }) => {
        let cancelBtn = cancel;
        let Cancel = cancel.type;
        let footerBtn = footer.props.children;
        let Btn = btn.type;
        let type = footerBtn.constructor.toString().split(' ')[1].split('(')[0];
        let footerElement;
        switch (type) {
            case 'String':
                footerElement = footer;
                break;
            case 'Object':
                footerElement = footerBtn.map(V => <V.type type="submit" {...V.props} />);
                break;
            default:
                break;
        }
        return <>
            <Btn onClick={() => { document.getElementById(id).showModal() }} {...btn.props} >{children}</Btn>
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
    Dropdown: ({ menu, btn = <WuX.Button />, children, ...otherProps }) => {
        let items = menu.map((v, i) => <li className="wux-dropdown-item" key={i}>{v}</li>);
        return <div className="wux-dropdown" {...otherProps}>
            <button className={`${getClass('wux-btn', btn.props.type)} wux-dropdown-trigger`} {...btn.props}>{children}</button>
            <ul className="wux-dropdown-menu">{items}</ul>
        </div>
    },
    Input: ({ WuXSize, children, ...otherProps }) =>
        <input
            className={`wux-form-input wux-form-input-${WuXSize}`}
            placeholder={children}
            type="url"
            {...otherProps}
        />,
    Textarea: ({ children, ...otherProps }) => <textarea className="wux-form-input wux-form-input-md" placeholder={children} {...otherProps} />,
    Check: ({ checked = false, children, ...otherProps }) => {
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
    Radio: ({ suffix = <br />, children, ...otherProps }) => {
        let Suffix = suffix.type;
        let radios = children.map((v, i) => [
            <label key={`label-${i}`}>
                <input className="wux-form-radios" type="radio" name="contact" {...otherProps} />
                {v}
            </label>,
            (i !== children.length - 1) && <Suffix key={`text-${i}`} {...suffix.props} />
        ]);
        return <form>{radios}</form>
    },
    Range: props => <input className="wux-form-range" type="range" {...props} />,
    Select: ({ value, children, ...otherProps }) => {
        value = value || children[0];
        const [state, setState] = React.useState({ value: value });
        let options = children.map((v, i) => <option key={i}>{v}</option>)
        return <select
            className="wux-form-select"
            onChange={(e) => { setState(e.target.value) }}
            value={state.value}
            {...otherProps}
        >{options}</select>
    },
    Upload: props => <input className="wux-form-upload" type="file" {...props} />,
    Loading: ({ type, ...otherProps }) => {
        switch (type) {
            case "button":
                return <button className="wux-btn wux-loading" {...otherProps} />
            case "span":
                return <span className="wux-loading" {...otherProps} />
            default:
                break;
        }
    },
    Jumbotron: ({ before, title, subtitle, btn, after, ...otherProps }) => {
        let linkBtn = btn.map((v, i) => {
            const { type, children } = v[1].props;
            return <a href={v[0]} key={i} className={getClass('wux-btn', type)}  {...v[2]}>{children}</a>;
        })
        return <div className="wux-jumbotron" {...otherProps}>
            {before}
            <h1 className="wux-jumbotron-title">{title}</h1>
            <p className="wux-jumbotron-subtitle">{subtitle}</p>
            <div className="wux-jumbotron-btn-group">{linkBtn}</div>
            {after}
        </div>
    },
    JumbotronTitleBlod: ({ type, ...otherProps }) => {
        let Type = type.type;
        return <Type className='wux-jumbotron-title-bold' {...otherProps} />
    },
    List: ({ type, children, ...otherProps }) => {
        let group = children.map((v, i) => <li className={getClass(`wux-list-item`, type[i])} key={i}>{v}</li>);
        return <ul className="wux-list-group" {...otherProps}>{group}</ul>
    },
    Progress: ({ value, max, ...otherProps }) => <progress className="wux-progress" value={String(value)} max={String(max)}  {...otherProps} />,
    Tooltip: ({ btn = (<WuX.Button />), WuXType, text, children, ...otherProps }) =>
        <button className={`${getClass('wux-btn', btn.props.type)} wux-tooltip`} {...otherProps}>
            {children}
            <span className={`wux-tooltip-item wux-tooltip-item-${WuXType}`}>{text}</span>
        </button>,
    Table: ({ children, ...otherProps }) => {
        let head = [];
        for (const key in children) {
            head.push(key);
        }
        let body = [];
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
    Tag: ({ type, children, ...otherProps }) => <span className={getClass('wux-tag', type, (type && type.includes('close')))} {...otherProps}>{children}</span>,
    Badge: ({ children, ...otherProps }) => <span className="wux-badge" {...otherProps}>{children}</span>,
    Search: props => <input className="wux-search" {...props} />,
    Tab: ({ name, children, ...otherProps }) => {
        const [state, setState] = useState({ checked: "tab-0" });
        let tabs = name.map((v, i) => [
            <input
                className="wux-tab-item"
                type="radio"
                name="tab-ex"
                id={`tab-${i}`}
                checked={`tab-${i}` === state.checked}
                key={`tabs-input-${i}`}
                onChange={(e) => { setState({ checked: e.target.id }) }}
            />,
            <label
                className="wux-tab-item"
                htmlFor={`tab-${i}`}
                key={`tabs-label-${i}`}
            >{v}</label>,
            <div
                className="wux-tab-content"
                key={`tabs-div-${i}`}
            >{children[i]}</div>,
        ]);
        return <div className="wux-tab" {...otherProps}>{tabs}</div>
    },
    Blankslate: ({ icon, WuXTitle, subtitle, btn, ...otherProps }) => {
        let btnGroup = btn.map((v, i) => {
            const { type, children } = v[0].props;
            return <button key={i} className={getClass('wux-btn', type)}  {...v[1]}>{children}</button>;
        })
        return <div className="wux-blankslate" {...otherProps}>{icon}
            <h1 className="wux-blankslate-title">{WuXTitle}</h1>
            <p className="wux-blankslate-subtitle">{subtitle}</p>
            <div className="wux-blankslate-button-group">{btnGroup}</div>
        </div>
    },
    Typo: ({ children, ...otherProps }) => <div className="wux-typo" {...otherProps}>{children}</div>,
    Collapse: ({ summary, collapse, ...otherProps }) =>
        <details className="wux-collapse" {...otherProps}>
            <summary>{summary}</summary>
            <div>{collapse}</div>
        </details>,
}

export default WuX;

export const supports = (component) => WuX[component] === undefined;