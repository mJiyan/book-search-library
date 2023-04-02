import { ErrorText, ErrorIcon, FullPageBox } from "src/ui-library"

export interface ErrorProps {
    errorMessage?: string
}

const Error = ({ errorMessage }: ErrorProps): JSX.Element => (
    <FullPageBox props="z-10 absolute bg-VeryLightGray bg-opacity-80">
        <ErrorIcon />
        <ErrorText errorMessage={errorMessage} />
    </FullPageBox>
)

export default Error