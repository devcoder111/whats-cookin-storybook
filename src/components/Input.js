import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  FormControl,
  makeStyles,
  FormLabel,
} from "@material-ui/core";
import "./input.scss";

const useStyles = makeStyles((args) => {
  return {
    inputWrapper: {
      minWidth: "300px",
      flexDirection: "row",
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: (props) => {
        return `${props.borderColor}`;
      },
    },
    label: {
      marginRight: "8px",
    },
    root: {
      backgroundColor: (props) => props.backgroundColor,
    },
  };
});

export const CustomInput = ({
  isPrimary,
  size,
  type,
  id,
  label,
  placeholder,
  icon: Icon,
  onChangeCallback,
  backgroundColor,
  borderColor,
}) => {
  const [value, setValue] = React.useState("");
  // Doesn't change colors on props changed when the style is set to important
  const inputWrapperClasses = useStyles({ borderColor, backgroundColor });

  const inputWrapperClassnames = `inputWrapper ${
    inputWrapperClasses.inputWrapper
  } ${isPrimary ? "primary" : "secondary"}`;

  const inputClassnames = `input ${size === "large" ? "large" : "small"} `;

  return (
    <div className="input-container">
      <FormControl className={inputWrapperClassnames}>
        <FormLabel htmlFor={id} className={inputWrapperClasses.label}>
          {label}
        </FormLabel>
        <TextField
          size={size}
          className={inputClassnames}
          placeholder={placeholder}
          name={id}
          variant="outlined"
          type={type}
          onChange={(event) => {
            setValue(event.target.value);
            if (onChangeCallback) {
              onChangeCallback();
            }
          }}
          value={value}
          InputProps={{
            endAdornment: Icon ? <Icon /> : <noscript />,
            classes: {
              notchedOutline: inputWrapperClasses.notchedOutline,
              root: inputWrapperClasses.root,
            },
          }}
        />
      </FormControl>
    </div>
  );
};

CustomInput.propTypes = {
  isPrimary: PropTypes.bool,
  size: PropTypes.oneOf(["large", "small"]),
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.node, undefined]),
  onChangeCallback: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
};
