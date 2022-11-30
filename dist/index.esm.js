import { jsxs, jsx } from 'react/jsx-runtime';
import Typography from '@mui/material/Typography';
import { createTheme, Button, ListItem, ListItemButton, ListItemText, Box, List } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import TextField from '@mui/material/TextField';

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

var theme = createTheme({
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
    return (jsxs(ThemeProvider, __assign({ theme: theme }, { children: [jsx(Typography, __assign({ variant: "h3", component: "h3" }, { children: props.text })), jsx(Button, __assign({ variant: "contained", color: "secondary" }, { children: "Button" }))] })));
};

var TextInput = function (props) {
    return (jsx(ThemeProvider, __assign({ theme: theme }, { children: jsx(TextField, { id: "outlined-required", label: props.placeholder, defaultValue: props.defaultText }) })));
};

var UnifyList = function (props) {
    var items = props.items.map(function (item, idx) {
        return (jsx(ListItem, __assign({ disablePadding: true }, { children: jsx(ListItemButton, { children: jsx(ListItemText, { primary: item.text }) }) }), idx));
    });
    return (jsx(ThemeProvider, __assign({ theme: theme }, { children: jsx(Box, __assign({ sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" } }, { children: jsx("nav", __assign({ "aria-label": "main mailbox folders" }, { children: jsx(List, { children: items }) })) })) })));
};

export { TextBox, TextInput, UnifyList };
