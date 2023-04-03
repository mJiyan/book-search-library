import { Link } from 'react-router-dom';

import { BOOK_COVER_IMAGE_API_URL } from 'src/api/const';
import { BookType } from "src/types";
import { BookCardWrapper, BookTitle, ImageNotAvailabeIcon, ImageBox, } from 'src/ui-library';

export type BookCardType = Omit<BookType, "author" | "key" | "description" | "publishDate"> & { bookKey?: string }

const BookCard = ({ bookKey, coverImage, title }: BookCardType) => (
    <BookCardWrapper key={bookKey}>
        <Link key={bookKey} to={`${bookKey}`}>
            {coverImage ?
                (
                    <ImageBox>
                        <img src={`${BOOK_COVER_IMAGE_API_URL}${coverImage}-M.jpg`} alt="coverImage" />
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
                {title ? title : "--Title is not available--"}
            </BookTitle>
        </Link>
    </BookCardWrapper>
);


export default BookCard;
