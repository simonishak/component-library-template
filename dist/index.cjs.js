'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('@mui/material/Typography');
var material = require('@mui/material');
var react = require('@emotion/react');
var TextField = require('@mui/material/TextField');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var theme = material.createTheme({
    palette: {
        primary: {
            main: "#009fdf",
            light: "#d2edfd",
            dark: "#002d72",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#ffffff",
            contrastText: "#009fdf",
            dark: "#002d72",
        },
        success: {
            main: "#7fba23",
        },
        warning: {
            main: "#ffcd00",
        },
        error: {
            main: "#a61731",
        },
    },
    typography: {
        allVariants: {
            fontFamily: "Whitney Book, Whitney SSM A, Whitney SSm B, Open Sans, Lato, Arial",
        },
    },
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "";
styleInject(css_248z);

var TextBox = function (props) {
    return (jsxRuntime.jsxs(react.ThemeProvider, __assign({ theme: theme }, { children: [jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "h3", component: "h3" }, { children: props.text })), jsxRuntime.jsx(material.Button, __assign({ variant: "contained", color: "secondary" }, { children: "Button" }))] })));
};

var TextInput = function (props) {
    return (jsxRuntime.jsx(react.ThemeProvider, __assign({ theme: theme }, { children: jsxRuntime.jsx(TextField__default["default"], { id: "outlined-required", label: props.placeholder, defaultValue: props.defaultText }) })));
};

var UnifyList = function (props) {
    var items = props.items.map(function (item, idx) {
        return (jsxRuntime.jsx(material.ListItem, __assign({ disablePadding: true }, { children: jsxRuntime.jsx(material.ListItemButton, { children: jsxRuntime.jsx(material.ListItemText, { primary: item.text }) }) }), idx));
    });
    return (jsxRuntime.jsx(react.ThemeProvider, __assign({ theme: theme }, { children: jsxRuntime.jsx(material.Box, __assign({ sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" } }, { children: jsxRuntime.jsx("nav", __assign({ "aria-label": "main mailbox folders" }, { children: jsxRuntime.jsx(material.List, { children: items }) })) })) })));
};

exports.TextBox = TextBox;
exports.TextInput = TextInput;
exports.UnifyList = UnifyList;
