
export type ErrorTextProps = {
    errorMessage?: string
}

const ErrorText = ({ errorMessage }: ErrorTextProps) => (
    <div className="border-l-4 border-DarkRedError p-4" role="alert">
        <p className="font-bold text-DarkRedError">Error Occured:</p>
        <p className="font-bold">{errorMessage}</p>
        <p>Please contact with system administrator.</p>
    </div>
)

export default ErrorText
