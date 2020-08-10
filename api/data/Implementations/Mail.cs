
using csd.data.Interfaces;
using csd.data.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace csd.data.Implementations
{
    public class Mail : IEmail
    {
        public async System.Threading.Tasks.Task sendMailAsync(ContactMessage cm)
        {
            MimeMessage message = new MimeMessage();

            MailboxAddress from = new MailboxAddress("contactMessage", "marcelharder11@gmail.com");
            message.From.Add(from);

            MailboxAddress to = new MailboxAddress("marcel", "marcelharder@protonmail.com");
            message.To.Add(to);

            message.Subject = cm.subject + " request";

            BodyBuilder bb = new BodyBuilder();
            bb.TextBody = "Our user at " + cm.workemail + " wrote the following " + cm.message;

            message.Body = bb.ToMessageBody();

            /*  SmtpClient client = new SmtpClient();

            // client.Connect("smtp.gmail.com",587);
            // client.Connect("web16.foxxl.com",465);
             client.Connect("web16.foxxl.com",587);

           //  client.Authenticate("lmztffifuhujwnwd",null);
             client.Authenticate("postmaster@tds-nederland.nl","bKf2?8h8");


             client.Send(message);
             client.Disconnect(true);
             client.Dispose(); */

            using (var client = new SmtpClient())
            {
                client.ServerCertificateValidationCallback = (sender, certificate, chain, errors) => true;
                client.AuthenticationMechanisms.Remove("XOAUTH2");

                // Start of provider specific settings
                await client.ConnectAsync("web16.foxxl.com", 587, false).ConfigureAwait(false);
                await client.AuthenticateAsync("postmaster@tds-nederland.nl", "bKf2?8h8").ConfigureAwait(false);
                // End of provider specific settings

                await client.SendAsync(message).ConfigureAwait(false);
                await client.DisconnectAsync(true).ConfigureAwait(false);
            }
        }
    }
}