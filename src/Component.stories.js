import React from 'react';
import { CounterComponent } from './index.js';

export default {
    component: CounterComponent,
    title: 'Counter'
};

export const Default = (args) => <CounterComponent {...args} />

export const Placeholder = () => <CounterComponent />;