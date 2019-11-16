import React from 'react';
import ReactDOM from 'react-dom';

export const Example = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">example component!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'));
}
