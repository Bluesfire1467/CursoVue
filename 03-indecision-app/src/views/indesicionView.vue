<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!--   Chat messages   -->
    <chat-messages :messages="messages"></chat-messages>

    <!--   MessageBox   -->
    <message-box @sendMessage="onMesage($event)"></message-box>

  </div>
</template>

<script setup lang="ts">
import ChatMessages from "@/chat/chatMessages.vue";
import MessageBox from "@/chat/messageBox.vue";
import {useChat} from "@/composables/useChat";

const {messages, onMesage} = useChat()

</script>