import {defineField, defineType} from 'sanity'

export const attraction = defineType({
  name: 'attraction',
  title: 'Attraction',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),
  ],
})
