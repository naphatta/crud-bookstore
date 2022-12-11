import React from "react"
import { SvgIcon, Stack } from "@mui/material"

export const FormTmpl = ({
  imgComponent,
  btnName,
  footer,
  fields,
  onSubmit,
  logo,
}) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">{imgComponent}</div>

          <div className="col-4">
            <Stack direction="row" justifyContent="center">
              <SvgIcon
                sx={{
                  fontSize: 100,
                }}
                component={logo}
              />
            </Stack>

            <form onSubmit={onSubmit}>
              {fields.map((f, idx) => (
                <div key={idx} className="mb-3">
                  {f}
                </div>
              ))}

              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  {btnName}
                </button>
              </div>
            </form>
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}
