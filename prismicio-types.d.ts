// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for ArticleCard documents
 */
interface ArticlecardDocumentData {
  /**
   * Link Image field in *ArticleCard*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.link_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  link_image: prismic.ImageField<never>;

  /**
   * Image Alt field in *ArticleCard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.image_alt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_alt: prismic.KeyTextField;

  /**
   * Category Name field in *ArticleCard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.category_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category_name: prismic.KeyTextField;

  /**
   * Category Color field in *ArticleCard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.category_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category_color: prismic.KeyTextField;

  /**
   * Title field in *ArticleCard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *ArticleCard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  date: prismic.KeyTextField;

  /**
   * Author field in *ArticleCard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articlecard.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;
}

/**
 * ArticleCard document from Prismic
 *
 * - **API ID**: `articlecard`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticlecardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticlecardDocumentData>,
    "articlecard",
    Lang
  >;

export type AllDocumentTypes = ArticlecardDocument;

/**
 * Primary content in *ArticleCard → Default → Primary*
 */
export interface ArticleCardSliceDefaultPrimary {
  /**
   * ImageLink field in *ArticleCard → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article_card.default.primary.imagelink
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagelink: prismic.ImageField<never>;

  /**
   * textContentLink field in *ArticleCard → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_card.default.primary.textcontentlink
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textcontentlink: prismic.RichTextField;
}

/**
 * Default variation for ArticleCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticleCardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ArticleCard*
 */
type ArticleCardSliceVariation = ArticleCardSliceDefault;

/**
 * ArticleCard Shared Slice
 *
 * - **API ID**: `article_card`
 * - **Description**: ArticleCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleCardSlice = prismic.SharedSlice<
  "article_card",
  ArticleCardSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticlecardDocument,
      ArticlecardDocumentData,
      AllDocumentTypes,
      ArticleCardSlice,
      ArticleCardSliceDefaultPrimary,
      ArticleCardSliceVariation,
      ArticleCardSliceDefault,
    };
  }
}