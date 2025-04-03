import Box from "@mui/material/Box";
import { Conversation } from "./PromptForm";

interface ConversationCardProps extends Conversation {}

function ConversationCard({ role, message }: ConversationCardProps) {
  return (
    <Box
      className={`p-2 ${role === "assistant" ? "assistant-role" : "user-role"}`}
      dangerouslySetInnerHTML={{ __html: message }}
    ></Box>
  );
}

export default ConversationCard;
