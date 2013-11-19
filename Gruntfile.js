// NK's angular-node Boilerplate
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({
    bowerConfig: './bower.json',
    yeoman: {
      // configurable paths
      app: 'app',
      dist: 'dist'
    },
    watch: {
      stylus: {
        files: [
          '<%= yeoman.app %>/styles/**/*.styl'
        ],
        tasks: ['stylus:dist']
      },
      livereload: {
        options: { livereload: true },
        files: [
          '<%= yeoman.app %>/**/*{png,.jpg,jpeg,gif,svg,js,css}',
          '.tmp/**/*{png,.jpg,jpeg,gif,svg,js,css}',
        ]
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '../.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    stylus: {
      options: {
        compress: false,
        linenos: true,
        'include css': true,
        paths: [
          '<%= yeoman.app %>/bower_components'
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          dest: '.tmp/styles',
          src: '{,*/}*.styl',
          ext: '.css'
        }]
      }
    },
    // Turns these blocks in html:
    //     <!-- includes: partials/view.html -->
    // Into an angular template block :)
    includes: {
      options: {
        includePath: '<%= yeoman.dist %>',
        includeRegexp: /^(\s*)<!--\s+includes:\s+(.*?)\s*-->/,
        template: '<script type="text/ng-template" id="{{fileName}}">' + '\n' +
                  '{{file}}' + '\n' +
                  '</script>'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: [
            'index.html',
            'partials/**/*.html',
            'views/**/*.html'
          ],
          dest: '<%= yeoman.dist %>/'
        }]
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {},
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html', 'partials/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'components/**/*',
            'images/{,*/}*.{gif,webp}',
            'styles/fonts/*',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: [
            'generated/*'
          ]
        }]
      }
    },
    concurrent: {
      server: {
        tasks: [
          'stylus:dist',
          'nodemon:dev',
          'watch',
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      test: [
        'stylus:dist'
      ],
      dist: [
        'stylus:dist',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    env: {
      dev: {
        src: '.env'
      }
    },
    nodemon: {
      dev: {
        options: {
          file: 'app.js',
          nodeArgs: []
        }
      }
    }
  });

  grunt.registerTask('server', function () {
    grunt.task.run([
      'clean:server',
      'concurrent:server',
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'copy:dist',
    'includes',
    'cdnify',
    'ngmin',
    'uglify',
    'rev',
    'usemin',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
