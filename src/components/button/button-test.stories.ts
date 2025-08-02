import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./button";
import { BUTTON_SIZES, BUTTON_TYPE } from "./constants";
import { fn } from 'storybook/test';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        type: {
            control: {
                type: 'select',
                labels: Object.keys(BUTTON_TYPE)
            },
            options: Object.values(BUTTON_TYPE)
        }, size: {
            control: {
                type: 'select',
                labels: Object.keys(BUTTON_SIZES)
            },
            options: Object.values(BUTTON_SIZES)
        },
        onClick: fn()
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleOnClick = () => null;

export const TextButton: Story = {
    args: {
        label: 'Button',
        type: BUTTON_TYPE.text,
        onClick: handleOnClick
    },
};

export const ContainedButton: Story = {
    args: {
        label: 'Contained Button',
        type: BUTTON_TYPE.contained,
        onClick: handleOnClick
    },
};

export const OutlinedButton: Story = {
    args: {
        label: 'Outlined Button',
        type: BUTTON_TYPE.outlined,
        onClick: handleOnClick
    },
};

export const SmallSizeButton: Story = {
    args: {
        label: 'Small Button',
        size: BUTTON_SIZES.small,
        onClick: handleOnClick
    },
};

export const MediumSizeButton: Story = {
    args: {
        label: 'Medium Button',
        size: BUTTON_SIZES.medium,
        onClick: handleOnClick,
        isDisabled: true
    },
};

export const LargeSizeButton: Story = {
    args: {
        label: 'Large Button',
        size: BUTTON_SIZES.large,
        onClick: handleOnClick
    },
};

export const DisabledButton: Story = {
    args: {
        label: 'Disabled Button',
        isDisabled: true,
        onClick: handleOnClick
    },
};
