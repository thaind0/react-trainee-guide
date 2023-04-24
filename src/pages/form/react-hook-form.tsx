import { postSample } from "@/services/api/sample";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const ReactHookForm = () => {
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    defaultValues: {
      question: "",
    },
  });

  const onSuccessful = async (response: any) => toast(JSON.stringify(response));

  const { mutate, isLoading } = useMutation(
    ({ question }: { question: string }) => postSample(question),
    {
      onSuccess: (data) => onSuccessful(data),
    }
  );

  const onSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    await handleSubmit(({ question }) => {
      return mutate({ question });
    })();
    resetForm();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen">
      <form
        onSubmit={onSubmit}
        className="border border-gray-300 rounded-full overflow-hidden  2xl:p-3 p-1 flex flex-row"
      >
        <Controller
          name="question"
          control={control}
          render={({ field: { value, onChange } }) => (
            <input
              value={value}
              onChange={onChange}
              type="text"
              className=" w-full text-md text-gray-900 focus:outline-none pl-4 bg-white"
              placeholder="Nhập nội dung câu hỏi"
              required
              disabled={isLoading}
            />
          )}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2"
        >
          <div className="relative w-5 h-5">
            <PaperAirplaneIcon />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
