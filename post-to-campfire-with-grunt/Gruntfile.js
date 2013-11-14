module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    campfireapi: grunt.file.readJSON('campfire-settings.json'),
    http: {
      campfire: {
        url: 'https://discovergrunt.campfirenow.com/room/<%= campfireapi.room_id %>/speak.json',
        auth: {
          user: '<%= campfireapi.api_key %>',
          password: 'X'
        },
        headers: {
          'Content-Type': 'application/json',
          // This information will be used by 37signals to get in touch with you in case you're doing something very wrong (or very awesome) with your app
          'User-Agent': 'Your name and company (http://example.com - you@example.com)'
        },
        method: 'POST',
        form: {
          message: 'This is an automated message posted by Grunt!'
        },
        dest: ''
      }
    }
  });

  grunt.loadNpmTasks('grunt-http');

  // This is an example task that does nothing apart from displaying a simple message
  grunt.registerTask('deploy', function() {
    grunt.log.ok('Deployment successful');
  });

  grunt.registerTask('deploy-with-notification', [
    'deploy',
    'http:campfire'
  ]);

};