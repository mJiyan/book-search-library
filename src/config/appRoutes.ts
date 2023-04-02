import { BookListContainer, BookDetailsContainer } from 'src/containers';

export interface AppRoutesType {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

const appRoutes: AppRoutesType[] = [
    { path: '/', name: "Book Search Page", component: BookListContainer, exact: true },
    { path: '/works/:worksParameter', name: "Book Detail Page", component: BookDetailsContainer, exact: false },
];

export default appRoutes
