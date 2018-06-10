export enum MessageType {
  Unknown    = 0,
  Attachment = 1,
  Audio      = 2,
  Emoticon   = 3,
  Image      = 4,
  Text       = 5,
  Video      = 6,
}

export interface MessagePayloadBase {
  id : string,

  type : MessageType,

  filename? : string,
  text?     : string,
  timestamp : number,   // unit timestamp, in seconds
}

export interface MessagePayloadRoom {
  fromId? : string,
  roomId  : string,
  toId?   : string,   // if to is not set, then room must be set
}

export interface MessagePayloadTo {
  fromId  : string,
  roomId? : string,
  toId    : string,   // if to is not set, then room must be set
}

export type MessagePayload = MessagePayloadBase & (MessagePayloadRoom | MessagePayloadTo)
