import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
            "https://caste-bebidas-react-nati-76ac6-default-rtdb.firebaseio.com",
    }),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (category) =>
                `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                console.log({ response });
                const data = Object.values(response);
                console.log({ data });
                // data --> [ {}, {}, {}, {}]

                const result = data.map((product) => {
                    const idsFirebase = Object.keys(response);
                    console.log({ idsFirebase });

                    idsFirebase.forEach((key) => {
                        console.log({ key });
                        product.idFirebase = key;
                        console.log({ id: product.idFirebase });
                    });
                    return { ...product };
                });

                console.log({ result });

                return result;
            },
        }),
        getCategories: builder.query({ query: () => "/categories.json" }),
        getProduct: builder.query({ query: (id) => `/products/${id}.json` }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery,
    useGetProductQuery,
} = shopApi;
