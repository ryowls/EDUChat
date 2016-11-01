import React from 'react'
import {mount} from 'react-mounter'
import App from '../../ui/layouts/app_layout.jsx'
import ChatBox from '../../ui/components/chatbox.jsx'

FlowRouter.route('/', {
    action() {
        mount(App, {
					content: <ChatBox/>
				});
    }
});

FlowRouter.route('/room/:roomId', {
  action(params) {
    mount(App, {
      content:  <ChatBox room={params.roomId}/>
    });
  }
});
