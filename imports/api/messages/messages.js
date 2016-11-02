import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class MessagesCollection extends Mongo.Collection {
  insert(message, callback){
    const ourMessage = message;
    ourMessage.createdAt = ourMessage.createdAt || new Date();
    return super.insert(ourMessage, callback);
  }
}

export const Messages = new MessagesCollection('messages');

Messages.schema = new SimpleSchema({
  // messageId: {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Id,
  //   denyUpdate: true,
  // },
  name : {
    type: String,
    max: 30
  },
  text : {
    type: String,
    max: 300
  },
  room: {
    type: String,
    max: 50
  },
  createdAt: {
    type: Date,
    denyUpdate: true
  },
  pinned : {
    type: Boolean,
    optional: true
  }
});

Messages.attachSchema(Messages.schema);
