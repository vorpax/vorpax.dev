import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";


// biome-ignore lint/suspicious/noExplicitAny: <normal there>
const preComponent = ({ ref: _ref, ...props }: { ref?: React.Ref<any>; children?: React.ReactNode; [key: string]: any }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    );

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    pre: preComponent,
    Pre : preComponent,
    CodeBlock
  };
}


