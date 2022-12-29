import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: any = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((newMessage) => {
      if (newMessage) {
        this.messages.push(newMessage);
      } else {
        this.messages = [];
      }
    });
  }
}
