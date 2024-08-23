import * as graphql from "@nestjs/graphql";
import { NotificationPayload } from "./NotificationPayload";
import { NotificationService } from "./notification.service";

export class NotificationResolver {
  constructor(protected readonly service: NotificationService) {}

  @graphql.Mutation(() => String)
  async SendNewCarNotification(
    @graphql.Args()
    args: NotificationPayload
  ): Promise<string> {
    return this.service.SendNewCarNotification(args);
  }
}
