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
                  buildHookId: '5fad1e948042f6a69531d529',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r31gso48',
                  apiId: '381b78eb-aa88-41b6-a49f-7ff1c1765cd8'
                },
                {
                  buildHookId: '5fad1e94f8c92ece452cbbea',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-65b7b5pf',
                  apiId: '127bdf1d-ae83-494c-bb04-c42a672c6be9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tochkazreniya/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-65b7b5pf.netlify.app', category: 'apps'}
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
