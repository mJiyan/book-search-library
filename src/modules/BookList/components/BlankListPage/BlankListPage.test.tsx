import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';


import BlankListPage from './BlankListPage'


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = () => renderWithProviders(<BlankListPage />, [withRedux(store, history)])

describe(BlankListPage.name, () => {
    it("should render the component as expected", () => {
        setUp()
        expect(screen.queryByText("Search books")).toBeInTheDocument()
    })

})
