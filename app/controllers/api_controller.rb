require "net/http"

class ApiController < ApplicationController
  def known_kanji
    api_key = params[:key]

    uri = URI("https://public-api.marumori.io/known/kanji")
    request = Net::HTTP::Get.new(uri)
    request["Authorization"] = "Bearer #{api_key}"

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    return unless response.is_a?(Net::HTTPOK)

    render json: response.body
  end
end
