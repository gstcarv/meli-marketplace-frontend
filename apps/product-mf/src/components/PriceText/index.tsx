import { CentsText, Container, MainPriceText } from './styled';

export const PriceText = () => {
    return (
        <Container>
            <MainPriceText>R$ 1.980</MainPriceText>
            <CentsText>00</CentsText>
        </Container>
    );
};
