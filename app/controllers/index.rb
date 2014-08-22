

# Index Page
# Index has sessions for creation

get '/' do

  erb :index
#*******# need to fix CSS not displaying on new session page
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

delete '/logout' do
  session[:user_id] = nil
  redirect '/'
end

post '/users/create' do
  user = User.new(params)
  user.save!
  session[:user_id] = user.id
  flash[:errors] = user.errors.full_messages

  redirect '/paps'
end

get '/users/oauth/:site' do
  if "linkedin" == params[:site]
    @oauth_link = API::LinkedIn.step1_auth_code_gen_redirect
    redirect @oauth_link
  else
  end

end


##############################################################

# gerneral info pages, not updated on their erbs

get '/about' do
  erb :about
end

##############################################################

# PAPS_ALL PAGE, lists all user's Paps in an <ul>

get '/paps' do
  @paps = current_user.paps.all
  erb :paps_all
end

post '/paps' do
  # puts current_user[:email]
  hethe = Pap.create(
            process_name: params[:process_name],
            user_id: current_user.id
            )
  p params
  p hethe
  redirect '/paps'
end

##############################################################

# a_process page where we make a many paps on a single process

get "/paps/:id" do
  @paps = Pap.find(params[:id])



  erb :a_process
end

post '/paps/:id' do
  p params

  pap = Action.new(
    acting_person_title: params[:acting_person_title],
    acting_person: params[:acting_person],
    action_statement: params[:action_statement],
    description: params[:description],
    priority: params[:priority],
    status: params[:status],
    pap_id: params[:id],
    )

    pap.step = pap.sibling_count + 1

    if pap.status != "complete"
      pap.status = "incomplete"
    end

  p pap.save
  # p pap
  # p params
  # @pap = Pap.find_by_process_name(params[:process_name])

  redirect "/paps/#{params[:id]}"


  # action = find_by_process_name(params[:process_name])
  # action = Action.new(params)
  # user.save!
  # session[:user_id] = user.id
  # flash[:errors] = user.errors.full_messages

end

put '/paps' do
  array = params[:action]
  p Action.update_order(array)

  content_type :json
  {action_id: params[:action]}.to_json
end

# ---------------------------------
# I below needed now?

# put '/paps/:id' do
  # pap = Pap.find(params[:id])
  # p params
  # pap.actions.each do |action_step|
  #   action_step.id == params["hook--order"]
  #   p action_step.step
  # end
  # do each comparison on the name "step_id" and compare it with the action_id and update the step with the data.
  # redirect "/paps/#{params[:id]}"
# end

# is above needed now?
# ----------------------------


