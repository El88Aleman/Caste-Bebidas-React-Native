import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "accounts:signUp?key=AIzaSyCS-LlNKM6TgHtz7PZn_imf9CYiTg7M8uo",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "accounts:signInWithPassword?key=AIzaSyCS-LlNKM6TgHtz7PZn_imf9CYiTg7M8uo",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
