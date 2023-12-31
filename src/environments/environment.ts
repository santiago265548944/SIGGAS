// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://testlab.g-gis.com/GISDESAR/Siggas.WebApi/api/service',
  // apiUrl: 'http://localhost/Siggas.WebApi/api/service',
  fileUploadUrl: 'http://testlab.g-gis.com/siggas.ByteTransfer/api/service',
  outSrId: 3116,
  urlDojo: '/assets/agsjs',
  dbOwner: 'GISCARIBE',
  editorSeparator: '|',
  editorSeparator2: ','
};
