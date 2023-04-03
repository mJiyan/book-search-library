import { Link } from "react-router-dom";

import { BookType } from "src/types";
import { BookInformationWrapper, Button } from "src/ui-library";


export type BookInformationCardProps = Omit<BookType, "key" | "coverImage">

const BookInformationCard = ({
    title,
    author,
    description,
    publishDate,
}: BookInformationCardProps) => (
    <BookInformationWrapper>
        <h4 className="text-xl font-bold">
            {title ? title : "--Title is not available--"}
        </h4>
        <p className="mb-8 leading-normal overflow-auto h-auto shadow-sm max-h-32">
            {description ? description : "--Description is not available--"}
        </p>
        <p>
            <label className="font-bold">Author:</label>  {author ? author : "--Author information is not available--"}
        </p>
        <p className="pb-4">
            <label className="font-bold">Publish date:</label> {publishDate ? publishDate : "--Publish date information is not available--"}
        </p>
        <Button props="text-lg xl:w-1/3 lg:w-1/3 md:w-auto sm:w-auto xs:w-auto">
            <Link to={"/"}>
                Back
            </Link>
        </Button>
    </BookInformationWrapper>
)

export default BookInformationCard;
