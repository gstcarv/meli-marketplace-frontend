import { createViewStateStatus } from './components/ViewStateStatus';
import { ViewStateContext } from './context/ViewStateContext';
import { ViewStateProps } from './types';

export const ViewState = ({ children, ...props }: ViewStateProps) => (
    <ViewStateContext.Provider value={props}>{children}</ViewStateContext.Provider>
);

ViewState.Loading = createViewStateStatus((ctx) => ctx.isLoading);

ViewState.Error = createViewStateStatus((ctx) => ctx.isError);

ViewState.Empty = createViewStateStatus((ctx) => ctx.isEmpty);

ViewState.Success = createViewStateStatus((ctx) => !ctx.isEmpty && !ctx.isError && !ctx.isLoading);
