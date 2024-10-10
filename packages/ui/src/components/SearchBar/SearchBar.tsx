import { SearchBarBase, SearchBarButton } from './styled';
import { SearchBarProps } from './types';
import { MagnifierIcon } from '@meli/icons';

export const SearchBar = ({ className, inputRef, ...props }: SearchBarProps) => {
    return (
        <SearchBarBase className={className}>
            <input
                className='SearchBar__input'
                placeholder='Pesquisar um item'
                maxLength={255}
                ref={inputRef}
                {...props}
            />

            <SearchBarButton type='submit' aria-label='Pesquisar'>
                <MagnifierIcon size={18} />
            </SearchBarButton>
        </SearchBarBase>
    );
};
