source 'https://rubygems.org'


gem 'rubygems-update', '~> 2.7'
gem 'rails', '5.2.0'
gem 'pg', '~> 0.18'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

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

ruby '2.4.1'
