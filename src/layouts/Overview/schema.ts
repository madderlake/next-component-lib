import type { Static } from "@marcom/fresco-app/layouts/SpecTypeBox";
import { AemUri, Type } from "@marcom/fresco-app/layouts/SpecTypeBox";

const Schema = Type.Object({
  _id: AemUri(),
});
export type SchemaType = Static<typeof Schema>;

export default Schema;
