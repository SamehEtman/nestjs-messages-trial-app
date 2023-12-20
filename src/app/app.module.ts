import { Module } from '@nestjs/common';
import { MessagesController } from 'src/messages/messages.controller';
import { MessageRepository } from 'src/messages/messages.repository';
import { MessagesService } from 'src/messages/messages.service';

@Module({
  controllers: [MessagesController],
  providers : [MessagesService, MessageRepository]
})
export class AppModule {}
