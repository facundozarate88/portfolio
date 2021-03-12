import React from 'react';
import Loader from './loader';
import { LoaderProps, LoaderSize } from './loaderTypes';
import { Story , Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Portfolio/Loader/Default',
    component: Loader,
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
        color: { control: 'color', defaultValue: '#2f89d3' }
    },
    decorators: [(Story) => <div style={{ margin: '1em'}}><Story /></div>]
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

/* Default Spinner */
export const DefaultSpinnerSmall = Template.bind({});

DefaultSpinnerSmall.args = {
    size: LoaderSize.Small,
};

export const DefaultSpinnerMedium = Template.bind({});

DefaultSpinnerMedium.args = {
    size: LoaderSize.Medium,
    // { ...DefaultSpinnerSmall.args }
};

export const DefaultSpinnerLarge = Template.bind({});

DefaultSpinnerLarge.args = {
    size: LoaderSize.Large,
};