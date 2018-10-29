class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
  end

  def show
    @quote = Quote.find(params[:id])
  end

  def new
    @quote = Quote.new
  end

  def create
    @quote = Quote.new (quote_params)
    if @quote.save
      redirect_to quotes_path
    else
      redirect_to new_quote_path
    end
  end

  def edit
    @quote = Quote.find(params[:id])
  end

  def update
    @quote = Quote.find(params[:id])
    if @quote.update(quote_params)
      redirect_to quotes_path
    end
  end

  def destroy
      @quote = Quote.find(params[:id])
      if @quote.destroy
        redirect_to quotes_path
  end
  end

  private # ruby method that keeps people from creating they own shit

  def quote_params
    params.require(:quote).permit(:topic, :body, :fp_pos)
  end
end
