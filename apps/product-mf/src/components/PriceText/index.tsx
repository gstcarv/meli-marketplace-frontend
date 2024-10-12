import { useMemo } from 'react';
import { CentsText, Container, MainPriceText } from './styled';
import { formatCurrency } from '@meli/currency-utils';
import { ProductItem } from '@marketplace/bff';

type Props = {
    price: ProductItem['price'];
};

export const PriceText = ({ price }: Props) => {
    const currency = useMemo(() => {
        const formatted = formatCurrency(price.amount, {
            code: price.currency
        });

        const cents = formatted.slice(-2);
        const wholePart = formatted.slice(0, -3);

        return { cents, wholePart };
    }, []);

    return (
        <Container>
            <MainPriceText>{currency.wholePart}</MainPriceText>
            <CentsText>{currency.cents}</CentsText>
        </Container>
    );
};
