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
        const data = Object.values(response);
        const result = data.map((product) => {
          const idsFirebase = Object.keys(response);
          idsFirebase.forEach((key) => {
            product.idFirebase = key;
          });
          return product;
        });
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
