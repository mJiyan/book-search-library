import { Link } from "react-router-dom";

import { BookType } from "src/types";
import { BookInformationWrapper } from "src/ui-library";


type BookInformationCardProps = Omit<BookType, "key" | "coverImage">

const BookInformationCard = ({
    title,
    author,
    description,
    publishDate,
}: BookInformationCardProps) => (
    <BookInformationWrapper>
        <h4 className="text-xl font-bold">
            {title}
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
        <button className="px-4 py-2 text-lg text-WhiteDark bg-DarkBlue rounded shadow 
        xl:w-1/3 lg:w-1/3 md:w-auto sm:w-auto xs:w-auto
    ">
            <Link to={"/"}>
                Back
            </Link>
        </button>
    </BookInformationWrapper>
)

export default BookInformationCard;
