import { defineType } from "sanity";
import { footer } from "./footer";

export const elements =  defineType({
  name: 'elements',
  title: 'Elements',
  type: 'document',
  fields: [
    footer
  ],
})