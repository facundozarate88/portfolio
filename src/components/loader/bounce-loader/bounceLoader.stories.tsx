import React from 'react';
import Loader from '../loader';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoaderProps, LoaderSize, LoaderType } from '../loaderTypes';

export default {
    title: 'Portfolio/Loader/Bounce',
    component: Loader,
    args: {
        type: LoaderType.Bounce,
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
export const BounceSpinnerSmall = Template.bind({});

BounceSpinnerSmall.args = {
    size: LoaderSize.Small,
};

export const BounceSpinnerMedium = Template.bind({});

BounceSpinnerMedium.args = {
    size: LoaderSize.Medium,
};

export const BounceSpinnerLarge = Template.bind({});

BounceSpinnerLarge.args = {
    size: LoaderSize.Large,
};