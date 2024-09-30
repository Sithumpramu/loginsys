import 'web-streams-polyfill';
const { TextEncoder, TextDecoder } = require('util');


global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
