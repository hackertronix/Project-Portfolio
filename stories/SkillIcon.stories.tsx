import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import SkillIcon from '../app/components/SkillIcon';

export default {
  title: 'Components/SkillIcon',
  component: SkillIcon,
} as Meta;

const Template: Story = args => <SkillIcon {...args} />;

export const Compose = Template.bind({});
Compose.args = {
  path: './logo-compose.svg',
  width: 50,
  height: 50,
};

export const Swift = Template.bind({});
Swift.args = {
  path: './logo-swift.svg',
  width: 50,
  height: 50,
};

export const Kotlin = Template.bind({});
Kotlin.args = {
  path: './logo-kotlin.svg',
  width: 50,
  height: 50,
};

export const Next = Template.bind({});
Next.args = {
  path: './logo-nextjs.svg',
  width: 50,
  height: 50,
};

export const TypeScript = Template.bind({});
TypeScript.args = {
  path: './logo-typescript.svg',
  width: 50,
  height: 50,
};

export const SwiftUI = Template.bind({});
SwiftUI.args = {
  path: './logo-swiftui.png',
  width: 50,
  height: 50,
};
