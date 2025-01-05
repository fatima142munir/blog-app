// sanity/pet.ts
export default {
    name: 'blogPost',
    type: 'document',
    title: 'blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'blogName'
        },
        {
            name: 'catName',
            type: 'string',
            title: 'category'
        },
        {
            name: 'summrey',
            type: 'string',
            title: 'blogSummrey'
        },
        {
            name: 'content',
            type: 'text',
            title: 'blogContent'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: '_id',
            }
        },
        {
            name: 'blockContent',
            title: 'BlockContent',
            type: 'array',
            of: [{ type: 'block' }]
        }
        // ,
        // {
        //     name: 'contentUrl',
        //     type: 'string',
        //     title: 'url'
        // }
    ]
}