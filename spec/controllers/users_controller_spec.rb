require "rails_helper"

describe UsersController, type: :controller do
  describe "GET /index" do
    let!(:first_user) { create(:user) }
    let!(:second_user) { create(:user) }
    context "[Normal]自分が投稿したタイムラインを更新する場合" do
      it "return 200" do
        get "index"
        expect(response).to have_http_status(:success)
      end

      it "returns all users" do
        subject { get :index, format: :json }
        # get "index"
        expect(JSON.parse(response.body).size).to eq(2)
      end
    end
  end
end
