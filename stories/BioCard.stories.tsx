import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BioCard from '@/app/components/BioCard';

export default {
  title: 'Components/BioCard',
  component: BioCard,
} as Meta;

const Template: Story = (args) => <BioCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any props you want to pass to the BioCard component
};