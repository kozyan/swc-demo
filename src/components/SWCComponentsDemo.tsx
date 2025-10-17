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

const SWCComponentsDemo: React.FC = () => {
  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Buttons Section */}
      <div>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <sp-button variant="accent">Accent Button</sp-button>
          <sp-button variant="primary">Primary Button</sp-button>
          <sp-button variant="secondary">Secondary Button</sp-button>
          <sp-button size="s">Small Button</sp-button>
          <sp-button disabled>Disabled Button</sp-button>
        </div>
      </div>

      {/* Text Fields */}
      <div>
        <h2>Text Fields</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
          <sp-textfield placeholder="Enter text here"></sp-textfield>
          <sp-textfield value="Pre-filled text" readonly></sp-textfield>
          <sp-textfield placeholder="Required field" required></sp-textfield>
        </div>
      </div>

      {/* Checkboxes */}
      <div>
        <h2>Checkboxes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <sp-checkbox checked>Checked option</sp-checkbox>
          <sp-checkbox>Unchecked option</sp-checkbox>
          <sp-checkbox indeterminate>Indeterminate option</sp-checkbox>
          <sp-checkbox disabled>Disabled option</sp-checkbox>
        </div>
      </div>

      {/* Links */}
      <div>
        <h2>Links</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <sp-link href="#">Normal Link</sp-link>
          <sp-link href="#" quiet>Quiet Link</sp-link>
          <sp-link href="#" disabled>Disabled Link</sp-link>
        </div>
      </div>

      {/* Interactive Examples */}
      <div>
        <h2>Interactive Examples</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>User Name:</label>
            <sp-textfield placeholder="Enter your name" value=""></sp-textfield>
          </div>
          
          <div>
            <sp-checkbox>I agree to the terms and conditions</sp-checkbox>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <sp-button variant="primary">Save</sp-button>
            <sp-button variant="secondary">Cancel</sp-button>
          </div>
        </div>
      </div>

      {/* Component States */}
      <div>
        <h2>Component States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <h3>Normal State</h3>
            <sp-button>Normal Button</sp-button>
          </div>
          <div>
            <h3>Disabled State</h3>
            <sp-button disabled>Disabled Button</sp-button>
          </div>
          <div>
            <h3>Readonly Text</h3>
            <sp-textfield value="Read only" readonly></sp-textfield>
          </div>
          <div>
            <h3>Checked State</h3>
            <sp-checkbox checked>Checked</sp-checkbox>
          </div>
        </div>
      </div>

      {/* Documentation Note */}
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#f5f5f5', 
        border: '1px solid #ddd', 
        borderRadius: '4px',
        marginTop: '24px'
      }}>
        <h3>Adding More Components</h3>
        <p>To add more Spectrum Web Components to this demo:</p>
        <ol>
          <li>Install the component: <code>npm install @swc-uxp-wrappers/[component]@[version]</code></li>
          <li>Add version to resolutions block in package.json</li>
          <li>Import the component in src/index.tsx</li>
          <li>Add TypeScript definitions in src/types/spectrum.d.ts</li>
          <li>Use the component in your React components</li>
        </ol>
        <p>
          Available components: 
          <sp-link href="https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/" target="_blank">
            SWC in UXP Documentation
          </sp-link>
        </p>
      </div>
    </div>
  );
};

export default SWCComponentsDemo;
