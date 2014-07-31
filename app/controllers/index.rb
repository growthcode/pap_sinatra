# need to fix CSS not displaying on new session page

get '/' do
  erb :index
end

get '/psp' do
  erb :psp
end

get '/about' do
  erb :about
end

get '/sessions/new' do
  erb :sign_in
end

post '/sessions' do
  user = User.find_by_email(params[:email])
  if user.password == params[:password]
    session[:user_id] = user.id
    redirect :psp
  else
    redirect :index
  end
end

delete '/logout' do
  sessions[:user_id] = nil
  erb :index
end

get '/user/new' do
  erb :sign_up
end

post '/users' do
  user = User.new(params)
  user.save!
  session[:user_id] = user.id

  erb :psp
end







