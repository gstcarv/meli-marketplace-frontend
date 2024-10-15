import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../Skeleton/Skeleton';

const meta = {
    title: 'feedback/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Skeleton>;

export const Primary: StoryObj<typeof meta> = {
    args: {
        style: {
            height: 200,
            width: 500
        }
    }
};


export default meta;
