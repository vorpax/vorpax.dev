import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { blogSource } from "@/lib/source";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            {...baseOptions()}
            tree={blogSource.pageTree}
            nav={{
                title: "Mon Blog",
            }}
        >
            {children}
        </DocsLayout>
    );
}