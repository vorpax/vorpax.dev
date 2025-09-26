import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogSource } from "@/lib/source"; // On utilise la source du blog
import { getMDXComponents } from "@/mdx-components";

export default async function Page({
    params,
}: {
    params: { slug?: string[] };
}) {
    // On récupère la page depuis la source du blog
    const page = blogSource.getPage(params.slug);
    if (!page) notFound();

    // On utilise page.data.body, comme dans votre fichier de docs
    const MdxContent = page.data.body;

    return (
        // On utilise page.data.toc, comme dans votre fichier de docs
        <DocsPage toc={page.data.toc}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MdxContent components={getMDXComponents()} />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    // On utilise blogSource pour générer les paramètres
    return blogSource.getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug?: string[] };
}): Promise<Metadata> {
    const page = blogSource.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}