import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from "./components/Select/Select";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Title from "./components/Title/Title";
import { Form, Field } from "react-final-form";
import { hasOnlyNumbersCommasDots, numberWithCommas } from "./utils";

const ERROR_MESSAGES = {
  number: "This field must contain only numbers",
  required: "This is a required field.",
  priceDiff: "Wholesale price should be more than the sticker price",
};

type InitialValues = {
  autoMarkup: "No" | "Yes";
  stickerPrice: string;
  onlinePrice: string;
  wholesalePrice: string;
  requiredDown: string;
};

function App() {
  const initialValues: InitialValues = {
    autoMarkup: "No",
    stickerPrice: "",
    onlinePrice: "",
    wholesalePrice: "",
    requiredDown: "",
  };

  const requiredFields: (keyof InitialValues)[] = [
    "onlinePrice",
    "requiredDown",
    "stickerPrice",
    "wholesalePrice",
  ];

  const onSubmit = (values: InitialValues) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          validate={(values: InitialValues) => {
            const errors: { [key: string]: string } = {};

            // Validation for numbers and required fields
            requiredFields.forEach((key) => {
              if (!values[key]) {
                errors[key] = ERROR_MESSAGES.required;
              } else if (
                hasOnlyNumbersCommasDots(values[key]) &&
                isNaN(Number(values[key].replace(/,/g, "")))
              ) {
                errors[key] = ERROR_MESSAGES.number;
              }
            });

            // Addtitional validations
            const formatedStickerPrice = Number(
              values.stickerPrice ? values.stickerPrice.replace(/,/g, "") : ""
            );
            const formatedWholesalePrice = Number(
              values.wholesalePrice
                ? values.wholesalePrice.replace(/,/g, "")
                : ""
            );
            if (formatedStickerPrice > formatedWholesalePrice) {
              errors.stickerPrice = ERROR_MESSAGES.priceDiff;
            }

            return errors;
          }}
          render={({ handleSubmit, values, hasValidationErrors }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    width: "500px",
                    padding: "20px",
                  },
                }}
              >
                <Paper>
                  <Title title="Pricing" />
                  <Field name="autoMarkup">
                    {({ input, meta }) => (
                      <Select
                        {...input}
                        id="auto-markup"
                        label="Auto Markup*"
                        error={meta.error && meta.touched}
                        value={values.autoMarkup}
                      />
                    )}
                  </Field>

                  <Field name="stickerPrice">
                    {({ input, meta }) => {
                      return (
                        <div>
                          <Input
                            {...input}
                            type="text"
                            id="sticker-price"
                            label="Sticker Price*"
                            error={meta.error && meta.touched}
                            errorMessage={meta.error}
                            value={numberWithCommas(values.stickerPrice)}
                            placeholder="123,123.00"
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="onlinePrice">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          id="online-price"
                          error={meta.error && meta.touched}
                          errorMessage={meta.error}
                          label="Online Price*"
                          value={numberWithCommas(values.onlinePrice)}
                          placeholder="123,123.00"
                        />
                      </div>
                    )}
                  </Field>
                  <Field name="wholesalePrice">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          id="wholesale-price"
                          error={meta.error && meta.touched}
                          errorMessage={meta.error}
                          label="Wholesale Price*"
                          value={numberWithCommas(values.wholesalePrice)}
                          placeholder="123,123.00"
                        />
                      </div>
                    )}
                  </Field>

                  <Field name="requiredDown">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          id="required-down"
                          error={meta.error && meta.touched}
                          errorMessage={meta.error}
                          label="Required Down*"
                          value={numberWithCommas(values.requiredDown)}
                          placeholder="123,123.00"
                        />
                      </div>
                    )}
                  </Field>
                </Paper>
              </Box>
              <div className="button-container">
                <Button disabled={hasValidationErrors} text="Save & Close" />
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default App;
