import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projekty',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Web App', value: 'webapp' },
          { title: 'Website', value: 'website' },
          { title: 'Mobile App', value: 'mobile' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Popis',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'technologies',
      title: 'Technologie',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'url',
      title: 'URL projektu',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Zvýrazněný projekt',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});