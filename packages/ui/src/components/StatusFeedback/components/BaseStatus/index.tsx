import { PropsWithChildren } from 'react';
import {
    ActionContainer,
    BaseStatusContainer,
    BaseStatusIconContainer,
    BaseStatusMessage,
    BaseStatusTitle
} from './styled';
import { BaseStatusProps } from './types';

export const BaseStatus = ({ icon, message, title, children }: PropsWithChildren<BaseStatusProps>) => (
    <BaseStatusContainer>
        <BaseStatusIconContainer>{icon}</BaseStatusIconContainer>

        <BaseStatusTitle>{title}</BaseStatusTitle>

        <BaseStatusMessage>{message}</BaseStatusMessage>

        {children && <ActionContainer>{children}</ActionContainer>}
    </BaseStatusContainer>
);

export default BaseStatus;
