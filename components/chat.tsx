"use client";

import { defaultModel, type modelID } from "@/ai/providers";
import { useChat } from "@ai-sdk/react";
import { Textarea } from "./textarea";
import { ProjectOverview } from "./project-overview";
import { Messages } from "./messages";
import { toast } from "sonner";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { useMCP } from "@/lib/context/mcp-context";
import { useCallback } from "react";

export default function Chat() {
  const [selectedModel, setSelectedModel] = useLocalStorage<modelID>(
    "selectedModel",
    defaultModel
  );

  // Get MCP server data from context
  const { mcpServersForApi } = useMCP();

  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat({
      maxSteps: 20,
      body: {
        selectedModel,
        mcpServers: mcpServersForApi,
      },
      experimental_throttle: 500,
      onError: (error) => {
        toast.error(
          error.message.length > 0
            ? error.message
            : "An error occured, please try again later.",
          { position: "top-center", richColors: true }
        );
      },
    });

  // Custom submit handler
  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(e);
    },
    [input, handleSubmit]
  );

  const isLoading = status === "streaming" || status === "submitted";

  return (
    <div className="h-dvh flex flex-col justify-center w-full max-w-3xl mx-auto px-4 sm:px-6 md:py-4">
      {messages.length === 0 ? (
        <div className="max-w-xl mx-auto w-full">
          <ProjectOverview />
          <form onSubmit={handleFormSubmit} className="mt-4 w-full mx-auto">
            <Textarea
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              handleInputChange={handleInputChange}
              input={input}
              isLoading={isLoading}
              status={status}
              stop={stop}
            />
          </form>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto min-h-0 pb-2">
            <Messages
              messages={messages}
              isLoading={isLoading}
              status={status}
            />
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="mt-2 w-full mx-auto mb-4 sm:mb-auto"
          >
            <Textarea
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              handleInputChange={handleInputChange}
              input={input}
              isLoading={isLoading}
              status={status}
              stop={stop}
            />
          </form>
        </>
      )}
    </div>
  );
}
