source "https://rubygems.org"

########
# Core #
########

# The star of the show, our web application framework.
gem "rails", "~> 8.0.2"

# PostgreSQL integration.
gem "pg"
# Webserver that hosts our application and handles requests.
gem "puma"

##################
# Asset Pipeline #
##################

# Use HAML to build our view files.
gem "haml-rails"
# Use import maps for our application's javascript and CSS.
gem "importmap-rails"
# Rails' main asset pipeline.
gem "propshaft"
# Javascript library that provides easy, robust, and reusable controllers.
gem "stimulus-rails"
# Use TailwindCSS for our page styling.
gem "tailwindcss-rails"
# Javascript library that speeds up user navigation of the application.
gem "turbo-rails"

###########
# Utility #
###########

# Helps boot our application faster.
gem "bootsnap", require: false
# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing"
# Use JBuilder to easily and cleanly build out JSON responses.
gem "jbuilder"
# Provides a database-backed system for ActionCable.
gem "solid_cable"
# Provides a database-backed queue system that can survive restarts.
gem "solid_cache"
# Provides a database-backed job system that can enqueue jobs.
gem "solid_queue"
# Used as an HTTP/2 proxy.
gem "thruster", require: false
# Provides timezone information.
gem "tzinfo-data"

group :development, :test do
  # Static analysis for security vulnerabilities [https://brakemanscanner.org/]
  gem "brakeman", require: false
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri windows], require: "debug/prelude"
  # Ruby style linter
  gem "rubocop-rails", require: false
end

group :development do
  # Reload our pages live as we edit them.
  gem "hotwire-livereload"
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
end
