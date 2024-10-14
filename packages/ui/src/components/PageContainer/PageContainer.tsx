import { Container, ContentContainer, ContentHeader } from './styled';
import { PageContainerContentProps, PageContainerHeadingProps, PageContainerProps } from './types';

export const PageContainer = (props: PageContainerProps) => <Container {...props} />;

PageContainer.Content = (props: PageContainerContentProps) => <ContentContainer {...props} />;

PageContainer.Heading = (props: PageContainerHeadingProps) => <ContentHeader {...props} />;
