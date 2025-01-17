'use strict';

const PrivateChat = require('../structures/PrivateChat');
const GroupChat = require('../structures/GroupChat');

class ChatFactory {
    static create(client, data) {
        if(data.groupMetadata) {
            data.isGroup = true;
            return new GroupChat(client, data);
        }

        return new PrivateChat(client, data);
    }
}

module.exports = ChatFactory;