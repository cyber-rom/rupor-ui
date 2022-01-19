// Чтобы создать базовую структура файлов компонента введите в консоль комаду "node createComponent НазваниеКомнонента"

const fs = require("fs");

const componentName = process.argv[2];

const storiesTemplate = `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${componentName} } from './${componentName}';

export default {
  title: 'Example/${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Example = Template.bind({});
Example.args = {

};
`;

const componentTemplate = `import React from 'react';
import { ${componentName}Props } from './${componentName}.types';

export const ${componentName} = (props: ${componentName}Props) => {
  console.log(props);
  return (
    <div>Hello ${componentName}</div>
  );
};
`;

const typesTemplate = `export interface ${componentName}Props {

}
`;

const StyledExample = "export const StyledExample = styled.div``;";

const stylesTemplate = `import styled from 'styled-components';
// import { vars } from '../../styles';

${StyledExample}
`;

fs.mkdir(`src/components/${componentName}`, { recursive: false }, (err) => {
  if (err) throw err;

  console.log('Dir created...');
  fs.writeFile(
    `src/components/${componentName}/${componentName}.tsx`,
    componentTemplate,
    'utf8',
    (err) => {
      if (err) throw err;
  
      console.log('Component created...');

      fs.writeFile(
        `src/components/${componentName}/${componentName}.stories.tsx`,
        storiesTemplate,
        'utf8',
        (err) => {
          if (err) throw err;
      
          console.log('Stories created...');

          fs.writeFile(
            `src/components/${componentName}/${componentName}.style.ts`,
            stylesTemplate,
            'utf8',
            (err) => {
              if (err) throw err;
          
              console.log('Styles created...');

              fs.writeFile(
                `src/components/${componentName}/${componentName}.types.ts`,
                typesTemplate,
                'utf8',
                (err) => {
                  if (err) throw err;
              
                  console.log('Types created...');
    
                  fs.writeFile(
                    `src/components/${componentName}/index.ts`,
                    `export { ${componentName} } from './${componentName}';
`,
                    'utf8',
                    (err) => {
                      if (err) throw err;
                  
                      console.log('index created => DONE & Good luck :)');
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});