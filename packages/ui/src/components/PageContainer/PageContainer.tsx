import { PropsWithChildren } from 'react';
import { Container } from './styled';

export const PageContainer = ({ children }: PropsWithChildren) => {
    return <Container>{children}</Container>;
};
