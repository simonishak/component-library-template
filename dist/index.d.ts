import React from 'react';

interface Props$1 {
    text: string;
}
declare const TextBox: React.FC<Props$1>;

interface Props {
    placeholder: string;
    defaultText: string;
}
declare const TextInput: React.FC<Props>;

export { TextBox, TextInput };
