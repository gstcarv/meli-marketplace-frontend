import { AlertTriangleIcon } from '@meli/icons';
import { StatusFeedbackProps } from '../../../types';
import BaseStatus from '../../BaseStatus';

export const Error = (props: StatusFeedbackProps) => (
    <BaseStatus
        icon={props.icon || <AlertTriangleIcon size={64} />}
        title={props.title || 'Erro! Algo deu errado.'}
        message={
            props.message ||
            'Estamos enfrentando dificuldades técnicas no momento. Pedimos desculpas pelo inconveniente. Nossa equipe já está ciente do problema e trabalhando para resolvê-lo o mais rápido possível. Tente novamente mais tarde ou entre em contato com o suporte se o problema persistir. Agradecemos pela sua compreensão!'
        }
    />
);
