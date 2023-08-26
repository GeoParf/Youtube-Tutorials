import * as $ from 'jquery';
import Post from '@models/post';
import './styles/styles';
// import json from './assets/json.json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';

const post = new Post('Webpac Post Title');

$('pre').html(post.toString());

// console.log('Post to String:', post.toString());
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('SCV: ', csv);


