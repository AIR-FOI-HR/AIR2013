using HtmlAgilityPack;
using OpenPop.Mime;
using OpenPop.Pop3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIForRentersAPI.Functionalities
{
    public static class EmailFetcher
    {
        /// <summary>
        /// Method fetches all new incoming emails from user's mailbox and shapes them into
        /// ReceivedData objects.
        /// </summary>
        /// <returns>List of ReceivedData objects</returns>
        public static List<ReceivedData> ShapeReceivedData()
        {
            List<ReceivedData> listOfReceivedData = new List<ReceivedData>();

            using (Pop3Client client = new Pop3Client())
            {
                string username = Sender.Email.Remove(Sender.Email.IndexOf("@"), 10);

                // Connect to the server
                client.Connect("pop.gmail.com", 995, true);

                // Authenticate ourselves towards the server
                client.Authenticate(username, Sender.Password);

                // Get the number of messages in the inbox
                int messageCount = client.GetMessageCount();

                // Messages are numbered in the interval: [1, messageCount]
                // Ergo: message numbers are 1-based.
                // Most servers give the latest message the highest number
                for (int i = messageCount; i > 0; i--)
                {
                    string clientNameSurname = client.GetMessage(i).Headers.From.DisplayName;
                    string emailSubject = client.GetMessage(i).Headers.Subject;
                    string clientAddress = client.GetMessage(i).Headers.From.Address;

                    string emailBody = ExtractMessageBody(client.GetMessage(i));

                    ReceivedData newReceivedData = new ReceivedData
                    {
                        ClientNameSurname = clientNameSurname,
                        EmailAddress = clientAddress,
                        EmailSubject = emailSubject,
                        EmailBody = emailBody
                    };

                    listOfReceivedData.Add(newReceivedData);
                }
            }
            return listOfReceivedData;
        }

        /// <summary>
        /// This method receives Message object and extract message body from it.
        /// </summary>
        /// <param name="message"></param>
        /// <returns>String that represents message body</returns>
        private static string ExtractMessageBody(Message message)
        {
            StringBuilder builder = new StringBuilder();
            OpenPop.Mime.MessagePart plainText = message.FindFirstPlainTextVersion();
            if (plainText != null)
            {
                // We found some plaintext!
                builder.Append(plainText.GetBodyAsText());
            }
            else
            {
                // Might include a part holding html instead
                OpenPop.Mime.MessagePart html = message.FindFirstHtmlVersion();

                if (html != null)
                {
                    // We found some html!
                    HtmlDocument doc = new HtmlDocument();
                    doc.LoadHtml(html.GetBodyAsText());
                    //this xpath selects all p tags having its class as MsoNormal
                    var itemList = doc.DocumentNode.SelectNodes("//div[@class='WordSection1']//p[@class='MsoNormal']").Select(p => p.InnerText).ToList();
                    foreach (var item in itemList)
                    {
                        builder.Append(item);
                    }
                }
            }
            return builder.ToString();
        }
    }
}
