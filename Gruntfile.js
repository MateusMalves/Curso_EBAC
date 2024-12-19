module.exports = function (grunt) {
    grunt.initConfig({
      less: {
        development: {
          files: {
            'dist/style.css': 'style.less',
          },
        },
      },
      uglify: {
        build: {
          src: 'script.js',
          dest: 'dist/script.min.js',
        },
      },
      watch: {
        styles: {
          files: ['style.less'],
          tasks: ['less'],
        },
        scripts: {
          files: ['script.js'],
          tasks: ['uglify'],
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['less', 'uglify', 'watch']);
  };
  