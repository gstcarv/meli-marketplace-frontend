import { MagnifierIcon } from '@meli/icons';
import { StatusFeedback } from '@meli/ui';
import { Container } from './styled';

const SearchLanding = () => {
    return (
        <Container>
            <StatusFeedback.Base
                title='Pesquisa de Produtos'
                message='Digite palavras-chave como "celular" ou "roupa" na barra de pesquisa. Use filtros para refinar por preço e categoria. Confira avaliações para garantir uma boa compra!'
                icon={<MagnifierIcon size={64} />}
            />
        </Container>
    );
};

export default SearchLanding;
