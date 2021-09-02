export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6130d747739c3ddc3fcf214e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fd7rkuw1',
                  apiId: 'df9e07b0-e005-439a-83a4-3a2188a17294'
                },
                {
                  buildHookId: '6130d74750bf21e680d7cc99',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mwjh7ym1',
                  apiId: '50c18597-b6b2-46da-99c0-58d0fef578da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dbartell/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mwjh7ym1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
