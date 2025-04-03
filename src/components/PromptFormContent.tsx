import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormField from "./Form";
import { useField } from "react-final-form";
import { isEmpty } from "lodash";

export interface Conversation {
  role: "user" | " assistant";
  message: string;
}

interface PromptFormContentProps {
  loading?: boolean;
}

function PromptFormContent({ loading }: PromptFormContentProps) {
  const { input } = useField("query");
  const { value } = input;

  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        width: "100%",
      }}
    >
      <FormField.Text
        fieldName="query"
        label=""
        placeholder="Ask your question"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        loading={loading}
        disabled={isEmpty(value)}
      >
        Ask
      </Button>
    </Box>
  );
}

export default PromptFormContent;
