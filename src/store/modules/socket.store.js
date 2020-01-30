export const socketStore = {
    state: {
      isConnected: false,
      socketMessage: ''
    },
  
    mutations:{
      SOCKET_CONNECT(state) {
        state.isConnected = true;
      },
  
      SOCKET_DISCONNECT(state) {
        state.isConnected = false;
      },
  
      SOCKET_MESSAGECHANNEL(state, message) {
        state.socketMessage = message
      }
    }
  }