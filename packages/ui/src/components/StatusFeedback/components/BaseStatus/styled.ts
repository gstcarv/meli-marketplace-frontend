import styled from 'styled-components';

export const BaseStatusContainer = styled.section`
    text-align: center;
    padding: ${({ theme }) => theme.spacing.get('xl')} 20%;
`;

export const BaseStatusIconContainer = styled.div`
    color: #000000;
`;

export const BaseStatusTitle = styled.h2`
    margin: 0;
    color: #000000;
    font-size: ${({ theme }) => theme.fontSize.get('h4')};
    font-weight: ${({ theme }) => theme.fontWeight.get('bold')};
    margin-top: ${({ theme }) => theme.spacing.get('md')};
    margin-bottom: ${({ theme }) => theme.spacing.get('xs')};
`;

export const BaseStatusMessage = styled.h3`
    color: ${({ theme }) => theme.colors.get('gray-600')};
    font-size: ${({ theme }) => theme.fontSize.get('caption')};
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
`;

export const ActionContainer = styled.h3`
    margin-top: ${({ theme }) => theme.spacing.get('md')};
`;
