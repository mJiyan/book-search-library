import { BookDetails } from "src/modules"
import { GetBookDetailsProps } from "src/redux/actions"

import { useGetBookDetails } from "./hooks"

export type BookDetailsContainerProps = {
    match: {
        params: GetBookDetailsProps
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
    } = useGetBookDetails({ worksParameter });

    return (
        <BookDetails
            title={title}
            author={author}
            description={description}
            coverImage={coverImage}
            publishDate={publishDate}
            data-testid={"qwe"}
        />
    )
}

export default BookDetailsContainer
