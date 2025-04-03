import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Form } from "react-final-form";
import { useState } from "react";
import { showSnackbar } from "../store/actions";
import uploadFile from "../lib/api/endpoints/files";
import { isNull } from "lodash";

function UploadFileForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (values: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file as any);

    try {
      await uploadFile(formData);

      setLoading(false);
      showSnackbar("Document uploaded.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setLoading(false);
        showSnackbar(error.message);
      }
    }
  };

  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Chat with PDF
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 2.5 }}>
          Let AI help you get the most from you documents, papers and more.
        </Typography>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gap: 1,
                }}
              >
                <input id="file" type="file" onChange={handleFileChange} />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  loading={loading}
                  disabled={isNull(file)}
                >
                  Upload file
                </Button>
              </Box>
            </form>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default UploadFileForm;
