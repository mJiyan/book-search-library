import { BookDetails } from "src/modules"
import { useGetBookDetails } from "./hooks"

type BookDetailsContainerProps = {
    match: {
        params: {
            worksParameter: string;
        }
    }
}

const BookDetailsContainer: React.FC<BookDetailsContainerProps> = (props) => {
    const { worksParameter } = props.match.params;
    const {
        title,
        author,
        description,
        coverImage,
        publishDate,
    } = useGetBookDetails(worksParameter);

    return (
        <BookDetails
            title={title}
            author={author}
            description={description}
            coverImage={coverImage}
            publishDate={publishDate}
        />
    )
}

export default BookDetailsContainer
