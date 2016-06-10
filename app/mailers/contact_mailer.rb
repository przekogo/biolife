class ContactMailer < ApplicationMailer
  default from: 'biolife.natorski@gmail.com'
 
  def contact_email(params)
    @params = params
    reciepent = (Rails.env=="production" ? 'biolife.natorski@gmail.com' : 'przeroog@gmail.com')
    mail(to: reciepent, subject: 'Kontakt przez stronę od ' + params[:name], from: params[:email])
  end
end