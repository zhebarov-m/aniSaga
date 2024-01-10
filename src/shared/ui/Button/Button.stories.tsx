import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, SizeButton, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND,
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
