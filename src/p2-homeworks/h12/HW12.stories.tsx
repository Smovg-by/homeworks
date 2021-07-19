// YourComponent.stories.ts | YourComponent.stories.tsx

import { Story, Meta, ComponentStory } from '@storybook/react';
import { HW12 } from './HW12';

import { ReduxStoreProviderDecorator } from '../../stories/decorator/ReduxStoreProviderdecorator';
import { currentThemeType } from '../h10/bll/switchThemeReducer';


export default {
    title: 'HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator],

} as Meta;

type HW12PropsType = {
    theme: currentThemeType
}

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HW12> = (args: HW12PropsType) => <HW12 {...args} />;

export const HW12_ = Template.bind({});
