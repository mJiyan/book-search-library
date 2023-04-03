import { ReactNode } from "react"
import Error from "./Error"
import Loader from "./Loader"

export interface AppStatusProps {
    isLoading?: boolean;
    isError?: boolean;
    children?: ReactNode;
    errorMessage?: string
}

const AppStatus = ({
    isLoading, isError, children, errorMessage
}: AppStatusProps): JSX.Element => {

    return <div>
        {isLoading && !isError && <Loader />}
        {isError && <Error errorMessage={errorMessage} />}
        {children}
    </div>
}

export default AppStatus;
