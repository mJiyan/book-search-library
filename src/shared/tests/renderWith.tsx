import React from "react";

import { Form, Formik } from "formik"
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from "@testing-library/react";

import { MockStoreEnhanced } from "redux-mock-store";
import { MemoryHistory } from "history";

type AppProvider = ({
    children
}: {
    children?: JSX.Element
}) => JSX.Element

type WithFormik = (
    initialValues: Record<string, unknown>,
    handleSubmit: () => void
) => AppProvider

export const withFormik: WithFormik = (
    initialValues: Record<string, unknown>,
    handleSubmit: () => void
) => (
    { children }
) => (
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                {children}
            </Form>
        </Formik>
    )

type WithRedux = (
    store: MockStoreEnhanced<any, {}>,
    history: MemoryHistory<unknown>
) => AppProvider

export const withRedux: WithRedux = (
    store: MockStoreEnhanced<any, {}>,
    history: MemoryHistory<unknown>
) => (
    { children }
) => (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    {children}
                </Switch>
            </Router>
        </Provider>
    )

type RenderWithProviders = (
    ui: React.ReactElement,
    providers?: AppProvider[],
    options?: Omit<RenderOptions, "queries">
) => RenderResult

export const renderWithProviders: RenderWithProviders = (
    ui,
    providers = [],
    options = {}
) => {
    const finalUI = providers.reduce(
        (acc: JSX.Element, provider: AppProvider) => provider({ children: acc }),
        ui
    );
    return render(finalUI, options)
}
