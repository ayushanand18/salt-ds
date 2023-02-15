import { DocsContext, getComponent } from "@storybook/blocks";
import { useContext } from "react";
import { ResetWrapper, Table } from "@storybook/components";
import { ClassNameRow } from "./ClassNameRow";
import { getDocgenSection } from "./utils";
import { EmptyBlock } from "./EmptyBlock";

export interface ClassName {
  name: string;
  description: string;
}
export function CSSClassTable(props: Record<string, string>): JSX.Element {
  const context = useContext(DocsContext);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const main = getComponent(props, context);
  const classNames = getDocgenSection<Record<string, ClassName>>(
    main,
    "classNames"
  );

  if (!classNames || Object.values(classNames).length < 1) {
    return (
      <EmptyBlock>No CSS class names found for this component.</EmptyBlock>
    );
  }

  return (
    <ResetWrapper>
      <Table className="docsblock-argstable">
        <thead className="docblock-argstable-head">
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Description</span>
            </th>
          </tr>
        </thead>
        <tbody className="docblock-argstable-body">
          {Object.values(classNames).map((className) => (
            <ClassNameRow key={className.name} row={className} />
          ))}
        </tbody>
      </Table>
    </ResetWrapper>
  );
}
