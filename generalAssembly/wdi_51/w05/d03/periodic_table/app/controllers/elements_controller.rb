class ElementsController < ApplicationController
    def index
      @elements = Element.all
    end
  
    def show
      @element = Element.find(params[:id])
    end
  
    def new
      @element = Element.new
    end
  
    def create
      @element = Element.new(element_params)
      if @element.save
        redirect_to elements_path
      else
        redirect_to new_element_path
      end
    end
  
    def edit
      @element = Element.find(params[:id])
    end
  
    def update
      @element = Element.find(params[:id])
      if @element.update(element_params)
        redirect_to elements_path
      end
    end
  
    def destroy
        @element = Element.find(params[:id])
        if @Element.destroy
          redirect_to elements_path
    end
    end
  
    private # ruby method that keeps people from creating they own shit
  
    def element_params
      params.require(:element).permit(:name, :symbol, :proton_count, :chemical_property)
    end
  end
  

