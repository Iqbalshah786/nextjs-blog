import {createClient} from "next-sanity";

export const client = createClient({
    apiVersion: '2023-03-25',
    dataset:'production',
    projectId:'6dksdn71',
    useCdn:false,
    

})