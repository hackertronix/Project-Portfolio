import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import BioCard from '../app/components/BioCard';

export default {
  title: 'Components/BioCard',
  component: BioCard,
} as Meta;

const Template: Story = (args) => <BioCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any props you want to pass to the BioCard component
};