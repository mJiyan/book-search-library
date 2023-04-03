import { BookListWrapper, FullPageBox } from 'src/ui-library';
import { Maybe } from 'src/types';
import { BookSearchResultType } from 'src/redux/actions/Book/types';

import { BookCard, BlankListPage } from './components';

const BookList = ({ books }: { books: Maybe<BookSearchResultType> }) => (
  <BookListWrapper>
    {books?.length ? books.map((book) =>
      <BookCard key={book.key} bookKey={book.key} title={book.title} coverImage={book.coverImage} />
    ) : (
      <BlankListPage />
    )}
  </BookListWrapper>
);

export default BookList;
