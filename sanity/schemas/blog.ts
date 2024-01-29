import { of } from './../node_modules/acorn/dist/acorn.d';
export default {
    name:'blog',
    type:'document',
    title: 'Blog',
    fields:[
        {
        name: 'title',
        type: 'string',
        title:'Title of blog article'    
    },
    {
        name:'slug',
        type:'slug',
        title:"Slug of your article",
        options:{
            source:'title'
        }
    },
    {
        name:'titleImage',
        type:'image',
        tite:'Title Image'
    },
    {
        name:'smallDescription',
        type:'text',
        title:'Small description'
    },
    {
        name:'content',
        type:'array',
        title:'Content',
        of:[
            {
                type:'block'
            }
        ]
    }


    ]
}