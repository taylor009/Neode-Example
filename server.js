'use strict';
const express = require('express');
const session = require('express-session');
const path    = require('path');

const neode = require('neode').fromEnv().withDirectory(path.join(__dirname, 'models'));

const app = express();


app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));
