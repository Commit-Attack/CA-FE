import Test from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Test> = {
  component: Test,
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  name: 'Component/Test',
};
