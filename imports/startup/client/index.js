import './routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'bootstrap';
Meteor.startup(function(){
  injectTapEventPlugin();
});
