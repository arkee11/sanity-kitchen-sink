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
                  buildHookId: '5ecb76539424d3fa4b7fd0e7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f8e4fmrv',
                  apiId: '6b7eb725-4b11-4777-bdc1-59fd6acc425d'
                },
                {
                  buildHookId: '5ecb7653f5ea88e7edd6126b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a1rxjt76',
                  apiId: 'cfb8c6ee-41be-431a-b8b4-fc7af5236112'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arkee11/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a1rxjt76.netlify.app', category: 'apps'}
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
