import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/ReduxProvider/config/store';
import { StateSchema } from 'app/providers/ReduxProvider/config/StateSchema';

interface ReduxProviderProps {
    children?: ReactNode,
    initialState?: StateSchema
}

export const ReduxProvider = (props: ReduxProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
