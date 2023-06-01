import React from 'react';
import { CounterComponent } from './Counter.js';

export default {
    component: CounterComponent,
    title: 'Counter',
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        border: false,
        borderColor: { control: 'color' }
    },
    args: {
        disabled: false,
        border: 0,

    }
};

export const Default = (args) => <CounterComponent {...args} />
