import type { Entry } from "@zip.js/zip.js";

export async function getText(entry: Entry): Promise<string> {
  if (entry.directory) {
    return "";
  }

  const { TextWriter } = await import("./zip-js-lib");
  const text = await entry.getData(new TextWriter());
  return text;
}
