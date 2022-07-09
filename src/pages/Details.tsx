import React, { ReactElement, FC } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePost } from "../hooks/useApi";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomInputTitle, CustomInputBody } from "../components/ui/CustomInput";
import { Button, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Details: FC<any> = (): ReactElement => {
  let { id } = useParams();
  const { data, loading, error } = useGetSinglePost(id);

  const initialValues = {
    title: data?.title || "",
    body: data?.body || "",
  };
  console.log(initialValues);

  return (
    <Grid container justifyContent="center"paddingTop={10} color="primary.main">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          title: Yup.string().required("This field is required"),
          body: Yup.string().required("This field is required"),
        })}
      >
        {(props) => (
          <Form>
            <Grid item xs={12} direction="column">
              <Typography variant="h4" paddingBottom={1}>
                Title
              </Typography>
              <CustomInputTitle
                name="title"
                value={props.values.title}
                multiline
                maxRows={Infinity}
                sx={{ width: { xs: 280, sm: 500, md: 650 } }}
              />
              <Typography variant="h4" paddingTop={4} paddingBottom={1}>
                Body
              </Typography>
              <CustomInputBody
                name="body"
                value={props.values.body}
                multiline
                maxRows={Infinity}
                sx={{ width: { xs: 280, sm: 500, md: 650 } }}
              />
              <Grid item container paddingTop={5} justifyContent="space-between">
              <Button variant="contained" >Edit</Button>
              <DeleteIcon/>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default Details;
