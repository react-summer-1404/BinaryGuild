import { Button } from "@heroui/button";
import React from "react";
import Cross from "../../../core/icons/Cross";
import { useMutation } from "@tanstack/react-query";
import instance from "../../../core/services/interceptor";
import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";

const Delete = ({ id }) => {
  const { mutate: deleteData } = useMutation({
    mutationFn: async (id) => {
      const response = await instance.delete("/CourseReserve", {id : id});
      return response;
    },
    onSuccess: () => {
      toast.success("gooooood");
    },
    onError: () => {
      toast.error("baaaaaaaaaad");
    },
  });
  const handleDelete = (Id) => {
    deleteData(Id);
  };
  return (
    <Formik onSubmit={handleDelete} initialValues={{Id : id}}>
      <Form>
        <Field name="Id" id="Id" />
        <Button radius="full" className="w-20px">
          <Cross />
        </Button>
      </Form>
    </Formik>
  );
};

export default Delete;
