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
        # puts row.to_hash
        (name, age, gender, hobby) = *row
        puts age[1]
        user = User.new(name: name[1], age: age[1].to_i, gender: gender[1], hobby: hobby[1])
        # if user.save
        #   render json: user, status: :ok
        # else
        raise "error" unless user.save
      end
      render :json => { status: :ok }
    end
  rescue => e
    render status: 422, json: { status: 422, message: "some information is invalid or missing, please check your csv file" }
  end

  private

  def user_params
    params.(:user).permit(:file)
  end
end
