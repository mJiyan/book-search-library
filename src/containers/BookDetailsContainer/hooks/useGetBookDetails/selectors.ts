import { Maybe, BookDetailsProps } from "src/types";
import { BookDetailsResultType, BookSearchResultType } from "src/redux/actions/Book/types";

export const selectors = ({ book, books }: { book: Maybe<BookDetailsResultType>, books: Maybe<BookSearchResultType> }): Maybe<BookDetailsProps> => {
    const selectedBook: BookDetailsProps[] = []

    books?.map((element) => {
        if (element.key === book?.key)
            selectedBook.push({
                title: element.title ?? "",
                author: element.author ?? "",
                description: book?.description ?? "",
                coverImage: element.coverImage ?? "",
                publishDate: book?.publishDate ?? "",
            })
    })

    return selectedBook[0]
}
