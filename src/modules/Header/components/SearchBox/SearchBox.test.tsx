import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import { wait } from 'src/shared/tests'

import SearchBox, { SearchBoxProps } from './SearchBox'

const handleSubmit = jest.fn();

const SEARCH_VALUE = "game of thrones"

const setUp = ({ onSubmitValue }: SearchBoxProps) => render(<SearchBox onSubmitValue={onSubmitValue} />)

describe(SearchBox.name, () => {
    it("should formik submit searched value to the form", async () => {
        setUp({ onSubmitValue: handleSubmit })

        const searchInput = screen.getByPlaceholderText("Search books...")
        const searchButton = screen.getByText("Search")

        await userEvent.type(searchInput, SEARCH_VALUE);
        await userEvent.click(searchButton)

        await wait(1000)
        expect(handleSubmit.mock.calls[0][0].search).toBe(SEARCH_VALUE)
    })
})
