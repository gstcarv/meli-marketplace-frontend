export type MeliCategoryResponse = {
    id: string;
    name: string;
    picture: string;
    total_items_in_this_category: number;
    attribute_types: string;
    attributable: boolean;
    date_created: string;
    path_from_root: Array<{
        id: string;
        name: string;
    }>;
};
