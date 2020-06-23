import React from 'react';
import ReactTV from 'react-tv';

class ReactTVApp extends React.Component {
  render() {
    return <div>React TV for WebOS</div>;
  }
}

ReactTV.render(<ReactTVApp />, document.querySelector('#root'));
