/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React from 'react';
import SpectrumBanner from './components/SpectrumBanner';
import SWCComponentsDemo from './components/SWCComponentsDemo';

const App: React.FC = () => {
  return (
    <sp-theme id="theme-block" theme="spectrum" color="light" scale="medium" dir="ltr">
      <div style={{ padding: '16px' }}>
        <h1>Welcome</h1>
        <SpectrumBanner 
          header="Hello World"
          content="Content of the banner"
        />
        
        <div style={{ marginTop: '32px' }}>
          <h1>Spectrum Web Components Demo</h1>
          <SWCComponentsDemo />
        </div>
      </div>
    </sp-theme>
  );
};

export default App;