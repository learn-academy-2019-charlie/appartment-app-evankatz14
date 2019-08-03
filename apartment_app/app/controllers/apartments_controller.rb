class ApartmentsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        @apartments = Apartment.all
        render json: @apartments
    end 
    
    def create
        @apartment = Apartment.create(apartment_params)
         if @apartment.valid?
            render json: @apartment
         else
             render json: @apartment.errors, status: :unprocessable_entity
         end
    end 
    
    def update
        @apartment = Apartment.find(params[:id])
        @apartment.update(apartment_params)
        render json: @apartment 
    end 
    
    def destroy
        @apartment = Apartment.find(params[:id])
        @apartment.destroy
        render json: Apartment.all
    end 
    
    private
    
    def apartment_params
        params.require(:apartment).permit(:street_number, :street_name, :city, :zip_code, :state, :country)
    end 
end
