import React, { useEffect, useState } from "react";
import { SelectInput, Textfield } from "../../atoms";

export default function TextfieldGroup(props: {
  form: any[];
  setData: (data: any) => void;
  data: any;
  showError: boolean;
  error?: any;
  setError?: (error: any) => void;
}) {
  return (
    <React.Fragment>
      {props.form.map((input, i) => {
        if (input.type === "select") {
          return (
            <SelectInput
              key={i}
              options={input.options}
              other={"mb-4"}
              label={input.label}
              name={input.nama}
              isNull={!props.data[input.nama] ? props.showError : false}
              onChange={(v) =>
                props.setData({
                  ...props.data,
                  [input.nama]: v.value,
                })
              }
            />
          );
        } else {
          return (
            <Textfield
              key={i}
              onInput={(e: any) =>
                props.setData({
                  ...props.data,
                  [input.nama]: e.target.value,
                })
              }
              other="mb-4"
              label={input.label}
              disabled={input.disabled || false}
              type={input.type}
              hidden={input.hidden || false}
              isNull={!props.data[input.nama] ? props.showError : false}
              onKeyUp={(e: any) => {
                if (props.error !== null && props.error !== undefined) {
                  const newError = { ...props.error };
                  delete newError[input.nama];
                  props.setError && props.setError(newError);
                }
              }}
              costumErrMessage={
                props.error !== null && props.error !== undefined
                  ? Object.keys(props.error).includes(input.nama) &&
                    props.error[input.nama]
                    ? props.error[input.nama]
                    : ""
                  : ""
              }
            />
          );
        }
      })}
    </React.Fragment>
  );
}
