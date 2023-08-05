// contains all of the endpoints to work with the backend

import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        userLogin: builder.mutation({
            query: data => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        getUserInfo: builder.query({
            query: () => ({
                url: `${USERS_URL}/profile`,
                method: 'GET',
            })
        }),
        getPersonalHeath: builder.query({
            query: () => ({
                url: `${USERS_URL}/metrics`,
                method: 'GET'
            })
        }),
        getAppointments: builder.query({
            query: () => ({
                url: `${USERS_URL}/appointments`,
                method: 'GET'
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
    })

});

export const {
    useUserLoginMutation,
    useGetUserInfoQuery,
    useGetPersonalHeathQuery,
    useGetAppointmentsQuery,
    useLogoutUserMutation
} = usersApiSlice;


// Create our own endpoints in this file and it will inject them into the endpoints in the apiSlice file
// in our form, we just need to dispatch the login action and it will do the work

// Mutation is a specific type of state update operation that modifies the state in a Redux store
// slice is used for grouping
