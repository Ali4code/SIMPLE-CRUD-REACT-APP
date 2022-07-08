import React, { ReactElement, FC } from "react";
import { StyledCard } from "../components/SinglePost";
import { useParams } from "react-router-dom";
import { useGetSinglePost } from "../hooks/useApi";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { CustomInputTitle, CustomInputBody } from "../components/ui/CustomInput";
import { Grid, Typography } from "@mui/material";

const Details: FC<any> = (): ReactElement => {
  let { id } = useParams();
  const { data, loading, error } = useGetSinglePost(id);

  const initialValues = {
    title: data?.title || "",
    body: data?.body || "",
  };
  console.log(initialValues)

  return (
    <StyledCard>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={(values) => console.log(values)} validationSchema={Yup.object({
                    title: Yup.string().required('This field is required'),
                    body: Yup.string().required('This field is required')
                })}>
        <Form>
          <Grid item xs ={10} direction="column" >
        <Typography variant="h4" paddingBottom={1}>Title</Typography>
        <CustomInputTitle
             name="title"
           />
           <Typography variant="h4" paddingTop={4} paddingBottom={1}>Body</Typography>
        <CustomInputBody
             name="body"
           />
           </Grid>
        </Form>
      </Formik>
    </StyledCard>
  );
};

export default Details;
