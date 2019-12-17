class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session

  before_action :current_user
  helper_method :signed_in?
  helper_method :current_user

  # protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find_by(id: session[:user_id].to_i) || nil
  end

  def sign_in(user)
    session[:user_id] = user.id
    @current_user = user
  end

  def sign_out
    @current_user = nil
    session[:user_id] = nil
  end

  def signed_in?
    @current_user.present?
  end

  def require_sign_in!
    redirect_to login_path unless signed_in?
  end

end
