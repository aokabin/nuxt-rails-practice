class ItemsController < ApplicationController
  before_action :authenticate_request!

  def index
    data = [
      {
        name: "バナナ",
        price: 200
      },
      {
        name: "ぶどう",
        price: 300
      },
      {
        name: "りんご",
        price: 100
      }
    ]

    render :json => data
  end
end
