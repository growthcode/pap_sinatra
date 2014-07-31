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
  if params[:password] == user.password
    session[:user_id] = user.id
    redirect '/psp'
  else
    flash[:error] = user.error.full_messages
    redirect '/'
  end
end

# get '/logout' do
#   user = User.find_by_email(params[:email])
#   @current_user.session.clear
#   sessions[:user_id] = nil
#   sessions.clear
#   redirect '/'
# end


delete '/logout' do
  session[:user_id] = nil
  redirect '/'
end

get '/user/new' do
  erb :sign_up
end

post '/users' do
  user = User.new(params)
  user.save!
  session[:user_id] = user.id
  flash[:errors] = user.errors.full_messages

  erb :psp
end







