import { TruckIcon } from '@meli/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'core/Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Badge>;

export const Primary: StoryObj<typeof meta> = {
    args: {
        children: (
            <TruckIcon size={11} color='#ffffff' />
        ),
        label: 'Badge example',
        color: 'accent-500'
    }
};

export const Accent: StoryObj<typeof meta> = {
    args: {
        children: (
            <TruckIcon size={11} color='#ffffff' />
        ),
        label: 'Badge example',
        color: 'primary-500'
    }
};

export const Success: StoryObj<typeof meta> = {
    args: {
        children: (
            <TruckIcon size={11} color='#ffffff' />
        ),
        label: 'Badge example',
        color: 'success-500'
    }
};

export default meta;
