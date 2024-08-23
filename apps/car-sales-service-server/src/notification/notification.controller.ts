import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationService } from "./notification.service";
import { NotificationPayload } from "./NotificationPayload";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationController {
  constructor(protected readonly service: NotificationService) {}

  @common.Post("/sendNewCarNotification")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendNewCarNotification(
    @common.Body()
    body: NotificationPayload
  ): Promise<string> {
        return this.service.SendNewCarNotification(body);
      }
}
