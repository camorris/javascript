class ReviewsController < ApplicationController
  def new
    @the_new_review = Review.new
  end

  def create
    @review = Review.new
    @review.title = params[:review][:title]
    @review.body = params[:review][:body]
    @review.movie_id = params[:review][:movie_id]
    @movie = Movie.find(params[:review][:movie_id])
    if @review.save
      redirect_to @movie 
    else
      render :new
    end
  end
end
