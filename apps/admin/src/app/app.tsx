import React from 'react';

// @ts-ignore
const AuthoringApp = React.lazy(() => import('authoring_app/App'));

export function App() {
  return (
    <>
    <div>App Component</div>
    <React.Suspense fallback={<div>loading authoring tool</div>}>
      <AuthoringApp />
    </React.Suspense>
   </>
  );
}

export default App;
