module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {

      main: {
        options: {
          strictMath: true
        },
        files: {
          'assets/css/main.css': 'assets/less/main.less'
        }
      },

      minify: {
        options: {
          cleancss: true
        },
        files: {
          'assets/css/main.min.css': 'assets/css/main.css'
        }
      }

    },

    watch: {
      less: {
        files: 'assets/less/**/*.less',
        tasks: 'less'
      }
    }

  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('build', ['less'])
  grunt.registerTask('default', ['build'])

}