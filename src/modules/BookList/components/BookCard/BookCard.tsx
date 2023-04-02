import { Link } from 'react-router-dom';

import { BookType } from "src/types";
import { BookTitle, ImageNotAvailabeIcon, ImageBox, } from 'src/ui-library';

type BookCardType = Omit<BookType, "author" | "key" | "description" | "publishDate"> & { bookKey?: string }

const BookCard = ({ bookKey, coverImage, title }: BookCardType) => (
    <div key={bookKey} className="xl:w-40 lg:w-40 md:w-40 sm:w-24 xs:w-24">
        <Link to={`${bookKey}`}>
            {coverImage ?
                (
                    <ImageBox>
                        <img src={`https://covers.openlibrary.org/b/id/${coverImage}-M.jpg`} />
                    </ImageBox>
                ) :
                (
                    <ImageBox props="
                        bg-LightGray text-center flex-col font-small 
                        xl:p-4 lg:p-4 md:p-0 sm:p-0 xs:p-0
                    ">
                        <ImageNotAvailabeIcon />
                    </ImageBox>
                )
            }
            <BookTitle>
                {title}
            </BookTitle>
        </Link>
    </div>
);


export default BookCard;
