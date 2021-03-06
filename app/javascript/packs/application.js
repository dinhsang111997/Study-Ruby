// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import '@fortawesome/fontawesome-free/css/all';
import * as ActiveStorage from '@rails/activestorage';
import Rails from '@rails/ujs';
import 'bootstrap/dist/css/bootstrap';
import 'bootstrap/dist/js/bootstrap';
import 'channels';
import Turbolinks from 'turbolinks';
require('stylesheets/application.scss');
Rails.start();
Turbolinks.start();
ActiveStorage.start();
