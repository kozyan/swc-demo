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

import React, { useState } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<SectionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', marginBottom: '16px', overflowY: 'auto' }}>
      <div 
        style={{ 
          padding: '12px 16px', 
          backgroundColor: '#f5f5f5', 
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>
      {isOpen && (
        <div style={{ padding: '16px', height: '450px', overflowY: 'auto' }}>
          {children}
        </div>
      )}
    </div>
  );
};

const ComprehensiveSWCDemo: React.FC = () => {
  return (
    <div style={{ padding: '16px', maxWidth: '1200px' }}>
      <h1>Comprehensive Spectrum Web Components Demo</h1>
      <p>This demo showcases all available Spectrum Web Components for UXP. Click section headers to expand/collapse.</p>
      
      {/* Navigation Components */}
      <CollapsibleSection title="Navigation Components">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Breadcrumbs */}
          <div>
            <h3>Breadcrumbs</h3>
            <sp-breadcrumbs>
              <sp-breadcrumb-item href="#">Home</sp-breadcrumb-item>
              <sp-breadcrumb-item href="#">Category</sp-breadcrumb-item>
              <sp-breadcrumb-item>Current Page</sp-breadcrumb-item>
            </sp-breadcrumbs>
          </div>

          {/* Menu */}
          <div>
            <h3>Menu</h3>
            <sp-menu>
              <sp-menu-item key="1">Menu Item 1</sp-menu-item>
              <sp-menu-item key="2">Menu Item 2</sp-menu-item>
              <sp-menu-divider key="3"></sp-menu-divider>
              <sp-menu-item key="4" disabled>Disabled Item</sp-menu-item>
              <sp-menu-item key="5">Menu Item 3</sp-menu-item>
            </sp-menu>
          </div>

          {/* Sidenav */}
          <div>
            <h3>Sidenav</h3>
            <sp-sidenav style={{ height: '200px', border: '1px solid #ccc' }}>
              <sp-sidenav-item value="section1" label="Section 1"></sp-sidenav-item>
              <sp-sidenav-item value="item1" label="Item 1"></sp-sidenav-item>
              <sp-sidenav-item value="item2" label="Item 2"></sp-sidenav-item>
              <sp-sidenav-item value="section2" label="Section 2"></sp-sidenav-item>
              <sp-sidenav-item value="item3" label="Item 3"></sp-sidenav-item>
            </sp-sidenav>
          </div>

          {/* Tabs */}
          <div>
            <h3>Tabs</h3>
            <sp-tabs selected="1">
              <sp-tab value="1" label="Tab 1"></sp-tab>
              <sp-tab value="2" label="Tab 2"></sp-tab>
              <sp-tab value="3" label="Tab 3" disabled></sp-tab>
              <sp-tab-panel value="1">Content for Tab 1</sp-tab-panel>
              <sp-tab-panel value="2">Content for Tab 2</sp-tab-panel>
              <sp-tab-panel value="3">Content for Tab 3</sp-tab-panel>
            </sp-tabs>
          </div>

          {/* Top Nav */}
          <div>
            <h3>Top Nav</h3>
            <sp-top-nav>
              <sp-top-nav-item href="#">Home</sp-top-nav-item>
              <sp-top-nav-item href="#" selected>Products</sp-top-nav-item>
              <sp-top-nav-item href="#">About</sp-top-nav-item>
            </sp-top-nav>
          </div>
        </div>
      </CollapsibleSection>

      {/* Form Controls */}
      <CollapsibleSection title="Form Controls" defaultOpen={true}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%', overflowY: 'auto' }}>
          
          {/* Buttons */}
          <div>
            <h3>Buttons & Button Groups</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <sp-button variant="accent">Accent</sp-button>
                <sp-button variant="primary">Primary</sp-button>
                <sp-button variant="secondary">Secondary</sp-button>
                <sp-button variant="negative">Negative</sp-button>
                <sp-button disabled>Disabled</sp-button>
              </div>
              
              <sp-button-group>
                <sp-button>Group 1</sp-button>
                <sp-button>Group 2</sp-button>
                <sp-button>Group 3</sp-button>
              </sp-button-group>
            </div>
          </div>

          {/* Action Buttons */}
          <div>
            <h3>Action Buttons & Action Groups</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <sp-action-button>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  Settings
                </sp-action-button>
                <sp-action-button selected>
                  <sp-icon-star slot="icon"></sp-icon-star>
                  Favorite
                </sp-action-button>
                <sp-action-button quiet>
                  <sp-icon-edit slot="icon"></sp-icon-edit>
                  Edit
                </sp-action-button>
              </div>
              
              <sp-action-group>
                <sp-action-button>
                  <sp-icon-copy slot="icon"></sp-icon-copy>
                </sp-action-button>
                <sp-action-button>
                  <sp-icon-cut slot="icon"></sp-icon-cut>
                </sp-action-button>
                <sp-action-button>
                  <sp-icon-paste slot="icon"></sp-icon-paste>
                </sp-action-button>
              </sp-action-group>
            </div>
          </div>

          {/* Text Inputs */}
          <div>
            <h3>Text Fields & Search</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
              <sp-textfield placeholder="Standard text field"></sp-textfield>
              <sp-textfield value="Readonly text" readonly></sp-textfield>
              <sp-textfield placeholder="Required field" required></sp-textfield>
              <sp-textfield placeholder="Invalid field" invalid></sp-textfield>
              <sp-search placeholder="Search..."></sp-search>
            </div>
          </div>

          {/* Number Field */}
          <div>
            <h3>Number Field</h3>
            <sp-number-field value={50} min={0} max={100} step={5}></sp-number-field>
          </div>

          {/* Selection Controls */}
          <div>
            <h3>Checkboxes, Radio Buttons & Switch</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <h4>Checkboxes</h4>
                <sp-checkbox checked>Checked</sp-checkbox>
                <sp-checkbox>Unchecked</sp-checkbox>
                <sp-checkbox indeterminate>Indeterminate</sp-checkbox>
                <sp-checkbox disabled>Disabled</sp-checkbox>
              </div>
              
              <div>
                <h4>Radio Buttons</h4>
                <sp-radio-group name="demo-radio">
                  <sp-radio value="option1" checked>Option 1</sp-radio>
                  <sp-radio value="option2">Option 2</sp-radio>
                  <sp-radio value="option3" disabled>Option 3 (Disabled)</sp-radio>
                </sp-radio-group>
              </div>
              
              <div>
                <h4>Switch</h4>
                <sp-switch>Normal Switch</sp-switch>
                <sp-switch checked>Checked Switch</sp-switch>
                <sp-switch disabled>Disabled Switch</sp-switch>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div>
            <h3>Slider</h3>
            <div style={{ maxWidth: '300px' }}>
              <sp-slider value={50} min={0} max={100}></sp-slider>
              <sp-slider value={75} min={0} max={100} disabled></sp-slider>
            </div>
          </div>

          {/* Pickers */}
          <div>
            <h3>Picker & Combobox</h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <sp-picker>
                <sp-menu-item>Option 1</sp-menu-item>
                <sp-menu-item selected>Option 2 (Selected)</sp-menu-item>
                <sp-menu-item>Option 3</sp-menu-item>
              </sp-picker>
              
              <sp-combobox>
                <sp-menu-item>Combobox Option 1</sp-menu-item>
                <sp-menu-item>Combobox Option 2</sp-menu-item>
                <sp-menu-item>Combobox Option 3</sp-menu-item>
              </sp-combobox>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Color Controls */}
      <CollapsibleSection title="Color Controls">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h3>Color Components</h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <sp-color-area></sp-color-area>
              <sp-color-field></sp-color-field>
              <sp-color-handle></sp-color-handle>
              <sp-color-loupe></sp-color-loupe>
              <sp-color-slider></sp-color-slider>
              <sp-color-wheel></sp-color-wheel>
              <sp-swatch color="#ff0000"></sp-swatch>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Display Components */}
      <CollapsibleSection title="Display & Layout">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Cards */}
          <div>
            <h3>Card</h3>
            <sp-card style={{ maxWidth: '300px' }}>
              <img slot="cover-photo" src="https://via.placeholder.com/300x150" alt="Card cover" style={{ width: '100%' }} />
              <div slot="heading">Card Title</div>
              <div slot="subheading">Card Subtitle</div>
              <div>Card content goes here. This is a sample card component.</div>
              <sp-button slot="footer" variant="primary">Action</sp-button>
            </sp-card>
          </div>

          {/* Avatar & Asset */}
          <div>
            <h3>Avatar & Asset</h3>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <sp-avatar label="User Avatar"></sp-avatar>
              <sp-asset>
                <img src="https://via.placeholder.com/50x50" alt="Asset" />
              </sp-asset>
            </div>
          </div>

          {/* Badge */}
          <div>
            <h3>Badge</h3>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <sp-badge variant="neutral">Neutral</sp-badge>
              <sp-badge variant="informative">Informative</sp-badge>
              <sp-badge variant="positive">Positive</sp-badge>
              <sp-badge variant="negative">Negative</sp-badge>
            </div>
          </div>

          {/* Status Light */}
          <div>
            <h3>Status Light</h3>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <sp-status-light variant="positive">Active</sp-status-light>
              <sp-status-light variant="negative">Error</sp-status-light>
              <sp-status-light variant="notice">Warning</sp-status-light>
              <sp-status-light variant="info">Info</sp-status-light>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3>Tags</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <sp-tag>Default Tag</sp-tag>
              <sp-tag deletable>
                <div>
                  Deletable Tag
                  <sp-icon-cross slot="delete-icon"></sp-icon-cross>
                </div>
              </sp-tag>
              <sp-tag disabled>Disabled Tag</sp-tag>
            </div>
          </div>

          {/* Progress Indicators */}
          <div>
            <h3>Progress Indicators & Meter</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
              <sp-progress-bar value={75} max={100}></sp-progress-bar>
              <sp-progress-circle value={50} max={100}></sp-progress-circle>
              <sp-progress-circle indeterminate></sp-progress-circle>
              <sp-meter value={60} max={100}></sp-meter>
            </div>
          </div>

          {/* Divider */}
          <div>
            <h3>Divider</h3>
            <sp-divider></sp-divider>
            <sp-divider vertical style={{ height: '50px', display: 'inline-block' }}></sp-divider>
          </div>

          {/* Thumbnail */}
          <div>
            <h3>Thumbnail</h3>
            <sp-thumbnail>
              <img src="https://via.placeholder.com/100x100" alt="Thumbnail" />
            </sp-thumbnail>
          </div>
        </div>
      </CollapsibleSection>

      {/* Feedback & Communication */}
      <CollapsibleSection title="Feedback & Communication">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Alerts & Banners */}
          <div>
            <h3>Alert Banner & Toast</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <sp-banner type="info" open>
                <div slot="header">Information Banner</div>
                <div slot="content">This is an informational message.</div>
              </sp-banner>
              
              <sp-toast open variant="positive">
                <div slot="content">Success! Operation completed.</div>
              </sp-toast>
            </div>
          </div>

          {/* Illustrated Message */}
          <div>
            <h3>Illustrated Message</h3>
            <sp-illustrated-message>
              <sp-icon-file slot="illustration"></sp-icon-file>
              <div slot="heading">No files found</div>
              <div slot="description">Try adjusting your search criteria</div>
            </sp-illustrated-message>
          </div>

          {/* Coachmark */}
          <div>
            <h3>Coachmark</h3>
            <sp-coachmark open>
              <div slot="header">Feature Tip</div>
              <div slot="content">This is how you use this feature.</div>
            </sp-coachmark>
          </div>
        </div>
      </CollapsibleSection>

      {/* Layout & Containers */}
      <CollapsibleSection title="Layout & Containers">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Accordion */}
          <div>
            <h3>Accordion</h3>
            <sp-accordion>
              <sp-accordion-item label="Section 1" open>
                <div>Content for the first accordion section</div>
              </sp-accordion-item>
              <sp-accordion-item label="Section 2">
                <div>Content for the second accordion section</div>
              </sp-accordion-item>
              <sp-accordion-item label="Disabled Section" disabled>
                <div>This section is disabled</div>
              </sp-accordion-item>
            </sp-accordion>
          </div>

          {/* Split View */}
          <div>
            <h3>Split View</h3>
            <sp-split-view style={{ height: '200px' }}>
              <div>Left panel content</div>
              <div>Right panel content</div>
            </sp-split-view>
          </div>

          {/* Field Group */}
          <div>
            <h3>Field Group & Field Label</h3>
            <sp-field-group>
              <sp-field-label for="field1">First Name</sp-field-label>
              <sp-textfield id="field1" placeholder="Enter first name"></sp-textfield>
              
              <sp-field-label for="field2">Last Name</sp-field-label>
              <sp-textfield id="field2" placeholder="Enter last name"></sp-textfield>
              
              <sp-help-text>Please enter your full name</sp-help-text>
            </sp-field-group>
          </div>

          {/* Table */}
          <div>
            <h3>Table</h3>
            <sp-table>
              <sp-table-head>
                <sp-table-head-cell>Name</sp-table-head-cell>
                <sp-table-head-cell>Type</sp-table-head-cell>
                <sp-table-head-cell>Size</sp-table-head-cell>
              </sp-table-head>
              <sp-table-body>
                <sp-table-row>
                  <sp-table-cell>Document.pdf</sp-table-cell>
                  <sp-table-cell>PDF</sp-table-cell>
                  <sp-table-cell>1.2 MB</sp-table-cell>
                </sp-table-row>
                <sp-table-row>
                  <sp-table-cell>Image.png</sp-table-cell>
                  <sp-table-cell>PNG</sp-table-cell>
                  <sp-table-cell>856 KB</sp-table-cell>
                </sp-table-row>
              </sp-table-body>
            </sp-table>
          </div>
        </div>
      </CollapsibleSection>

      {/* Interactive Elements */}
      <CollapsibleSection title="Interactive Elements">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Links */}
          <div>
            <h3>Links & Contextual Help</h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <sp-link href="#">Normal Link</sp-link>
              <sp-link href="#" quiet>Quiet Link</sp-link>
              <sp-link href="#" disabled>Disabled Link</sp-link>
              <sp-contextual-help>
                <sp-help-text slot="content">This provides additional context</sp-help-text>
              </sp-contextual-help>
            </div>
          </div>

          {/* Action Bar & Action Menu */}
          <div>
            <h3>Action Bar & Action Menu</h3>
            <sp-action-bar open>
              <sp-action-button>
                <sp-icon-edit slot="icon"></sp-icon-edit>
                Edit
              </sp-action-button>
              <sp-action-button>
                <sp-icon-delete slot="icon"></sp-icon-delete>
                Delete
              </sp-action-button>
              <sp-action-menu>
                <sp-menu-item key="1">More Action 1</sp-menu-item>
                <sp-menu-item key="2">More Action 2</sp-menu-item>
              </sp-action-menu>
            </sp-action-bar>
          </div>

          {/* Dropzone */}
          <div>
            <h3>Dropzone</h3>
            <sp-dropzone style={{ height: '100px', border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Drop files here
            </sp-dropzone>
          </div>

          {/* Infield Button */}
          <div>
            <h3>Infield Button</h3>
            <sp-textfield>
              <sp-infield-button slot="buttons">
                <sp-icon-search></sp-icon-search>
              </sp-infield-button>
            </sp-textfield>
          </div>
        </div>
      </CollapsibleSection>

      {/* Overlays & Modals */}
      <CollapsibleSection title="Overlays & Modals">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Note: These would typically be triggered by buttons */}
          <div>
            <h3>Overlay Components</h3>
            <p>These components typically appear as overlays:</p>
            <ul>
              <li><strong>Dialog</strong> - Modal dialogs for user interaction</li>
              <li><strong>Alert Dialog</strong> - Critical confirmation dialogs</li>
              <li><strong>Popover</strong> - Contextual content containers</li>
              <li><strong>Tooltip</strong> - Hover information displays</li>
              <li><strong>Tray</strong> - Side panel containers</li>
              <li><strong>Underlay</strong> - Background overlay component</li>
              <li><strong>Overlay</strong> - Base overlay component</li>
            </ul>
            
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <sp-button onClick={() => console.log('Dialog would open')}>Open Dialog</sp-button>
              <sp-button onClick={() => console.log('Popover would open')}>Show Popover</sp-button>
              <sp-button onClick={() => console.log('Tray would open')}>Open Tray</sp-button>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Icons */}
      <CollapsibleSection title="Icons & Iconsets">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h3>Workflow Icons</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '24px' }}>
              <sp-icon-settings></sp-icon-settings>
              <sp-icon-star></sp-icon-star>
              <sp-icon-edit></sp-icon-edit>
              <sp-icon-magnify></sp-icon-magnify>
              <sp-icon-copy></sp-icon-copy>
              <sp-icon-cut></sp-icon-cut>
              <sp-icon-paste></sp-icon-paste>
              <sp-icon-delete></sp-icon-delete>
              <sp-icon-file></sp-icon-file>
              <sp-icon-folder></sp-icon-folder>
            </div>
          </div>
          
          <div>
            <h3>UI Icons</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '24px' }}>
              <sp-icon-cross></sp-icon-cross>
              <sp-icon-checkmark></sp-icon-checkmark>
              <sp-icon-alert></sp-icon-alert>
              <sp-icon-info></sp-icon-info>
              <sp-icon-chevron-down></sp-icon-chevron-down>
              <sp-icon-chevron-up></sp-icon-chevron-up>
              <sp-icon-chevron-left></sp-icon-chevron-left>
              <sp-icon-chevron-right></sp-icon-chevron-right>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Usage Guidelines */}
      <CollapsibleSection title="Implementation Notes">
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
          <h3>Adding Components to Your Project</h3>
          <p>To use these components in your UXP project:</p>
          <ol>
            <li><strong>Install wrapper packages</strong> when available: <code>npm install @swc-uxp-wrappers/[component]@[version]</code></li>
            <li><strong>Add to resolutions</strong> in package.json to lock versions</li>
            <li><strong>Import components</strong> in src/index.tsx</li>
            <li><strong>Add TypeScript definitions</strong> in src/types/spectrum.d.ts</li>
            <li><strong>Use with sp-theme wrapper</strong> for proper styling</li>
          </ol>
          
          <h3>Component Availability</h3>
          <p>Not all components may have UXP wrapper packages available. The webpack aliasing system in this project allows you to use standard Spectrum Web Components imports that are automatically mapped to UXP-compatible versions when wrappers exist.</p>
          
          <h3>Documentation</h3>
          <p>
            <sp-link href="https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/" target="_blank">
              Official SWC in UXP Documentation
            </sp-link>
          </p>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default ComprehensiveSWCDemo;
