import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import React from 'react';

const meta = {
    title: 'core/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Breadcrumb>;

export const Primary: StoryObj<typeof meta> = {
    render: () => (
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
            <Breadcrumb.Item>iPhone 15 Pro Max</Breadcrumb.Item>
        </Breadcrumb>
    )
};

export default meta;
