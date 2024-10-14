import { createContext } from 'react';
import { ViewStateProps } from '../types';

export type ViewStateContextType = Pick<ViewStateProps, 'isEmpty' | 'isError' | 'isLoading'>;

export const ViewStateContext = createContext<ViewStateContextType>({} as ViewStateContextType);
