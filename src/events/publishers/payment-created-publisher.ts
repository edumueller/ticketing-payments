import { Subjects, Publisher, PaymentCreatedEvent } from '@devneering/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
