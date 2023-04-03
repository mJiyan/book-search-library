import { ReactNode } from "react";

const BookTitle = ({ children }: { children: ReactNode }) => (
    <div className='flex justify-center'>
        <p className='text-tiny truncate'>
            {children}
        </p>
    </div>
)

export default BookTitle;
