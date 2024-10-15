import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'core/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof meta> = {
    args: {
        children: 'Click me'
    }
};

export default meta;
