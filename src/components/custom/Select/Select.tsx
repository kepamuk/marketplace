import { FC } from "react";
import SelectComponent from "react-select";

interface ISelectProps {
  menuPlacement?: any;
  defaultValue?: any;
  propsChange?: any;
  placeholder?: any;
  className?: any;
  options?: any;
  value?: any;
  name?: any;
}

const Select: FC<ISelectProps> = ({
  menuPlacement,
  defaultValue,
  propsChange,
  placeholder,
  className,
  options,
  value,
  name,
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "5px",
      height: "48px",
      flexWrap: "nowrap",
      fontWeight: "400",
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: "none",
    }),
  };

  return (
    <SelectComponent
      menuPlacement={menuPlacement || "auto"}
      onChange={(e) => propsChange(e)}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
      styles={customStyles}
      isSearchable={false}
      options={options}
      value={value}
      name={name}
    />
  );
};

export default Select;
