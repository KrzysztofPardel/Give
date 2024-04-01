import { ChangeEvent } from "react";

interface InputLabel {
  labelHTML: string;
  labelCLASSS: string;
  labelCONTENT: string;
  inputOnCHANGE: (event: ChangeEvent<HTMLInputElement>) => void;
  inputVALUE: string;
  inputTYPE: string;
  inputCLASS: string;
  inputID: string;
}

const InputLabel = ({
  labelHTML,
  labelCLASSS,
  labelCONTENT,
  inputOnCHANGE,
  inputVALUE,
  inputTYPE,
  inputCLASS,
  inputID
}: InputLabel) => {
  return (
    <>
      <label htmlFor={labelHTML} className={labelCLASSS}>
        {labelCONTENT}
      </label>
      <input
        onChange={inputOnCHANGE}
        value={inputVALUE}
        type={inputTYPE}
        className={inputCLASS}
        id={inputID}
      />
    </>
  );
};

export default InputLabel;
