export type OfferingItem = {
  /** Slug used for the asset filename and as the React key. */
  slug: string;
  /** Discipline name, e.g. "Out of home". */
  title: string;
  /** One-line proof, e.g. "Six brands live on Qatar boards". */
  caption: string;
  /** Short format label shown in the corner of the card. */
  format: string;
  /** Client or programme the work was shipped for. */
  client: string;
  /** Path under /public. */
  image: string;
  /** Intrinsic size of the asset — next/image needs both. */
  width: number;
  height: number;
  /** Portrait cards get a taller media box than landscape ones. */
  orientation: "portrait" | "landscape";
};
