function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  } else return defaultValue;
}

function isReactElement(element) {
  return element.$$typeof === /*#__PURE__*/React.createElement("div", null).$$typeof;
}

const WuX = {
  Header: ({
    type,
    option,
    title,
    small,
    children,
    ...otherProps
  }) => {
    let optionGroup = option.map((v, i) => {
      if (v.constructor.toString().split(' ')[1].split('(')[0] === 'Object') {
        if (isReactElement(v)) {
          let Type = v.type;
          return /*#__PURE__*/React.createElement(Type, _extends({
            key: i
          }, v.props));
        } else {
          const {
            title,
            link,
            bold
          } = v;
          return /*#__PURE__*/React.createElement("a", {
            className: `wux-header-option${bold ? ' wux-header-option-bold' : ''}`,
            href: link,
            key: i,
            children: title
          });
        }
      } else return /*#__PURE__*/React.createElement(React.Fragment, null);
    });
    const returnElem = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", _extends({
      className: type ? getClass('wux-header', type) : 'wux-header'
    }, otherProps), /*#__PURE__*/React.createElement("span", {
      className: "wux-header-title"
    }, title), /*#__PURE__*/React.createElement("button", {
      className: "wux-header-small-option-group"
    }, small), /*#__PURE__*/React.createElement("span", {
      className: "wux-header-option-group"
    }, optionGroup)), children);
    return type === 'fixed' ? /*#__PURE__*/React.createElement("div", {
      className: "wux-header-fixed-margin"
    }, returnElem) : returnElem;
  },
  Container: props => /*#__PURE__*/React.createElement("div", {
    className: "wux-container"
  }, props.children),
  Row: props => {
    let type = props.size.constructor.toString().split(' ')[1].split('(')[0];

    switch (type) {
      case 'String':
        return /*#__PURE__*/React.createElement("div", {
          className: `wux-row-${props.size}-${props.number}`
        }, props.children);

      case 'Array':
        let className = '';
        props.size.forEach((_, i) => className += ` wux-row-${props.size[i]}-${props.number[i]}`);
        return /*#__PURE__*/React.createElement("div", {
          className: className.slice(1),
          disabled: props.disabled
        }, props.children);

      default:
        break;
    }
  },
  Col: ({
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("div", _extends({
    className: "wux-col"
  }, otherProps), children),
  Alert: props => {
    if (['icon', 'option-group'].includes(props.type)) return /*#__PURE__*/React.createElement("span", {
      className: `wux-alert-${props.type}`
    }, props.children);else return /*#__PURE__*/React.createElement("div", {
      className: `wux-alert wux-alert-${props.type}`
    }, props.children);
  },
  Button: ({
    WuXType,
    JSXType = /*#__PURE__*/React.createElement("button", null),
    ...otherProps
  }) => {
    const Type = JSXType.type;
    return /*#__PURE__*/React.createElement(Type, _extends({
      className: getClass('wux-btn', WuXType)
    }, otherProps));
  },
  ButtonGroup: ({
    type,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("div", _extends({
    className: getClass('wux-btn-group', type)
  }, otherProps)),
  Breadcrumb: props => {
    let type = props.item.constructor.toString().split(' ')[1].split('(')[0];

    switch (type) {
      case 'String':
        return /*#__PURE__*/React.createElement("ul", {
          className: "wux-breadcrumb"
        }, /*#__PURE__*/React.createElement("li", {
          className: "wux-breadcrumb-item"
        }, props.item));

      case 'Array':
        let breadcrumbItems = props.item.map((v, i) => /*#__PURE__*/React.createElement("li", {
          className: "wux-breadcrumb-item",
          key: i
        }, v));
        return /*#__PURE__*/React.createElement("ul", {
          className: "wux-breadcrumb"
        }, breadcrumbItems);

      default:
        break;
    }
  },
  Card: ({
    type = 'hover',
    header,
    body,
    footer,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("div", _extends({
    className: getClass('wux-card', type)
  }, otherProps), /*#__PURE__*/React.createElement("div", {
    className: "wux-card-header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "wux-card-body"
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "wux-card-footer"
  }, footer)),
  Dialog: ({
    id,
    header,
    body,
    cancel,
    footer,
    btn = /*#__PURE__*/React.createElement(WuX.Button, null),
    children,
    ...otherProps
  }) => {
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
        footerElement = footerBtn.map(V => /*#__PURE__*/React.createElement(V.type, _extends({
          type: "submit"
        }, V.props)));
        break;

      default:
        break;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, _extends({
      onClick: () => {
        document.getElementById(id).showModal();
      }
    }, btn.props), children), /*#__PURE__*/React.createElement("dialog", _extends({
      className: "wux-dialog",
      id: id
    }, otherProps), /*#__PURE__*/React.createElement("div", {
      className: "wux-dialog-header"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "wux-dialog-header-title"
    }, header)), /*#__PURE__*/React.createElement("div", {
      className: "wux-dialog-body"
    }, body), /*#__PURE__*/React.createElement("div", {
      className: "wux-dialog-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wux-dialog-footer-group"
    }, /*#__PURE__*/React.createElement("form", {
      method: "dialog"
    }, /*#__PURE__*/React.createElement(Cancel, _extends({
      onClick: () => {
        document.getElementById(id).close();
      }
    }, cancelBtn.props)), footerElement)))));
  },
  Dropdown: ({
    menu,
    btn = /*#__PURE__*/React.createElement(WuX.Button, null),
    children,
    ...otherProps
  }) => {
    let items = menu.map((v, i) => /*#__PURE__*/React.createElement("li", {
      className: "wux-dropdown-item",
      key: i
    }, v));
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "wux-dropdown"
    }, otherProps), /*#__PURE__*/React.createElement("button", _extends({
      className: `${getClass('wux-btn', btn.props.type)} wux-dropdown-trigger`
    }, btn.props), children), /*#__PURE__*/React.createElement("ul", {
      className: "wux-dropdown-menu"
    }, items));
  },
  Input: ({
    WuXSize,
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("input", _extends({
    className: `wux-form-input wux-form-input-${WuXSize}`,
    placeholder: children,
    type: "url"
  }, otherProps)),
  Textarea: ({
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("textarea", _extends({
    className: "wux-form-input wux-form-input-md",
    placeholder: children
  }, otherProps)),
  Check: ({
    checked = false,
    children,
    ...otherProps
  }) => {
    const [state, setState] = React.useState({
      checked: checked
    });
    return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", _extends({
      className: "wux-form-checks",
      type: "checkbox",
      checked: state.checked,
      onChange: () => {
        setState({
          checked: !state.checked
        });
      }
    }, otherProps)), children);
  },
  Radio: ({
    suffix = /*#__PURE__*/React.createElement("br", null),
    children,
    ...otherProps
  }) => {
    let Suffix = suffix.type;
    let radios = children.map((v, i) => [/*#__PURE__*/React.createElement("label", {
      key: `label-${i}`
    }, /*#__PURE__*/React.createElement("input", _extends({
      className: "wux-form-radios",
      type: "radio",
      name: "contact"
    }, otherProps)), v), i !== children.length - 1 && /*#__PURE__*/React.createElement(Suffix, _extends({
      key: `text-${i}`
    }, suffix.props))]);
    return /*#__PURE__*/React.createElement("form", null, radios);
  },
  Range: props => /*#__PURE__*/React.createElement("input", _extends({
    className: "wux-form-range",
    type: "range"
  }, props)),
  Select: ({
    value,
    children,
    ...otherProps
  }) => {
    value = value || children[0];
    const [state, setState] = React.useState({
      value: value
    });
    let options = children.map((v, i) => /*#__PURE__*/React.createElement("option", {
      key: i
    }, v));
    return /*#__PURE__*/React.createElement("select", _extends({
      className: "wux-form-select",
      onChange: e => {
        setState(e.target.value);
      },
      value: state.value
    }, otherProps), options);
  },
  Upload: props => /*#__PURE__*/React.createElement("input", _extends({
    className: "wux-form-upload",
    type: "file"
  }, props)),
  Loading: ({
    type,
    ...otherProps
  }) => {
    switch (type) {
      case "button":
        return /*#__PURE__*/React.createElement("button", _extends({
          className: "wux-btn wux-loading"
        }, otherProps));

      case "span":
        return /*#__PURE__*/React.createElement("span", _extends({
          className: "wux-loading"
        }, otherProps));

      default:
        break;
    }
  },
  Jumbotron: ({
    before,
    title,
    subtitle,
    btn,
    after,
    ...otherProps
  }) => {
    let linkBtn = btn.map((v, i) => {
      const {
        type,
        children
      } = v[1].props;
      return /*#__PURE__*/React.createElement("a", _extends({
        href: v[0],
        key: i,
        className: getClass('wux-btn', type)
      }, v[2]), children);
    });
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "wux-jumbotron"
    }, otherProps), before, /*#__PURE__*/React.createElement("h1", {
      className: "wux-jumbotron-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "wux-jumbotron-subtitle"
    }, subtitle), /*#__PURE__*/React.createElement("div", {
      className: "wux-jumbotron-btn-group"
    }, linkBtn), after);
  },
  JumbotronTitleBlod: ({
    type,
    ...otherProps
  }) => {
    let Type = type.type;
    return /*#__PURE__*/React.createElement(Type, _extends({
      className: "wux-jumbotron-title-bold"
    }, otherProps));
  },
  List: ({
    type,
    children,
    ...otherProps
  }) => {
    let group = children.map((v, i) => /*#__PURE__*/React.createElement("li", {
      className: getClass(`wux-list-item`, type[i]),
      key: i
    }, v));
    return /*#__PURE__*/React.createElement("ul", _extends({
      className: "wux-list-group"
    }, otherProps), group);
  },
  Progress: ({
    value,
    max,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("progress", _extends({
    className: "wux-progress",
    value: String(value),
    max: String(max)
  }, otherProps)),
  Tooltip: ({
    btn = /*#__PURE__*/React.createElement(WuX.Button, null),
    WuXType,
    text,
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("button", _extends({
    className: `${getClass('wux-btn', btn.props.type)} wux-tooltip`
  }, otherProps), children, /*#__PURE__*/React.createElement("span", {
    className: `wux-tooltip-item wux-tooltip-item-${WuXType}`
  }, text)),
  Table: ({
    children,
    ...otherProps
  }) => {
    let head = [];

    for (const key in children) {
      head.push(key);
    }

    let body = [];
    head = head.map((v, i) => {
      if (i === 0) children[v].forEach((value, index) => {
        body[index] = [];
        body[index][i] = /*#__PURE__*/React.createElement("th", {
          key: `th-${index}-${i}`
        }, value);
      });else children[v].forEach((value, index) => body[index][i] = /*#__PURE__*/React.createElement("td", {
        key: `td-${index}-${i}`
      }, value));
      return /*#__PURE__*/React.createElement("th", {
        key: `head-${i}`
      }, v);
    });
    return /*#__PURE__*/React.createElement("table", _extends({
      className: "wux-table wux-table-fluid"
    }, otherProps), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head)), /*#__PURE__*/React.createElement("tbody", null, body.map((v, i) => /*#__PURE__*/React.createElement("tr", {
      key: `body-${i}`
    }, v))));
  },
  Tag: ({
    type,
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("span", _extends({
    className: getClass('wux-tag', type, type && type.includes('close'))
  }, otherProps), children),
  Badge: ({
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("span", _extends({
    className: "wux-badge"
  }, otherProps), children),
  Search: props => /*#__PURE__*/React.createElement("input", _extends({
    className: "wux-search"
  }, props)),
  Tab: ({
    names,
    children,
    forEach,
    ...otherProps
  }) => {
    const [state, setState] = useState({
      checked: "tab-0"
    });
    let childrenContent = children;
    if (forEach) childrenContent = names.map(forEach);
    let tabs = names.map((v, i) => [/*#__PURE__*/React.createElement("input", {
      className: "wux-tab-item",
      type: "radio",
      name: "tab-ex",
      id: `tab-${i}`,
      checked: `tab-${i}` === state.checked,
      key: `tabs-input-${i}`,
      onChange: e => {
        setState({
          checked: e.target.id
        });
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "wux-tab-item",
      htmlFor: `tab-${i}`,
      key: `tabs-label-${i}`,
      children: v
    }), /*#__PURE__*/React.createElement("div", {
      className: "wux-tab-content",
      key: `tabs-div-${i}`,
      children: childrenContent[i]
    })]);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "wux-tab"
    }, otherProps), tabs);
  },
  Blankslate: ({
    icon,
    WuXTitle,
    subtitle,
    btn,
    ...otherProps
  }) => {
    let btnGroup = btn.map((v, i) => {
      const {
        type,
        children
      } = v[0].props;
      return /*#__PURE__*/React.createElement("button", _extends({
        key: i,
        className: getClass('wux-btn', type)
      }, v[1]), children);
    });
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "wux-blankslate"
    }, otherProps), icon, /*#__PURE__*/React.createElement("h1", {
      className: "wux-blankslate-title"
    }, WuXTitle), /*#__PURE__*/React.createElement("p", {
      className: "wux-blankslate-subtitle"
    }, subtitle), /*#__PURE__*/React.createElement("div", {
      className: "wux-blankslate-button-group"
    }, btnGroup));
  },
  Typo: ({
    children,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("div", _extends({
    className: "wux-typo"
  }, otherProps), children),
  Collapse: ({
    summary,
    collapse,
    ...otherProps
  }) => /*#__PURE__*/React.createElement("details", _extends({
    className: "wux-collapse"
  }, otherProps), /*#__PURE__*/React.createElement("summary", null, summary), /*#__PURE__*/React.createElement("div", null, collapse)),
  Utility: ({
    type,
    attr
  }) => {
    const Supports = ['text-align', 'vertical-align', 'bg-repeat', 'bg-position', 'bg-position-x', 'bg-position-y', 'bg-size', 'border-style', 'border-top-style', 'border-bottom-style', 'border-left-style', 'border-right-style', 'float', 'visibility'];
    const T = type.type;
    let style = {};

    for (let attrName in attr) if (!Supports.includes(attrName)) style[`--attr-custom-${attrName}`] = attr[attrName];

    return /*#__PURE__*/React.createElement(T, _extends({
      style: { ...style,
        ...type.props.style
      }
    }, attr, type.props));
  }
};
export default WuX;
export const supports = component => WuX[component] !== undefined;
