import { RefObject, useCallback } from 'react';
import { useQueryParamString } from 'react-use-query-param-string';

export function useHandleSearchSubmit() {
    const [searchText, setSearchText] = useQueryParamString('search', '');

    // receiving input ref to avoid unecessary renders
    const onSubmit = useCallback((inputRef: RefObject<HTMLInputElement>) => {
        return (event: React.FormEvent) => {
            event.preventDefault();

            if (!inputRef.current?.value) return;

            window.history.pushState({}, '', '/items');

            setSearchText(inputRef.current?.value || '');
        };
    }, []);

    return { searchText, onSubmit };
}
