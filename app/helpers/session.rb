helpers do
  def current_user
    # TODO: return the current user if there is a user signed in.
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def logged_in?
    current_user
  end
end
