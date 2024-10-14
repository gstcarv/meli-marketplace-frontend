import { useContext } from 'react';
import { ViewStateContext } from '../context/ViewStateContext';

export function useViewState() {
    return useContext(ViewStateContext);
}
