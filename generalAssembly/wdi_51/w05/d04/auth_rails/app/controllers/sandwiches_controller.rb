class SandwichesController < ApplicationController
  before_action :authorize, except: [:index, :show]

  def index
    @sandwiches = Sandwich.all
  end

  def show
    @sandwich = Sandwich.find(params[:id])
  end

  def new
    @sandwich = Sandwich.new
  end

  def create
    @sandwich = current_user.sandwiches.new(sandwich_params)
    if @sandwich.save
      redirect_to sandwich_path(@sandwich)
    else
      redirect_to new_sandwich_path
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def sandwich_params
    params.require(:sandwich).permit(:bread, :cheese, :protein, :toasted)
  end
end
