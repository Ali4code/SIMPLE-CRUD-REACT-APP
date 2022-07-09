import React, { ReactElement, FC } from "react";
import { useCreatePost } from "../hooks/useApi";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomInputTitle, CustomInputBody } from "../components/ui/CustomInput";
import { Button, Grid, Typography } from "@mui/material";
import WithLoader from "../components/ui/WithLoader";

const Create: FC<any> = (): ReactElement => {
  const { create, isLoading, error } = useCreatePost();

  const initialValues = {
    title: "",
    body: "",
  };
  return (
    <WithLoader isLoading={isLoading}>
    <Grid container justifyContent="center" paddingTop={10} color="primary.main">
    {error && (
                  <Typography variant="h6" color="red">
                    {JSON.stringify(error)}
                  </Typography>
                )}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => create(values)}
        validationSchema={Yup.object({
          title: Yup.string().required("This field is required"),
          body: Yup.string().required("This field is required"),
        })}
      >
        {(props) => (
          <Form>
            <Grid container item xs={12} direction="column">
              <Typography variant="h4" paddingBottom={1}>
                Title
              </Typography>
              <CustomInputTitle
                name="title"
                value={props.values.title}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                multiline
                maxRows={Infinity}
                sx={{ width: { xs: 280, sm: 500, md: 650 } }}
              />
              {props.errors.title && (
                <Typography variant="h6" color="red">
                  {props.errors.title}
                </Typography>
              )}
              <Typography variant="h4" paddingTop={4} paddingBottom={1}>
                Body
              </Typography>
              <CustomInputBody
                name="body"
                value={props.values.body}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                multiline
                maxRows={Infinity}
                sx={{ width: { xs: 280, sm: 500, md: 650 } }}
              />
              {props.errors.body && (
                <Typography variant="h6" color="red">
                  {props.errors.body}
                </Typography>
              )}
              <Grid item container paddingTop={5} justifyContent="space-between">
                <Button variant="contained" type="submit">
                  Post
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
    </WithLoader>
  );
};

export default Create;
