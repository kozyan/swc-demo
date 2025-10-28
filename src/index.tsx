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
import { createRoot } from 'react-dom/client';
import App from './App';

// Import Spectrum Web Components
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/theme/src/express/themes.js";

// components
import "@spectrum-web-components/banner/sp-banner.js";
import "@spectrum-web-components/button/sp-button.js";
// import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/checkbox/sp-checkbox.js";
import "@spectrum-web-components/link/sp-link.js";

// Action-related components for demos
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/action-group/sp-action-group.js";
import "@spectrum-web-components/action-menu/sp-action-menu.js";
import "@spectrum-web-components/menu/sp-menu.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/menu/sp-menu-divider.js";

// Icons used in demos (workflow set to avoid size-specific UI icons)
import "@spectrum-web-components/icons-workflow/icons/sp-icon-edit.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-delete.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-settings.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-star.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-copy.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-cut.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-paste.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-file.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-folder.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-search.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark-circle.js";
// import "@spectrum-web-components/accordion/sp-accordion.js";
// import "@spectrum-web-components/accordion/sp-accordion-item.js";

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(<App />);