class ContactMailer < ApplicationMailer
  default from: 'biolife.natorski@gmail.com'
 
  def contact_email(params)
    @params = params
    mail(to: 'przeroog@gmail.com', subject: 'Kontakt przez stronę od ' + params[:name], from: params[:email])
  end
end