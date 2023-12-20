import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { MessageDto } from './dto/messageDto.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}
  @Get()
  async getMessagesList() {
    const messages = await this.messageService.findAll();
    return messages;
  }

  @Post()
  async createMessage(@Body() body: MessageDto) {
    const newMsg = await this.messageService.createOne(body.content);
    return newMsg;
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    console.log(id)
    if (!message) {
      throw new NotFoundException('No Messages Found With id ' + id);
    }
    return message;
  }
}
