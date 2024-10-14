import { ComponentProps, PropsWithChildren } from 'react';

export type PageContainerProps = PropsWithChildren<ComponentProps<'div'>>;

export type PageContainerContentProps = PropsWithChildren<ComponentProps<'main'>>;

export type PageContainerHeadingProps = PropsWithChildren<ComponentProps<'div'>>;
