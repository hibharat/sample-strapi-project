import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.Enumeration<['Primary', 'Secondary']>;
    navigate_to_link: Attribute.String;
  };
}

export interface BlocksInfoItems extends Schema.Component {
  collectionName: 'components_blocks_info_items';
  info: {
    displayName: 'info_items';
  };
  attributes: {
    heading: Attribute.String;
    body: Attribute.Text;
    cta: Attribute.Component<'blocks.button', true>;
  };
}

export interface SectionBottomBanner extends Schema.Component {
  collectionName: 'components_section_bottom_banners';
  info: {
    displayName: 'Bottom Banner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'blocks.button'>;
  };
}

export interface SectionTopBanner extends Schema.Component {
  collectionName: 'components_section_top_banners';
  info: {
    displayName: 'Top Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    cta: Attribute.Component<'blocks.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.button': BlocksButton;
      'blocks.info-items': BlocksInfoItems;
      'section.bottom-banner': SectionBottomBanner;
      'section.top-banner': SectionTopBanner;
    }
  }
}
