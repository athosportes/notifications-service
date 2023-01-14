import { Module } from "@nestjs/common";
import { SendNotification } from '../../app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '../../app/use-cases/cancel-notification';
import { CountRecipientNotification } from "@app/use-cases/count-recipient-notifications";
import { GetRecipientNotification } from '../../app/use-cases/get-recipient-notifications';
import { UnreadNotification } from '../../app/use-cases/unread-notification';
import { ReadNotification } from '../../app/use-cases/read-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification
  ]
})
export class HttpModule { }