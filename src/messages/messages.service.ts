import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessageRepository) {}

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return await this.messagesRepo.findItem(id);
  }
  async createOne(content: string) {
    return await this.messagesRepo.createMessage(content);
  }
}

