import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://caste-bebidas-react-native-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) =>
        `/products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const data = Object.values(response);
        return data;
      },
    }),
    getCategory: builder.query({ query: () => "/categories.json" }),
    getProduct: builder.query({ query: (id) => `/products/${id}.json` }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetProductsByCategoryQuery,
  useGetProductQuery,
} = shopApi;
