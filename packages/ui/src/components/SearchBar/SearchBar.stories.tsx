import type { Meta, StoryObj } from '@storybook/react';
import { PageContainer } from '../PageContainer/PageContainer';
import { SearchBar } from './SearchBar';

const meta = {
    title: 'forms/SearchBar',
    component: SearchBar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof PageContainer>;

export const Primary: StoryObj<typeof meta> = {
   
};


export default meta;
