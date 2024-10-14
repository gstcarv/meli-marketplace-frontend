import { PropsWithChildren } from 'react';

export type ViewStateProps = PropsWithChildren<{
    /**
     * If is error
     */
    isError?: boolean;

    /**
     * If is empty
     */
    isEmpty?: boolean;

    /**
     * If is empty
     */
    isLoading?: boolean;
}>;
