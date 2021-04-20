const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sanya" },
    { id: 3, name: "Anya" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Sergey" },
    { id: 6, name: "Lesha" },
  ],
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How is your IT-KAMASUTRA?" },
    { id: 3, message: "Yo!" },
    { id: 4, message: "Yo!" },
    { id: 5, message: "Yo!" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;

      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
