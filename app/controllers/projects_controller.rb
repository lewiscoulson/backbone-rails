class ProjectsController < ApplicationController
	respond_to :json

	def index
		@projects = Project.all
	end
end