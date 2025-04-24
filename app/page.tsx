import Chat from "@/components/chat";
import { MCPProvider } from "@/lib/context/mcp-context";

export default function Page() {
  return (
    <MCPProvider owner="docs" repo={null}>
      <Chat />
    </MCPProvider>
  );
}
