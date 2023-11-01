export const chatData=[
  {
    chatId:'c1',
    ownerId:'user1',
    isDeleted:['user1','user2'],
    isArchived:['user1','user2'],
    markAsUnread:['user1','user2'],
    muted:['user1','user2'],
    pinned:['user1','user2'],
    participants:[{userName:'jhone doe',userId:'user1'},{userName:'almanic',userId:'user2'}],
    conversation:[
      {
       userId:'user1',
       messageId:'1',
       isRead:true,
       text:'hello how are you?',
       media:[{
        imageUrl:'https://as1.ftcdn.net/v2/jpg/00/17/30/74/1000_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg'
       }],
       reaction:'heartImogi',
       parentMessage:{
        messageId:'3',
        text:'this is parent message'
       }
      },
      {
        userId:'user2',
        messageId:'2',
        text:'fine',
        isRead:true,
        media:[{
          imageUrl:'https://as1.ftcdn.net/v2/jpg/00/17/30/74/1000_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg'
         }],
        reaction:'heartImogi',
        parentMessage:null

       },
       {
        userId:'user1',
        messageId:'3',
        text:'how about your work',
        isRead:true,
        media:[{
         imageUrl:'https://as1.ftcdn.net/v2/jpg/00/67/95/52/1000_F_67955278_rN7sECug3V4s8yj3WduChMzjeihyITXz.jpg'
        }],
        reaction:'heartImogi',
        parentMessage:null

       },
       {
        userId:'user2',
        messageId:'4',
        text:'It is in progress',
        isRead:true,
        media:[{
          imageUrl:'https://as1.ftcdn.net/v2/jpg/00/17/30/74/1000_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg'
        }],
        reaction:'heartImogi',
        parentMessage:null
       },
    ]
  },
  {
    chatId:'c2',
    ownerId:'user1',
    isDeleted:['user1','user2'],
    isArchived:['user1','user2'],
    markAsUnread:['user1','user2'],
    mute:['user1','user2'],
    participants:[{userName:'jhone doe',userId:'user1'},{userName:'almanic',userId:'user2'}],
    conversation:[
      {
       userId:'user1',
       messageId:'5',
       text:'What is your name?',
       isRead:true,
       media:[{
        imageUrl:'https://as1.ftcdn.net/v2/jpg/00/17/30/74/1000_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg'
       }],
       reaction:'heartImogi',
       parentMessage:null
      },
      {
        userId:'user2',
        messageId:'6',
        text:'jhon',
        isRead:true,
        media:[{
          imageUrl:'https://t4.ftcdn.net/jpg/01/02/32/77/240_F_102327719_hUSviWXHLeVh5N0wPolpJDPP6wHd0nJY.jpg'
        }],
        reaction:'heartImogi',
        parentMessage:null
       },
       {
        userId:'user1',
        messageId:'7',
        text:'what do you do?',
        isRead:true,
        media:[{
         imageUrl:'https://as1.ftcdn.net/v2/jpg/00/67/95/52/1000_F_67955278_rN7sECug3V4s8yj3WduChMzjeihyITXz.jpg'
        }],
        reaction:'heartImogi',
        parentMessage:null
       },
       {
        userId:'user2',
        messageId:'8',
        text:'Developer',
        isRead:true,
        media:[{
          imageUrl:'https://as1.ftcdn.net/v2/jpg/00/17/30/74/1000_F_17307408_RcdYtwlTOMmQAqqqYLZkJBDgb1SKHOXZ.jpg'
        }],
        reaction:'heartImogi',
        parentMessage:null
       },
    ]
  }
]

export const exampleMessage=(userId,state)=> {
  return {
  chatId:'653a2557c55c6c862e6431be',
  userId: userId,
  receiverId:parseInt(state.id),
  messageId: 'newmessage456',
  isRead: true,
  text: state.text,
  media: ['mediaUrl1', 'mediaUrl2'],
  reaction: 'thumbsUp',
  parentMessage: {},
}
}

export const exampleReactionOnMessage=(userId,state)=> {
 return {
  id:'653a00cbe4a62958a1b5bcfb',
  chatId:'653a2557c55c6c862e6431be',
  userId: userId,
  receiverId:parseInt(state.id),
  messageId: 'newmessage456',
  isRead: true,
  text: state.text,
  media: ['mediaUrl1', 'mediaUrl2'],
  reaction: 'butterfly',
  parentMessage: {},
}}

export const exampleChat = {
  ownerId: '652e500512592fa5bd355285',
  isDeleted: ['652e500512592fa5bd355285', '652e516f12592fa5bd35528b'],
  isArchived: ['652e500512592fa5bd355285'],
  markAsUnread: ['652e500512592fa5bd355285'],
  mute: ['652e500512592fa5bd355285'],
  pinned: ['652e500512592fa5bd355285'],
  participants: ['652e500512592fa5bd355285', '652e516f12592fa5bd35528b'],
};