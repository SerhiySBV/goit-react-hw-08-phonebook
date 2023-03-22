// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact'],
//     }),
//     addContact: builder.mutation({
//       query: contactInput => ({
//         url: '/contacts',
//         method: 'POST',
//         body: {
//           name: contactInput.name,
//           phone: contactInput.number,
//         },
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });
// export const {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
// } = contactApi;
