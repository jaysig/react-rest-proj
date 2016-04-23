import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import App from '../../ui/component/App.jsx';

FlowRouter.route('/',{
  action() {
    mount(MainLayout, {
      content: (<App />)
    }

    )
  }
})
