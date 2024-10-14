import { render, screen } from '@testing-library/react';
import { ViewStateContextType } from './context/ViewStateContext';
import { ViewState } from './ViewState';

describe('<ViewState />', () => {
    const ComponentStub = (props: ViewStateContextType) => (
        <ViewState {...props}>
            <ViewState.Empty>empty-content</ViewState.Empty>

            <ViewState.Error>error-content</ViewState.Error>

            <ViewState.Loading>loading-content</ViewState.Loading>

            <ViewState.Success>success-content</ViewState.Success>
        </ViewState>
    );

    it('should render loading', () => {
        const { container } = render(<ComponentStub isLoading />);

        expect(screen.getByText('loading-content')).toBeInTheDocument();
        expect(screen.queryByText('success-content')).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should render error', () => {
        const { container } = render(<ComponentStub isError />);

        expect(screen.getByText('error-content')).toBeInTheDocument();
        expect(screen.queryByText('success-content')).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should render empty', () => {
        const { container } = render(<ComponentStub isEmpty />);

        expect(screen.getByText('empty-content')).toBeInTheDocument();
        expect(screen.queryByText('success-content')).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should render success', () => {
        const { container } = render(<ComponentStub />);

        expect(screen.queryByText('success-content')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
