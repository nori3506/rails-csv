class UsersController < ApplicationController
  require "csv"

  def index
    puts "unjkodddd"
    @users = User.all
    render :json => @users
  end

  def create
    file_path = params["file"].tempfile
    # puts CSV.parse(file_path, :headers => true)
    csv = CSV.read(file_path, headers: true)
    User.transaction do
      created_users = []
      csv.each do |row|
        # puts row.to_hash
        (name, age, gender, hobby, status) = *row

        next if is_deactive?(status[1])

        user = User.new(name: name[1], age: age[1].to_i, gender: gender[1], hobby: hobby[1], status: status[1])
        # if user.save
        #   render json: user, status: :ok
        # else
        raise "error" unless user.save
        created_users.push(user)
      end
      render json: { status: :ok, users: created_users }
    end
  rescue => e
    render status: 422, json: { status: 422, message: "some information is invalid or missing, please check your csv file" }
  end

  private

  def is_deactive?(status)
    status != "active"
  end

  def user_params
    params.(:user).permit(:file)
  end
end
