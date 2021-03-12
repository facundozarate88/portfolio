import React from 'react';
import Loader from '../loader';
import { LoaderProps, LoaderSize, LoaderType } from '../loaderTypes';
import { Story , Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Portfolio/Loader/ChaseDot',
    component: Loader,
    args: {
        type: LoaderType.ChaseDot,
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
        color: { control: 'color', defaultValue: '#2f89d3' }
    },
    decorators: [(Story) => <div style={{ margin: '1em'}}><Story /></div>]
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

/* Chase Dot Spinner */
export const ChaseDotSmall = Template.bind({});

ChaseDotSmall.args = {
    size: LoaderSize.Small,
}

export const ChaseDotMedium = Template.bind({});

ChaseDotMedium.args = {
    size: LoaderSize.Medium,
}

export const ChaseDotLarge = Template.bind({});

ChaseDotLarge.args = {
    size: LoaderSize.Large,
}