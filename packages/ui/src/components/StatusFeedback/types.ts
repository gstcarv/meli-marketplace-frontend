import { BaseStatusProps } from './components/BaseStatus/types';

export type StatusFeedbackProps = Partial<Omit<BaseStatusProps, 'children'>>;
