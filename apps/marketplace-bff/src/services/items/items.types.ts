export type MeliItemResponse = {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: null;
    listing_type_id: string;
    sanitized_title: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: number;
    sale_price: {
        price_id: string;
        amount: number;
        conditions: {
            eligible: boolean;
            context_restrictions: string[];
            start_time: string;
            end_time: string;
        };
        currency_id: string;
        exchange_rate: null;
        payment_method_prices: any[];
        payment_method_type: string;
        regular_amount: number;
        type: string;
        metadata: {
            campaign_discount_percentage: number;
            campaign_end_date: string;
            discount_meli_amount: number;
            experiment_id: string;
            funding_mode: string;
            order_item_price: number;
            promotion_type: string;
            campaign_id: string;
            promotion_id: string;
            variation: string;
        };
    };
    shipping: {
        store_pick_up: boolean;
        free_shipping: boolean;
        logistic_type: string;
        mode: string;
        tags: string[];
        benefits: null;
        promise: null;
        shipping_score: number;
    };
};

export type MeliSiteItemsResponse = {
    results: MeliItemResponse[];
};
