import { RefObject, useCallback } from 'react';
import { useQueryParamString } from 'react-use-query-param-string';

export function useHandleSearchSubmit() {
    const [searchText, setSearchText] = useQueryParamString('q', '');

    // receiving input ref to avoid unecessary renders
    const onSubmit = useCallback((inputRef: RefObject<HTMLInputElement>) => {
        return (event: React.FormEvent) => {
            setSearchText(inputRef.current?.value || '');

            event.preventDefault();
        };
    }, []);

    return { searchText, onSubmit };
}
