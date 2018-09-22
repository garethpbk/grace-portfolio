const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const artTemplate = path.resolve(`src/components/art.js`);

    resolve(
      graphql(`
        {
          allContentfulGraceArt {
            edges {
              node {
                id
                name
                year
                size
                materials {
                  materials
                }
                image {
                  title
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allContentfulGraceArt.edges.forEach(edge => {
          console.log(edge.node.name);
          createPage({
            path: `/${edge.node.id}`,
            component: artTemplate,
            context: {
              edge,
            },
          });
        });
        return;
      })
    );
  });
};
