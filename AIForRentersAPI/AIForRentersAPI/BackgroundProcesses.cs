using AIForRentersAPI.Controllers;
using AIForRentersAPI.Functionalities;
using AIForRentersAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AIForRentersAPI
{
    public class BackgroundProcesses : IHostedService
    {
        private readonly ILogger<BackgroundProcesses> logger;

        public BackgroundProcesses(ILogger<BackgroundProcesses> logger)
        {
            this.logger = logger;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            List<ReceivedData> receivedData = new List<ReceivedData>();
            receivedData = EmailFetcher.ShapeReceivedData();

            ResponseProcessor.ProcessData(receivedData);

            using (var context = new AIForRentersDbContext())
            {
                RequestsController requestsController = new RequestsController(context);
                var resultGetAllRequests = requestsController.GetRequest();

                context.SaveChanges();
            }

            using (var context = new AIForRentersDbContext())
            {
                List<Request> requests = new List<Request>();

                var query = from req in context.Request.Include("Client")
                            select req;

                requests = query.ToList();

                AvailabilityValidator.CheckForAvailability(requests);
            }

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
