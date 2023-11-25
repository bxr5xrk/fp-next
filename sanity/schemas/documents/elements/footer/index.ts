import { defineArrayMember, defineField } from 'sanity'

export const footer = defineField({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'phones',
      title: 'Phones',
      type: 'array',
      of: [{ type: 'string' }],
      validation: rule => [rule.required(), rule.unique()],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: rule => [rule.required(), rule.error()],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          preview: {
            select: {
              title: "url",
              media: "icon",
            },
          },
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url'
            })
          ]
        }
      ]
    })
  ],
})
