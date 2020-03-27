source 'https://rubygems.org'


gem 'rubygems-update', '~> 2.7'
gem 'rails', '6.0.2.2'
gem 'pg'
gem 'sass-rails'
gem 'uglifier'
gem 'jquery-rails'
gem 'jbuilder'

gem 'bootstrap-sass'

gem 'puma'

gem 'figaro' # global variables in application.yml

gem 'haml'

gem 'font-awesome-sass' #icons

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :development, :integration, :staging do
  # rails console improvements
  gem 'wirble'
  gem 'hirb'
  gem 'awesome_print'

  gem 'seed_dump' #seed generator
  gem 'rspec-rails' #tests
  gem 'capybara'
  gem 'rspec-wait'
  gem 'selenium-webdriver'
end

gem 'rails_12factor'

ruby '2.6.3'
