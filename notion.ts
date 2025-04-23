import { Client, isFullPage } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const databaseId = import.meta.env.NOTION_DATABASE_ID;

export async function getPagesList() {
  const posts = await notion.databases.query({
    database_id: databaseId,
    filter_properties: ["title"],
  });
  return await Promise.all(
    posts.results.map(async (page) => {
      console.log({ page });
      try {
        if (isFullPage(page) && page.properties.Name.type === "title") {
          console.log({
            id: page.id,
            title: page.properties.Name.title[0].plain_text,
            date: page.last_edited_time,
          });
          return {
            id: page.id,
            title: page.properties.Name.title[0].plain_text,
            date: page.last_edited_time,
          };
        }
      } catch (error) {
        console.error(error);
      }
    })
  );
}

export async function getPageAsMarkdown(id?: string) {
  if (!id) {
    return null;
  }
  const page = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(page);
  return mdString.parent;
}
