# need to fix CSS not displaying on new session page
get '/' do
  erb :index
end

get '/sessions/new' do
  erb :sign_in
end

post '/sessions' do
  user = User.find_by_email(params[:email])
  if params[:password] == user.password
    session[:user_id] = user.id
    redirect '/'
  else
    flash[:error] = user.error.full_messages
    redirect '/'
  end
end

get '/paps' do
  @paps = current_user.paps.all
  erb :paps
end

post '/paps/create' do
  puts current_user[:email]
  Pap.create(
             process_name: params[:process_name],
             user_id: current_user.id
             )
  redirect '/paps'
end

get '/about' do
  erb :about
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

# get '/user/new' do
#   erb :sign_up
# end

post '/users/create' do
  user = User.new(params)
  user.save!
  session[:user_id] = user.id
  flash[:errors] = user.errors.full_messages

  redirect '/paps'
end


get "/paps/:process_name" do
  @pap = Pap.find_by_process_name(params[:process_name])

  erb :process
end







