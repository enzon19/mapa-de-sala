import { c as create_ssr_component, d as add_attribute, v as validate_component } from './index2-17e2f452.js';
import { t as tags } from './tags-4f0c6452.js';

const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tagType } = $$props;
  const tag = tags[tagType];
  const IconComponent = tag.icon;
  if ($$props.tagType === void 0 && $$bindings.tagType && tagType !== void 0)
    $$bindings.tagType(tagType);
  return `<div${add_attribute("class", `flex flex-row items-center justify-center text-center m-4 p-4 rounded-2xl ${tag.color}`, 0)}>${validate_component(IconComponent, "IconComponent").$$render(
    $$result,
    {
      class: "inline-block mr-2 w-16 h-16 sm:w-7 sm:h-7"
    },
    {},
    {}
  )}
  <span><!-- HTML_TAG_START -->${tag.text}<!-- HTML_TAG_END --></span></div>`;
});

export { Tag as T };
//# sourceMappingURL=Tag-980f0f0c.js.map
