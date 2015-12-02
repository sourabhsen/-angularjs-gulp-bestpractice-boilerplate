This project is developed for sole purpose of Demo

## Getting Started

First Install development dependencies, ensure you have nodejs installed and install the following tools:

[Gulp](http://gulpjs.com/) command line utility:

  `npm install -g gulp`

[Bower](http://bower.io/) command line utility:
  
  `npm install -g bower`

###Ensure node tools and gulp plugins are up to date:

  `npm install`

will install dependencies defined in **package.json** file

  `bower install`

will install front end dependencies defined in **bower.json** file.

## Tasks

- To see a list of options tasks and sub tasks

  `gulp`

- To build project files for development, serve browser and watch all project files:

  `gulp serve`


## Usage

### Node Modules
  
  - `/node_modules` is a dynamic directory where npm modules are installed.

  - `package.json` is the configuration file for npm modules.

### Bower
 
 - `/bower_components` is a dynamic directory where bower components are installed.

 -  `bower.json` is the configuration file for your bower components.


### Application files

The `/src` directory should contain all the files needed for the application.

  - `src/app` all files related to the application.

    - `src/app/modules` modules that are dependencies of the `easy sign` module.

    - `src/app/views` `easy sign` views.

  - `src/assets` all `easy sign` images.

  - `src/sass` top level styles for `easy sign`.

    - `src/sass/styles.scss` all SASS files should be imported through here.
