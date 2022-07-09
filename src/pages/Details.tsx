import React, { ReactElement, FC } from "react";
import { useParams } from "react-router-dom";
import { useUpdatePost, useDeletePost, useGetSinglePost } from "../hooks/useApi";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomInputTitle, CustomInputBody } from "../components/ui/CustomInput";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Details: FC<any> = (): ReactElement => {
  let { id } = useParams();
  const { data, loading, error } = useGetSinglePost(id);
  const { deletePost, loading: deleteLoading, error: deleteError } = useDeletePost(id);
  const { update, loading: updateLoading, error: updateError } = useUpdatePost(id);

  const initialValues = {
    title: data?.title || "",
    body: data?.body || "",
  };

  return (
    <Grid container justifyContent="center" paddingTop={10} color="primary.main">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => update(values)}
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
                  Update
                </Button>
                <IconButton onClick={deletePost}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default Details;
