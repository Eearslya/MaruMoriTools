Rails.application.routes.draw do
  root "static#wallpaper"

  get "/wallpaper", to: "static#wallpaper", as: "wallpaper"

  get "api/known-kanji", to: "api#known_kanji"
end
