import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import ResolutionsWrapper from '../../ui/component/ResolutionsWrapper.jsx';
import About from '../../ui/component/About.jsx';
import ResolutionDetail from '../../ui/component/ResolutionDetail.jsx';

import ResturantsWrapper from '../../ui/component/resturants/ResturantsWrapper.jsx';
import ResturantDetail from '../../ui/component/resturants/ResturantDetail.jsx';

FlowRouter.route('/',{
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    }

    )
  }
});

FlowRouter.route('/resturants',{
  action() {
    mount(MainLayout, {
      content: (<ResturantsWrapper />)
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

FlowRouter.route('/resturants/:id',{
  action(params) {
    mount(MainLayout, {
      content: (<ResturantDetail id={params.id}/>)
    }

    )
  }
});
