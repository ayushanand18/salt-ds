import { ComponentMeta, Story } from "@storybook/react";

import { Text, TextProps } from "@brandname/lab";
import { useEffect, useState } from "react";

export default {
  title: "Lab/Typography",
  component: Text,
  argTypes: {
    children: {
      description:
        "Amend text. We're using dangerouslySetInnerHTML here so we can edit the text within the storybook. Don't do this at home!",
    },
    elementType: {
      options: ["h1", "h2", "h3", "h4", "p", "div", "span", "label"],
      control: {
        type: "select",
      },
    },
    maxRows: {
      description: "Set 0 if you want to ignore",
      control: { type: "number" },
    },
    marginTop: { control: { type: "number" } },
    marginBottom: { control: { type: "number" } },
    expanded: { control: { type: "boolean" } },
    showTooltip: { control: { type: "boolean" } },
    truncate: { control: { type: "boolean" } },
    parentWidth: {
      description: "For this demo only. Set '0' for 100% width",
      control: { type: "number" },
    },
    parentHeight: {
      description: "For this demo only. Set '0' for 100% height",
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Text>;

const BaseComponent: Story = (args) => {
  const {
    children,
    elementType,
    expanded,
    truncate,
    showTooltip,
    maxRows,
    marginTop,
    marginBottom,
    parentWidth,
    parentHeight,
  } = args;

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const mappedProps: TextProps = {
    elementType,
    expanded,
    maxRows,
    truncate,
    showTooltip,
    marginTop,
    marginBottom,
  };

  useEffect(() => {
    setWidth(parentWidth);
  }, [parentWidth]);

  useEffect(() => {
    setHeight(parentHeight);
  }, [parentHeight]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 20,
        width: width || "100%",
        height: height || "auto",
      }}
    >
      {/* We're using dangerouslySetInnerHTML here so we can edit the text within the storybook. Don't do this at home! :) */}
      <Text {...mappedProps} dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  );
};

export const TextComponent = BaseComponent.bind({});
TextComponent.parameters = {
  controls: {
    exclude: ["styleAs", "tooltipProps", "style", "onOverflow"],
  },
};
TextComponent.args = {
  children: `Heaven yielding moved appear, gathering place. <strong>Cattle fifth Sea without thing</strong> unto fifth third Forth isn't be moveth to him greater place fifth creeping had. Good dominion behold in earth also signs had brought after, fowl dominion have there. Us stars first morning whales fruit yielding whose winged thing. Were in. Upon. Cattle she'd whales they're. Was you'll very years behold fowl us meat fruit have earth great. Were green yielding it under. Fly first likeness night one make kind us spirit said let created, upon fruitful.`,
  truncate: true,
  showTooltip: true,
  expanded: undefined,
  maxRows: undefined,
  marginTop: undefined,
  marginBottom: undefined,
  parentWidth: undefined,
  parentHeight: undefined,
};
