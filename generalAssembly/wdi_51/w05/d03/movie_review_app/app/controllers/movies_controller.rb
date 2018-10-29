class MoviesController < ApplicationController
  def show
    @the_movie = Movie.find(params[:id])
  end
end
