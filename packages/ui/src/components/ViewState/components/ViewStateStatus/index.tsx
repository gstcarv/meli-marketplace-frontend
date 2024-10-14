import { ViewStateContextType } from '../../context/ViewStateContext';
import { useViewState } from '../../hooks/useViewState';
import { ViewStateStatusProps } from './types';

export function createViewStateStatus(isActive: (ctx: ViewStateContextType) => boolean | undefined) {
    const ViewStateStatus = ({ children }: ViewStateStatusProps) => {
        const viewState = useViewState();

        if (!isActive(viewState)) return <></>;

        return <>{children}</>;
    };

    return ViewStateStatus;
}
