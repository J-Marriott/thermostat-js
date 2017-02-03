require 'sinatra'
require 'json'

set :public_folder, 'public'

get '/' do
  redirect '/index.html'
end

post '/settings' do
  content_type :json
  settings = JSON.parse(request.body.read.to_s)
  File.open("public/src/settings.json","w") do |f|
    f.write(settings.to_json)
  end
  redirect '/index.html'
end
