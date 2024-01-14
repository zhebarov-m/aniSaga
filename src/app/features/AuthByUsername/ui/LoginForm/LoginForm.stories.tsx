import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { LoginForm } from 'app/features/AuthByUsername/ui/LoginForm/LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};
