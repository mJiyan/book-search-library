import { ReactNode } from "react"
import Error from "./Error"
import Loader from "./Loader"

export const APP_STATUS_DATA_TEST_ID = "app-status-test"

export interface AppStatusProp {
    isLoading?: boolean;
    isError?: boolean;
    children?: ReactNode;
    errorMessage?: string
}

const AppStatus = ({
    isLoading, isError, children, errorMessage
}: AppStatusProp): JSX.Element => {

    return <div data-testid={APP_STATUS_DATA_TEST_ID}>
        {isLoading && !isError && <Loader />}
        {isError && <Error errorMessage={errorMessage} />}
        {children}
    </div>
}

export default AppStatus;
