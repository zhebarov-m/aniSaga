import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import React from 'react';

export const StyleDecorator = (StoryFn: StoryFn) => (
    <StoryFn />
);
