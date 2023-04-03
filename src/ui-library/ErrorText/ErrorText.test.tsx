import {
    render,
    screen,
} from "@testing-library/react";

import ErrorText, { ErrorTextProps } from "./ErrorText";

const setUp = ({ errorMessage }: ErrorTextProps) => render(<ErrorText errorMessage={errorMessage} />)


describe(ErrorText.name, () => {
    it("should render the component as expected ", () => {
        setUp({ errorMessage: "errorMessage" })
        expect(screen.getByText("Error Occured:")).toBeTruthy();
        expect(screen.getByText("errorMessage")).toBeTruthy();
        expect(screen.getByText("Please contact with system administrator.")).toBeTruthy();
    })
})
