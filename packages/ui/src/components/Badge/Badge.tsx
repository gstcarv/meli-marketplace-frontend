import { Colors } from '@meli/design-tokens';
import styled from 'styled-components';

type Props = {
    color?: Colors;
    label: string;
};

export const Badge = styled.div.attrs<Props>((props) => ({
    role: 'alert',
    'aria-label': props.label
}))`
    width: 22px;
    height: 22px;
    border-radius: ${({ theme }) => theme.radii.get('full')};
    background: ${({ color = 'primary-500', theme }) => theme.colors.get(color)};
    display: flex;
    justify-content: center;
    align-items: center;
`;
