import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import { 
  Text,
  View
} from 'react-primitives';

const TestPage = () => (
  <View style={{
    backgroundColor: '#FF0000'
  }}>
    <Text>test page</Text>
  </View>
);

const Routes = () => (
  <Router> 
    <Route exact path="/" component={TestPage} />
  </Router>
);

export default Routes;
