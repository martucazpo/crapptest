# Add More Lessons

To add custom lessons to this app, make the markdown files with the same frontmatter as the FCC files. The following fields are necessary so that the app can find the expected file: id, title, dashedName. All the markdown files should go into a folder with a hyphon-separated-lowercase-name. This folder should in turn go into the src/contents folder in the **current development copy of the app** . Additionally, in the gatsby-config.js of the development app, add the following to the plugins array: 

```js

  {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "",  //name of folder with markdown goes here
        "path": `./src/content/` //name of folder with markdown goes here after /content/ must be followed by a "/"
        //example "./src/content/my-custom-lessons/"
      },
      __key: ""  //a unique name that describes the content
    }, 

```

After the content has been added to the development version of the gatsby app a new build can be made and added to the app shell.