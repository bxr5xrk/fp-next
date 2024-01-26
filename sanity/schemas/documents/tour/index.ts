import { defineArrayMember, defineField, defineType } from 'sanity';

export const tour = defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
      default: true,
    },
    {
      name: "additional",
      title: "Additional",
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'short',
          title: 'Short title',
          type: 'string',
          validation: rule => rule.required(),
        },
        {
          name: 'long',
          title: 'Long title',
          type: 'string',
          validation: rule => rule.required(),
        },
      ],
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.short',
        maxLength: 96,
      },
      validation: rule => rule.required(),
      group: 'main',
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "USD",
          type: "number",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "UAH",
          type: "number",
          validation: (Rule) => Rule.required(),
        }
      ],
      group: 'additional',
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'start',
          title: 'Start',
          type: 'date',
          validation: rule => rule.required(),
        },
        {
          name: 'end',
          title: 'End',
          type: 'date',
          validation: rule => rule.required(),
        },
      ],
      group: 'additional',
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: rule => [rule.unique()],
      group: 'additional',
    }),
    defineField({
      name: "attractions",
      title: "Attractions",
      type: "array",
      of: [{ type: "reference", to: { type: "attraction" } }],
      validation: rule => [rule.unique()],
      group: 'additional',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'object',
      group: 'main',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'main',
          title: 'Main image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        }),
        defineField({
          name: 'additional',
          title: 'Additional images',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                }
              ]
            })
          ],
          validation: rule => [rule.unique()],
        })
      ]
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),    
  ],
  preview: {
    select: {
      title: 'title.short',
      subtitle: "title.long",
      media: 'images.main',
    },
    // prepare(selection) {
    //   const { author, slug } = selection
    //   return { ...selection, subtitle: author && slug && `by ${author}, link ${slug}` }
    // },
  },
});
