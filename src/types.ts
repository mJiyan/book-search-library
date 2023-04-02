export type Maybe<T> = T | null | undefined;

export type BookType = {
    key?: string;
    title?: string;
    author?: string;
    coverImage?: string;
    description?: string;
    publishDate?: string;
}

export type BookDetailsProps = Omit<BookType, "key">

export type UIComponentProp = { props?: string }
