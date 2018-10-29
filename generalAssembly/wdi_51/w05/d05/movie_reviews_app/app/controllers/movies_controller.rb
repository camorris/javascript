class MoviesController < ApplicationController
  def show
    @the_movie = Movie.find(params[:id])
  end
  def new
    @the_new_movie = Movie.new
  end
  def create
    @movie = Movie.new
    @movie.title = params[:movie][:title]
    @movie.year = params[:movie][:year]
    @movie.synopsis = params[:movie][:synopsis]
    @movie.genre = params[:movie][:genre]
    if @movie.save
      redirect_to @movie
    else
      render :new
    end
  end
end
