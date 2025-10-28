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

import { HTMLAttributes } from 'react';
import { ActionMenu } from '@spectrum-web-components/action-menu';
import {
    Menu,
    MenuGroup,
    MenuItem,
    MenuDivider,
    MenuItemChildren
} from '@spectrum-web-components/menu';

declare global {
  namespace JSX {
    interface IntrinsicElements { 
      // Allow any Spectrum Web Component tag without strict typing to avoid JSX errors during demos
      [elemName: string]: any;
      'sp-theme': HTMLAttributes<HTMLElement> & {
        theme?: string;
        color?: string;
        scale?: string;
        dir?: string;
        id?: string;
      };
      'sp-banner': HTMLAttributes<HTMLElement> & {
        type?: 'info' | 'warning' | 'error';
        open?: boolean;
      };
      'sp-button': HTMLAttributes<HTMLElement> & {
        variant?: 'accent' | 'primary' | 'secondary' | 'negative';
        size?: 's' | 'm' | 'l' | 'xl';
        disabled?: boolean;
      };
      'sp-textfield': HTMLAttributes<HTMLElement> & {
        placeholder?: string;
        value?: string;
        readonly?: boolean;
        quiet?: boolean;
        required?: boolean;
        disabled?: boolean;
        invalid?: boolean;
      };
      'sp-checkbox': HTMLAttributes<HTMLElement> & {
        checked?: boolean;
        indeterminate?: boolean;
        disabled?: boolean;
      };
      'sp-link': HTMLAttributes<HTMLElement> & {
        href?: string;
        quiet?: boolean;
        target?: string;
        disabled?: boolean;
      };
      'sp-accordion': HTMLAttributes<HTMLElement>;
      'sp-accordion-item': HTMLAttributes<HTMLElement> & {
        label?: string;
        open?: boolean;
        disabled?: boolean;
      };
      'sp-action-bar': HTMLAttributes<HTMLElement> & {
        open?: boolean;
      };
      'sp-action-button': HTMLAttributes<HTMLElement> & {
        selected?: boolean;
        quiet?: boolean;
      };
      'sp-action-group': HTMLAttributes<HTMLElement>;
      'sp-action-menu': HTMLAttributes<HTMLElement>;
      'sp-alert-dialog': HTMLAttributes<HTMLElement>;
      'sp-asset': HTMLAttributes<HTMLElement>;
      'sp-avatar': HTMLAttributes<HTMLElement> & {
        label?: string;
      };
      'sp-badge': HTMLAttributes<HTMLElement> & {
        variant?: 'neutral' | 'informative' | 'positive' | 'negative';
      };
      'sp-breadcrumb-item': HTMLAttributes<HTMLElement> & {
        href?: string;
      };
      'sp-breadcrumbs': HTMLAttributes<HTMLElement>;
      'sp-button-group': HTMLAttributes<HTMLElement>;
      'sp-card': HTMLAttributes<HTMLElement>;
      'sp-coachmark': HTMLAttributes<HTMLElement> & {
        open?: boolean;
      };
      'sp-color-area': HTMLAttributes<HTMLElement>;
      'sp-color-field': HTMLAttributes<HTMLElement>;
      'sp-color-handle': HTMLAttributes<HTMLElement>;
      'sp-color-loupe': HTMLAttributes<HTMLElement>;
      'sp-color-slider': HTMLAttributes<HTMLElement>;
      'sp-color-wheel': HTMLAttributes<HTMLElement>;
      'sp-combobox': HTMLAttributes<HTMLElement>;
      'sp-contextual-help': HTMLAttributes<HTMLElement>;
      'sp-dialog': HTMLAttributes<HTMLElement>;
      'sp-divider': HTMLAttributes<HTMLElement> & {
        vertical?: boolean;
      };
      'sp-dropzone': HTMLAttributes<HTMLElement>;
      'sp-field-group': HTMLAttributes<HTMLElement>;
      'sp-field-label': HTMLAttributes<HTMLElement> & {
        for?: string;
      };
      'sp-help-text': HTMLAttributes<HTMLElement>;
      'sp-icon-alert': HTMLAttributes<HTMLElement>;
      'sp-icon-checkmark': HTMLAttributes<HTMLElement>;
      'sp-icon-chevron-down': HTMLAttributes<HTMLElement>;
      'sp-icon-chevron-left': HTMLAttributes<HTMLElement>;
      'sp-icon-chevron-right': HTMLAttributes<HTMLElement>;
      'sp-icon-chevron-up': HTMLAttributes<HTMLElement>;
      'sp-icon-copy': HTMLAttributes<HTMLElement>;
      'sp-icon-cross': HTMLAttributes<HTMLElement>;
      'sp-icon-cut': HTMLAttributes<HTMLElement>;
      'sp-icon-delete': HTMLAttributes<HTMLElement>;
      'sp-icon-edit': HTMLAttributes<HTMLElement>;
      'sp-icon-file': HTMLAttributes<HTMLElement>;
      'sp-icon-folder': HTMLAttributes<HTMLElement>;
      'sp-icon-info': HTMLAttributes<HTMLElement>;
      'sp-icon-magnify': HTMLAttributes<HTMLElement>;
      'sp-icon-paste': HTMLAttributes<HTMLElement>;
      'sp-icon-search': HTMLAttributes<HTMLElement>;
      'sp-icon-settings': HTMLAttributes<HTMLElement>;
      'sp-icon-star': HTMLAttributes<HTMLElement>;
      'sp-illustrated-message': HTMLAttributes<HTMLElement>;
      'sp-infield-button': HTMLAttributes<HTMLElement>;
      'sp-menu': Menu;
      'sp-menu-divider': MenuDivider;
      'sp-menu-item': MenuItem;
      'sp-meter': HTMLAttributes<HTMLElement> & {
        value?: number;
        max?: number;
      };
      'sp-number-field': HTMLAttributes<HTMLElement> & {
        value?: number;
        min?: number;
        max?: number;
        step?: number;
      };
      'sp-overlay': HTMLAttributes<HTMLElement>;
      'sp-picker': HTMLAttributes<HTMLElement>;
      'sp-popover': HTMLAttributes<HTMLElement>;
      'sp-progress-bar': HTMLAttributes<HTMLElement> & {
        value?: number;
        max?: number;
      };
      'sp-progress-circle': HTMLAttributes<HTMLElement> & {
        value?: number;
        max?: number;
        indeterminate?: boolean;
      };
      'sp-radio': HTMLAttributes<HTMLElement> & {
        value?: string;
        checked?: boolean;
        disabled?: boolean;
      };
      'sp-radio-group': HTMLAttributes<HTMLElement> & {
        name?: string;
      };
      'sp-search': HTMLAttributes<HTMLElement> & {
        placeholder?: string;
      };
      'sp-sidenav': HTMLAttributes<HTMLElement>;
      'sp-sidenav-item': HTMLAttributes<HTMLElement> & {
        value?: string;
        label?: string;
      };
      'sp-slider': HTMLAttributes<HTMLElement> & {
        value?: number;
        min?: number;
        max?: number;
        disabled?: boolean;
      };
      'sp-split-view': HTMLAttributes<HTMLElement>;
      'sp-status-light': HTMLAttributes<HTMLElement> & {
        variant?: 'positive' | 'negative' | 'notice' | 'info';
      };
      'sp-swatch': HTMLAttributes<HTMLElement> & {
        color?: string;
      };
      'sp-switch': HTMLAttributes<HTMLElement> & {
        checked?: boolean;
        disabled?: boolean;
      };
      'sp-tab': HTMLAttributes<HTMLElement> & {
        value?: string;
        label?: string;
        disabled?: boolean;
      };
      'sp-tab-panel': HTMLAttributes<HTMLElement> & {
        value?: string;
      };
      'sp-table': HTMLAttributes<HTMLElement>;
      'sp-table-body': HTMLAttributes<HTMLElement>;
      'sp-table-cell': HTMLAttributes<HTMLElement>;
      'sp-table-head': HTMLAttributes<HTMLElement>;
      'sp-table-head-cell': HTMLAttributes<HTMLElement>;
      'sp-table-row': HTMLAttributes<HTMLElement>;
      'sp-tabs': HTMLAttributes<HTMLElement> & {
        selected?: string;
      };
      'sp-tag': HTMLAttributes<HTMLElement> & {
        deletable?: boolean;
        disabled?: boolean;
      };
      'sp-thumbnail': HTMLAttributes<HTMLElement>;
      'sp-toast': HTMLAttributes<HTMLElement> & {
        open?: boolean;
        variant?: 'positive' | 'negative' | 'info';
      };
      'sp-tooltip': HTMLAttributes<HTMLElement>;
      'sp-top-nav': HTMLAttributes<HTMLElement>;
      'sp-top-nav-item': HTMLAttributes<HTMLElement> & {
        href?: string;
        selected?: boolean;
      };
      'sp-tray': HTMLAttributes<HTMLElement>;
      'sp-underlay': HTMLAttributes<HTMLElement>;
    }
  }
}
