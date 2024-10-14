import { MagnifierIcon } from '@meli/icons';
import { StatusFeedbackProps } from '../../../types';
import BaseStatus from '../../BaseStatus';

export const SearchEmpty = (props: StatusFeedbackProps) => (
    <BaseStatus
        icon={props.icon || <MagnifierIcon size={64} />}
        title={props.title || 'Oops! Item não encontrado.'}
        message={
            props.message ||
            'Desculpe, mas não conseguimos encontrar o item que você está procurando. Por favor, verifique se digitou corretamente ou explore outras opções em nossa coleção. Você pode tentar buscar por outros itens que possam lhe interessar!'
        }
    />
);
