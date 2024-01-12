import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi asperiores aut beatae consequatur corporis fugiat
        fugit iure, libero natus nesciunt non quia quibusdam quidem repellat, sed vel velit voluptates.`,
    },
};

export const Dark: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi asperiores aut beatae consequatur corporis fugiat
        fugit iure, libero natus nesciunt non quia quibusdam quidem repellat, sed vel velit voluptates.`,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
