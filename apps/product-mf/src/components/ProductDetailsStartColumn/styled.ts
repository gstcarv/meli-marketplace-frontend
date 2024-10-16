import { breakpoints } from '@meli/design-tokens';
import { Divider } from '@meli/ui';
import styled from 'styled-components';

export const Container = styled.section`
    padding: ${({ theme }) => theme.spacing.get('lg')};
    word-break: break-word;

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        padding: ${({ theme }) => theme.spacing.get('xs')};
    }
`;

export const DescriptionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.get('h6')};
    margin-bottom: ${({ theme }) => theme.spacing.get('lg')};
    font-weight: ${({ theme }) => theme.fontWeight.get('medium')};

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        margin-top: ${({ theme }) => theme.spacing.get('xl')};
        margin-bottom: ${({ theme }) => theme.spacing.get('sm')};
    }
`;

export const DescriptionText = styled.p`
    font-size: ${({ theme }) => theme.fontSize.get('body')};
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
    color: ${({ theme }) => theme.colors.get('gray-600')};
`;

export const PictureDivider = styled(Divider)`
    margin: ${({ theme }) => theme.spacing.get('lg')} 0;

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        margin: ${({ theme }) => theme.spacing.get('lg')} 0;
    }
`;
