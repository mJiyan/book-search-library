import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"


import { renderWithProviders } from "src/shared/tests"
import { LOAING_SPINNER_TESTID } from 'src/ui-library/LoadingSpinner/LoadingSpinner';

import AppStatus, { AppStatusProps } from "./AppStatus";

const setUp = ({
    isLoading,
    isError,
    children,
    errorMessage,
}: AppStatusProps) => renderWithProviders(
    <AppStatus isLoading={isLoading} isError={isError} errorMessage={errorMessage}>
        {children}
    </AppStatus>,
    []
)

describe(AppStatus.name, () => {
    it("should render Error component children and errorMessage when 'isError=true' and 'isLoading=true'", () => {
        setUp({
            isError: true,
            isLoading: true,
            children: <div>test</div>,
            errorMessage: "errorMessage"
        })

        expect(screen.queryByText("test")).toBeInTheDocument()
        expect(screen.queryByText("errorMessage")).toBeInTheDocument()
        expect(screen.queryByTestId(LOAING_SPINNER_TESTID)).toBeFalsy();
    })

    it("should render not Error, Loading components and errorMessage but render children when 'isError=false' and 'isLoading=false'", () => {
        setUp({
            isError: false,
            isLoading: false,
            children: <div>test</div>,
            errorMessage: "errorMessage"
        })

        expect(screen.queryByText("test")).toBeInTheDocument()
        expect(screen.queryByText("errorMessage")).not.toBeInTheDocument()
        expect(screen.queryByTestId(LOAING_SPINNER_TESTID)).toBeFalsy();

    })

    it("should render Loading components and children when 'isError=false' and 'isLoading=true'", () => {
        setUp({
            isError: false,
            isLoading: true,
            children: <div>test</div>,
            errorMessage: "errorMessage"
        })

        expect(screen.queryByText("test")).toBeInTheDocument()
        expect(screen.queryByText("errorMessage")).not.toBeInTheDocument()
        expect(screen.queryByTestId(LOAING_SPINNER_TESTID)).toBeTruthy();
    })
})
