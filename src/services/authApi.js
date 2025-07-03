import { Apis } from "./api";

export const authApi = Apis.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/signup",
        method: "POST", // POST because we are sending users credentials
        body: body,
      }),
      invalidatesTags: [""],
    }),
    signin: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/signin",
        method: "POST", // POST because we are sending users credentials
        body: body,
      }),
      invalidatesTags: [""],
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "auth/forgot-password",
        method: "POST", // POST because we are sending users credentials
        body: body,
      }),
      invalidatesTags: [""],
    }),
  }),

  overrideExisting: false,
});

export const {
  useSigninMutation,
  useResetPasswordMutation,
  useSignupMutation,
} = authApi;
