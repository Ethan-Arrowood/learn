import React from 'react';

const cdnAddrs = [
  'https://cdn.rawgit.com/brython-dev/brython/3.6.2/www/src/brython.js',
  'https://cdn.rawgit.com/brython-dev/brython/3.6.2/www/src/brython_stdlib.js'
];

const brython = cdnAddrs.map((address, i) => (
  <script key={`brython-${i}`} src={address} type="text/javascript" />
));

export default brython;
