class ReviewsController < ApplicationController
    def new
        @review = Review.new
    end
    def create
        @review = Review.new
        @review.title = params[:review][:title]
        @review.body = params[:review][:body]
        @movie = Movie.find params[:review][:movie_id]
        @review.movie = @movie
        if @review.save
            redirect_to @movie
        else
            render :new
        end
    end
end