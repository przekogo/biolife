class ContactMailer < ApplicationMailer
  default from: 'biolife.natorski@gmail.com'
 
  def contact_email
    mail(to: 'przeroog@gmail.com', subject: 'Welcome to My Awesome Site')
  end
end