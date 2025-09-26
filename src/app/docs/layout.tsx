import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { docSource } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={docSource.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
