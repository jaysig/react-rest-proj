import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import ResolutionsWrapper from '../../ui/component/ResolutionsWrapper.jsx';

FlowRouter.route('/',{
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    }

    )
  }
})
