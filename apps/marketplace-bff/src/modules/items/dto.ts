export type Author = {
    name: string;
    lastname: string;
};

export type ProductItem = {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
    };
    picture?: string;
    condition: 'new' | 'used' | 'not_specified';
    free_shipping: boolean;
    sold_quantity?: number;
    description: string;
};
