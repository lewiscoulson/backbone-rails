class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	@users = Project.all
  	gon.rabl "app/views/projects/index.json.rabl", as: "projects"
  end
end
