import { BaseStatusContainer, BaseStatusIconContainer, BaseStatusMessage, BaseStatusTitle } from './styled';
import { BaseStatusProps } from './types';

export const BaseStatus = ({ icon, message, title }: BaseStatusProps) => (
    <BaseStatusContainer>
        <BaseStatusIconContainer>{icon}</BaseStatusIconContainer>

        <BaseStatusTitle>{title}</BaseStatusTitle>

        <BaseStatusMessage>{message}</BaseStatusMessage>
    </BaseStatusContainer>
);

export default BaseStatus;
