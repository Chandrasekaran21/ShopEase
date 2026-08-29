import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({

        getProducts:builder.query({
            query: ()=>({

                url: PRODUCT_URL
            })
        }),
        getAllProducts: builder.query({

            query: (productId)=>({
                url: `${PRODUCT_URL}/${productId}`
            })
        })
    })
})


export const { useGetProductsQuery, useGetAllProductsQuery } = productApiSlice;