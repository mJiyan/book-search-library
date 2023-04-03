import { BOOK_COVER_IMAGE_API_URL } from "src/api/const";
import { ImageNotAvailabeIcon, ImageBox, ImageBoxWrapper } from "src/ui-library";


export type BookCoverImageCardProps = {
    coverImage?: string
}

const BookCoverImageCard = ({ coverImage }: BookCoverImageCardProps) => (
    <ImageBoxWrapper>
        {coverImage ?
            (
                <ImageBox props="
                    xl:h-full lg:h-full md:h-full sm:h-full xs:h-full
                    xl:w-full lg:w-full md:w-full sm:w-full xs:w-full
                ">
                    <img src={`${BOOK_COVER_IMAGE_API_URL}${coverImage}-L.jpg`} alt="coverImage" />
                </ImageBox>
            ) :
            (
                <ImageBox props="
                    bg-LightGray my-4
                    flex-col
                    xl:h-full lg:h-5/6 md:h-64 sm:h-64 xs:h-64
                    xl:w-full lg:w-full md:w-64 sm:w-64 xs:w-full
                ">
                    <ImageNotAvailabeIcon />
                    Cover image is not available
                </ImageBox>
            )
        }
    </ImageBoxWrapper>
)

export default BookCoverImageCard;