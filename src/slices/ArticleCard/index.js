/**
 * @typedef {import("@prismicio/client").Content.ArticleCardSlice} ArticleCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleCardSlice>} ArticleCardProps
 * @param {ArticleCardProps}
 */
const ArticleCard = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for article_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ArticleCard;
