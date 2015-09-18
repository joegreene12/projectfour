require 'sinatra/base'

Dir.glob('./{controllers,models,helpers}/*.rb').each { |file| require file }
set :root, File.dirname(__FILE__)
map('/') { run HomeController }
map('/users') { run UsersController }
# map('/drakesongs') { run DrakesController }
