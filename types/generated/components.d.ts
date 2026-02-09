import type { Schema, Struct } from '@strapi/strapi';

export interface ApartmentAmenity extends Struct.ComponentSchema {
  collectionName: 'components_apartment_amenities';
  info: {
    displayName: 'amenity';
  };
  attributes: {
    description: Schema.Attribute.String;
    included: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApartmentBonus extends Struct.ComponentSchema {
  collectionName: 'components_apartment_bonuses';
  info: {
    displayName: 'bonus';
  };
  attributes: {
    description: Schema.Attribute.String;
    included: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApartmentRules extends Struct.ComponentSchema {
  collectionName: 'components_apartment_rules';
  info: {
    displayName: 'rules';
  };
  attributes: {
    checkIn: Schema.Attribute.String;
    checkOut: Schema.Attribute.String;
    description: Schema.Attribute.String;
    pets: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    smoking: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApartmentSeo extends Struct.ComponentSchema {
  collectionName: 'components_apartment_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metadesctiption: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'apartment.amenity': ApartmentAmenity;
      'apartment.bonus': ApartmentBonus;
      'apartment.rules': ApartmentRules;
      'apartment.seo': ApartmentSeo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
