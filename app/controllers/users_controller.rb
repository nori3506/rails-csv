class UsersController < ApplicationController
  require "csv"

  def index
    @users = User.all
    render :json => @users
  end

  def create
    file_path = params["file"].tempfile
    # puts CSV.parse(file_path, :headers => true)
    csv = CSV.read(file_path, :headers => true)
    User.transaction do
      csv.each do |row|
        puts " ******************************************"
        puts *row
        puts "*****************************************"
        # puts row.to_hash
        (name, age, gender, hobby) = *row
        user = User.new(name: name[1], age: age[1].to_i, gender: gender[1].to_i, hobby: hobby[1])
        puts user
        # if user.save
        #   render json: user, status: :ok
        # else
        puts "errrrrrrooooo"
        render status: 500, json: { status: 500, message: "some information is invalid or missing, please check your csv file" } unless user.save!
      end
    end
  end

  private

  def user_params
    params.(:user).permit(:file)
  end
end
