import React, { Suspense } from "react";

const SuspenseHOC = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default SuspenseHOC;
