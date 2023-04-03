import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withFormik } from 'src/shared/tests'

import Input, { InputProps } from './Input'

const handleSubmit = jest.fn();
const initialValues = { search: "" }

const setUp = ({ id, name, type }: InputProps) => renderWithProviders(<Input id={id} type={type} name={name} />, [withFormik(initialValues, handleSubmit)])

describe(Input.name, () => {
    it("should render the component as expected", () => {
        setUp({ id: 'id', type: 'type', name: "name" })
        expect(screen.queryByPlaceholderText("Search books...")).toBeInTheDocument()
    })

})
