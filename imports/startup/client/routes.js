import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import "/imports/ui/hello/hello"

FlowRouter.route('/', {
  name: 'home',
  action() {
    this.render('mainContainer', 'hello');
  }
});