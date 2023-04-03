const BOOK_API_URL = 'https://openlibrary.org/';

export const BOOK_COVER_IMAGE_API_URL = 'https://covers.openlibrary.org/b/id/';

export enum HTTP {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
};

export const BOOK_API_END_POINT: string = process.env.BOOK_API_URL || BOOK_API_URL;

export const MAX_REVIEW_FILES_SIZE = 50 * 1024 * 1024; // MB
