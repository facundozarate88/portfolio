import React from 'react';
import Loader from '../loader';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoaderProps, LoaderSize, LoaderType } from '../loaderTypes';

export default {
    title: 'Portfolio/Loader/FoldingCube',
    component: Loader,
    args: {
        type: LoaderType.FoldingCube,
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: [
                    LoaderSize.Small,
                    LoaderSize.Medium,
                    LoaderSize.Large,
                ],
            },
        },
        color: { control: { type: 'color' } }
    },
    decorators: [(Story) => <div style={{ margin: '1em'}}><Story /></div>]
} as Meta;


const Template: Story<LoaderProps> = args => <Loader {...args} />;

/* Bounce Spinner */

export const FoldingCubeSmall = Template.bind({});

FoldingCubeSmall.args = {
    size: LoaderSize.Small,
};

export const FoldingCubeMedium = Template.bind({});

FoldingCubeMedium.args = {
    size: LoaderSize.Medium,
};

export const FoldingCubeLarge = Template.bind({});

FoldingCubeLarge.args = {
    size: LoaderSize.Large,
};