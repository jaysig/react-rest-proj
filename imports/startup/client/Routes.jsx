import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import ResolutionsWrapper from '../../ui/component/ResolutionsWrapper.jsx';
import About from '../../ui/component/About.jsx';

FlowRouter.route('/',{
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    }

    )
  }
});

FlowRouter.route('/about',{
  action() {
    mount(MainLayout, {
      content: (<About />)
    }

    )
  }
});
