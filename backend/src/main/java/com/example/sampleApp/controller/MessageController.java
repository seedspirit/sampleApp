package com.example.sampleApp.controller;

import com.example.sampleApp.entity.Message;
import com.example.sampleApp.service.MessageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public Message createMessage(@RequestBody String content) {
        return messageService.saveMessage(content);
    }

    @GetMapping
    public List<Message> getMessages() {
        return messageService.getAllMessages();
    }
}
