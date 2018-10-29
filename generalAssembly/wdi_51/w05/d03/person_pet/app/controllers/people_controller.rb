class PeopleController < ApplicationController
  def index
    @people = Person.all
  end
  
  def show
    @the_person = Person.find(params[:id])
  end


end
