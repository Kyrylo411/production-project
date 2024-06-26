import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextSize, TextTheme } from './Text'

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Title Text',
	text: 'Standard Text',
}

export const Error = Template.bind({})
Error.args = {
	title: 'Title Text',
	text: 'Standard Text',
	theme: TextTheme.ERROR,
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
	title: 'Title Text',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
	text: 'Standard Text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	title: 'Title Text',
	text: 'Standard Text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark = Template.bind({})
ErrorDark.args = {
	title: 'Title Text',
	text: 'Standard Text',
	theme: TextTheme.ERROR,
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
	title: 'Title Text',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
	text: 'Standard Text',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
	title: 'Title Text',
	text: 'Standard Text',
	size: TextSize.L,
}
