class Request {
  constructor(id, property, unit, dateFrom, dateTo, priceUponRequest, confirmed, processed, sent, numberOfPeople, responseSubject, responseBody, clientId) {
    this.id = id;
    this.property = property;
    this.unit = unit;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.priceUponRequest = priceUponRequest;
    this.confirmed = confirmed;
    this.processed = processed;
    this.sent = sent;
    this.numberOfPeople = numberOfPeople;
    this.responseSubject = responseSubject;
    this.responseBody = responseBody;
    this.clientId = clientId
  }
}