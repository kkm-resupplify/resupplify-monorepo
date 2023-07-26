module.exports = {
  source: ['packages/shared/design-system/src/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`Do not edit directly, this file was auto-generated`];
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'packages/shared/design-system/tokens/',
      prefix: 'figma',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
};