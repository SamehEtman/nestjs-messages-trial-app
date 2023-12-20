import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
const path = require('node:path');



@Injectable()
export class MessageRepository {
  async findAll() {
    const messages = await readFile(
      path.join(__dirname, '../../messages.json'),
      'utf-8',
    );
    const messagesObj = JSON.parse(messages);
    return messages;
  }

  async findItem(id: string) {
    const messages = await readFile(
      path.join(__dirname, '../../messages.json'),
      'utf-8',
    );
    const messagesObj = JSON.parse(messages);
    return messagesObj[id];
  }

  async createMessage(content) {
    const id = Math.round(Math.random() * 1000);
    const messages = await readFile(
      path.join(__dirname, '../../messages.json'),
      'utf-8',
    );
    const messagesObj = JSON.parse(messages);
    messagesObj[id] = {
      id,
      content,
    };

    await writeFile(
      path.join(__dirname, '../../messages.json'),
      JSON.stringify(messagesObj),
    );
    return messagesObj[id];
  }
}
