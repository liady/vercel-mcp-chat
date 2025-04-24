import { getRepoData } from "./utils";

const testcases = {
  "microsoft/playwright-mcp": [
    "https://github.com/microsoft/playwright-mcp",
    "https://github.com/microsoft/playwright-mcp/blob/main/src/mcp-server.ts",
    "https://microsoft.github.io/playwright-mcp",
    "https://microsoft.github.io/playwright-mcp/blob/main/src/mcp-server.ts",
    "https://gitmcp.io/microsoft/playwright-mcp",
    "https://gitmcp.io/microsoft/playwright-mcp/blob/main/src/mcp-server.ts",
    "https://microsoft.gitmcp.io/playwright-mcp",
    "https://microsoft.gitmcp.io/playwright-mcp/blob/main/src/mcp-server.ts",
    "github.com/microsoft/playwright-mcp",
    "github.com/microsoft/playwright-mcp/blob/main/src/mcp-server.ts",
    "microsoft.github.io/playwright-mcp",
    "microsoft.github.io/playwright-mcp/blob/main/src/mcp-server.ts",
    "gitmcp.io/microsoft/playwright-mcp",
    "gitmcp.io/microsoft/playwright-mcp/blob/main/src/mcp-server.ts",
    "microsoft.gitmcp.io/playwright-mcp",
    "microsoft.gitmcp.io/playwright-mcp/blob/main/src/mcp-server.ts",
    "microsoft/playwright-mcp",
  ],
  "null/null": [
    "microsoft.gitrmcp.io/playwright-mcp/blob/main/src/mcp-server.ts",
  ],
  "docs/null": ["docs.gitmcp.io", "docs.github.io", "gitmcp.io/docs"],
};

for (const [url, expected] of Object.entries(testcases)) {
  const result = getRepoData(url);
  console.log(result);
  console.log(expected);
}
