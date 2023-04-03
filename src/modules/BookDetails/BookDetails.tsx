import { BookDetailsProps } from "src/types";
import { BookDetailsWrapper, FullPageBox } from "src/ui-library";

import { BookCoverImageCard, BookInformationCard } from "./components";


const BookDetails = ({
    title,
    author,
    description,
    coverImage,
    publishDate,
}: BookDetailsProps) => (
    <FullPageBox props="py-4">
        <BookDetailsWrapper>
            <BookCoverImageCard coverImage={coverImage} />
            <BookInformationCard
                title={title}
                author={author}
                description={description}
                publishDate={publishDate}
            />
        </BookDetailsWrapper>
    </FullPageBox>
);

export default BookDetails;
