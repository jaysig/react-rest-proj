import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import ResolutionsWrapper from '../../ui/component/ResolutionsWrapper.jsx';
import About from '../../ui/component/About.jsx';
import ResolutionDetail from '../../ui/component/ResolutionDetail.jsx';

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

FlowRouter.route('/resolutions/:id',{
  action(params) {
    mount(MainLayout, {
      content: (<ResolutionDetail id={params.id}/>)
    }

    )
  }
});
