const BookTitle: React.FC = ({ children }) => (
    <div className='flex justify-center'>
        <p className='text-tiny truncate'>
            {children}
        </p>
    </div>
)

export default BookTitle;
