import { Injectable } from "@nestjs/common";
import { NotificationPayload } from "./NotificationPayload";

@Injectable()
export class NotificationService {
  constructor() {}
  async SendNewCarNotification(args: NotificationPayload): Promise<string> {
    throw new Error("Not implemented");
  }
}
