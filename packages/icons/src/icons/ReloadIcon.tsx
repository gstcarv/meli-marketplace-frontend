import { IconProps } from '../types';

const ReloadIcon = (props: IconProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.size}
        height={props.size}
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon-reload'
        {...props}
    >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747' />
        <path d='M20 4v5h-5' />
    </svg>
);

export default ReloadIcon;
