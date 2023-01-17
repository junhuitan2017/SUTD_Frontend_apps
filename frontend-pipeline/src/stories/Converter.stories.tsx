import { ComponentStory, ComponentMeta } from '@storybook/react'

import Converter from '../components/Converter'

export default {
  title: 'Converter/AppComponents',
  component: Converter,
} as ComponentMeta<typeof Converter>

export const Primary: ComponentStory<typeof Converter> = () => <Converter />
