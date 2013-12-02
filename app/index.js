'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var CoffeeEmberGenerator = module.exports = function CoffeeEmberGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CoffeeEmberGenerator, yeoman.generators.Base);

CoffeeEmberGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [];

  this.prompt(prompts, function (props) {
    this.nameChoice = props.nameChoice;
    cb();
  }.bind(this));
};

CoffeeEmberGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/assets');
  this.mkdir('app/assets/stylesheets');
  this.mkdir('app/assets/images');
  this.mkdir('app/assets/sounds');
  this.mkdir('app/models');
  this.mkdir('app/controllers');
  this.mkdir('app/components');
  this.mkdir('app/views');
  this.mkdir('app/routes');
  this.mkdir('app/styles');
  this.mkdir('public');
  this.mkdir('app/templates');
  this.mkdir('app/templates/partials');
  this.mkdir('app/templates/components');

  this.copy('bootloader/initializer.coffee', 'bootloader/initializer.coffee');
  this.copy('bootloader/app.coffee', 'bootloader/app.coffee');
  this.copy('bootloader/controllers.coffee', 'bootloader/controllers.coffee');
  this.copy('bootloader/models.coffee', 'bootloader/controllers.coffee');
  this.copy('bootloader/views.coffee', 'bootloader/controllers.coffee');
  this.copy('bootloader/templates.coffee', 'bootloader/controllers.coffee');
  this.copy('bootloader/components.coffee', 'bootloader/controllers.coffee');
  this.copy('bootloader/routes.coffee', 'bootloader/controllers.coffee');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('Gruntfile.coffee', 'Gruntfile.coffee');
};

CoffeeEmberGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
