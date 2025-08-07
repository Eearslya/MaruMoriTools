Rails.application.routes.draw do
  root "static#wallpaper"

  get "api/known-kanji", to: "api#known_kanji"
end
