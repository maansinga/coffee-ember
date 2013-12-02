compilableSources=[
	'bootloader/*.coffee',
	'app/components/*.coffee',
	'app/controllers/*.coffee',
	'app/models/*.coffee',
	'app/routes/*.coffee',
	'app/views/*.coffee'
]
watchableSources=[
	'app/assets/stylesheets/*.scss',
	'app/assets/images/*.png',
	'app/assets/sounds/*.mp3',
	'app/components/*.coffee',
	'app/controllers/*.coffee',
	'app/models/*.coffee',
	'app/routes/*.coffee',
	'app/templates/*.hbs',
	'app/templates/partials/*.hbs',
	'app/templates/components/*.hbs',
	'app/views/*.coffee'
]

module.exports = (grunt)->
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-jshint'
	grunt.loadNpmTasks 'grunt-contrib-qunit'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		coffee:
			compileJoined:
				options:
					join: true
				files:
					'public/app.js': compilableSources
			compileWithMaps:
				options:
					sourceMap: true
				files:
					'public/app.js': compilableSources
	grunt.registerTask('default', ['coffee:compileJoined']);

