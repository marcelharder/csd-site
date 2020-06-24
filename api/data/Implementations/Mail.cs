
using csd.data.Interfaces;
using csd.data.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace csd.data.Implementations
{
    public class Mail : IEmail
    {
        public void sendMail(ContactMessage cm)
        {
            MimeMessage message = new MimeMessage();

            MailboxAddress from = new MailboxAddress("contactMessage", "marcelharder11@gmail.com");
            message.From.Add(from);

            MailboxAddress to = new MailboxAddress("marcel", "marcelharder@protonmail.com");
            message.To.Add(to);

            message.Subject = cm.subject + " request";

            BodyBuilder bb = new BodyBuilder();
            bb.TextBody = "Our user at " + cm.workemail + "wrote the following " + cm.message;

            message.Body = bb.ToMessageBody();

            SmtpClient client = new SmtpClient();
            client.Connect("web16.foxxl.com",465,true);
             
           // client.Authenticate("lmztffifuhujwnwd",null);
           client.Authenticate("postmaster@tds-nederland.nl","bKf2?8h8");


            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
           
        }
    }
}