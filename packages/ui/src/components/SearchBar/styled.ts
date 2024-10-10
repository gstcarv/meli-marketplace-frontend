import styled from 'styled-components';

export const SearchBarBase = styled.div`
    height: 40px;
    width: 40%;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.radii.get('xs1')};
    overflow: hidden;
    display: flex;

    .SearchBar__input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 0 ${({ theme }) => theme.spacing.get('md')};
        font-size: ${({ theme }) => theme.fontSize.get('body')};
        font-weight: ${({ theme }) => theme.fontWeight.get('thin')};

        &::placeholder {
            color: ${({ theme }) => theme.colors.get('gray-600')};
        }
    }
`;

export const SearchBarButton = styled.button`
    color: ${({ theme }) => theme.colors.get('gray-600')};
    background-color: ${({ theme }) => theme.colors.get('gray-100')};
    width: 46px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.get('gray-300')};
    }
`;
