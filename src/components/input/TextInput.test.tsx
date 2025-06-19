import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextInput from './TextInput'

describe('TextInput component test', () => {

    test('test input element', async () => {
        render(<TextInput />)
        
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()  
        expect(inputElement).toHaveValue('')
    })

    test('test input event', async () => {
        const user = userEvent.setup()

        render(<TextInput />)

        const inputElement = screen.getByRole('textbox')

        await user.type(inputElement, 'Hello World')
        expect(inputElement).toHaveValue('Hello World')
        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })
})