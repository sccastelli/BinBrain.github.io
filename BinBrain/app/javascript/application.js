// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "core-js/stable";
import "regenerator-runtime/runtime";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "../channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();