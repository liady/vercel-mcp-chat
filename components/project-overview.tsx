import { useMCP } from "@/lib/context/mcp-context";
import NextLink from "next/link";
export const ProjectOverview = () => {
  const { owner, repo } = useMCP();
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4">
        {repo ? `Chat with ${repo} docs` : "Chat with GitHub docs"}
      </h1>
      <p className="text-gray-500 mb-4">
        Ask questions about the {repo ? `${owner}/${repo}` : "GitHub"}{" "}
        documentation.
      </p>
    </div>
  );
};

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink
      target="_blank"
      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-75"
      href={href}
    >
      {children}
    </NextLink>
  );
};
