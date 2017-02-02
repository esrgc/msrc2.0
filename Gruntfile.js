module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/build/<%= pkg.name %>-dashboard.js',
        dest: 'public/build/<%= pkg.name %>-dashboard.min.js'
      }
    },
    less: {
      dev: {
        options: {
          paths: ['public/stylesheet']
        },
        files: {
          "public/build/style-<%= pkg.name %>.css": "public/stylesheet/style.less",
          "public/build/about-<%= pkg.name %>.css": "public/stylesheet/about.less"
        }
      },
      prod: {
        options: {
          paths: ["public/stylesheet"],
          plugins: [
              new(require('less-plugin-autoprefix'))({
                browsers: ["last 2 versions"]
              }),
              new(require('less-plugin-clean-css'))({})
            ]
          
        },
        files: {
          "public/build/style-<%= pkg.name %>.min.css": "public/stylesheet/style.less",
          "public/build/about-<%= pkg.name %>.min.css": "public/stylesheet/about.less"
        }
      }
    },
    concat: {
      options: {
        //separator: ';',
      },
      multi: {
        files: {
          'public/build/<%= pkg.name %>-dashboard.js': [
            'public/js/*.js',
            //'public/lib/*.js',
            '!**/npm.js'
          ]
        }
      }
    },
    watch: {
      js: {
        files: [
          'public/js/*.js',
          'public/js/**/*.js',
          'public/js/**/**/*.js'
        ],
        tasks: ['concat']
      },
      //browserify: {
        //files: ['public/js/*.js'],
        //tasks: ['bump', 'browserify:dev']
      //},
      css: {
        files: 'public/stylesheet/*.less',
        tasks: ['less']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'less', 'watch']);
  grunt.registerTask('production', ['concat', 'uglify', 'less:prod']);

};