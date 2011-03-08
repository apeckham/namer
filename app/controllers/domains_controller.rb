require 'open-uri'

class DomainsController < ApplicationController
  def search
    render :text => open("http://domai.nr/api/json/search?q=#{URI.encode(params[:q])}").read, :content_type => "application/json"
  end
end
