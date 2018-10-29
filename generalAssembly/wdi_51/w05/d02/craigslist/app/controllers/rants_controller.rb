class RantsController < ApplicationController
    def index
        @rants = Rant.all
    end
    def show
        
    end
end