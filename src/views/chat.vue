<template>
  <div class="container">
    <label>
      <input type="radio" value="masha18" v-model="topic" @change="changeTopic" /> 
      masha18
    </label>
    <label>
      <input type="radio" value="stewei" v-model="topic" @change="changeTopic" /> 
      stewei
    </label>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{msg.from}}:</span>{{msg.txt}}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" placeholder="Your msg"/>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import {socketService} from '@/services/socket.service';

export default {
  data() {
    return {
      msg: {from: 'Me', txt: ''},
      msgs: [],
      topic : 'Love'
    }
  },
  created() {
    socketService.setup();
    socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
  },
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    socketService.terminate();
  },
  methods: {
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      console.log('Sending', this.msg);
      socketService.emit('chat newMsg', this.msg)
      this.addMsg(this.msg)
      setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      this.msg = {from: 'Me', txt: ''};
    },
    changeTopic() {
      socketService.emit('chat topic', this.topic)
    }
  }
}
</script>
