import { renderHook } from '@testing-library/react-hooks';
import React, { FormEvent } from 'react';
import { useHandleSearchSubmit } from '../useHandleSearchSubmit';

const mockSetSearchText = jest.fn();

jest.mock('react-use-query-param-string', () => {
    return {
        __esModule: true,
        useQueryParamString: () => ['', mockSetSearchText]
    };
});

describe('useHandleSearchSubmit', () => {
    it('should set query params value on submit event received', () => {
        const { result } = renderHook(() => useHandleSearchSubmit());

        const mockInputRef = { current: { value: 'mock-value' } } as React.RefObject<HTMLInputElement>;

        result.current.onSubmit(mockInputRef)({ preventDefault: () => {} } as FormEvent);

        expect(mockSetSearchText).toHaveBeenCalledWith('mock-value');
    });

    it('should do nothing if no value provided on search', () => {
        mockSetSearchText.mockClear();

        const { result } = renderHook(() => useHandleSearchSubmit());

        const mockInputRef = { current: { value: '' } } as React.RefObject<HTMLInputElement>;

        result.current.onSubmit(mockInputRef)({ preventDefault: () => {} } as FormEvent);

        expect(mockSetSearchText).not.toHaveBeenCalled();
    });
});
