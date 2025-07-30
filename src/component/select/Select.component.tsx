"use client";

import { FC, useMemo } from "react";
import Select, {
  StylesConfig,
  components,
  ControlProps,
  GroupBase,
} from "react-select";
import { CategoryType } from "@/containers/additional/hook/useAdditional";

interface IOption {
  value: CategoryType | string;
  label: string;
}

interface ISelectComponentProps {
  value?: CategoryType | string;
  options: IOption[];
  optionBackgroundColor?: string;
  onChange?: (value: IOption | null) => void;
  icon?: React.ReactNode;
  className?: string;
}

export const CustomControl = (icon?: React.ReactNode) => {
  const ControlComponent = (
    props: ControlProps<IOption, false, GroupBase<IOption>>
  ) => {
    return (
      <components.Control {...props}>
        {icon && (
          <div
            style={{
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {icon}
          </div>
        )}
        {props.children}
      </components.Control>
    );
  };

  ControlComponent.displayName = "CustomControl";

  return ControlComponent;
};

const SelectComponent: FC<ISelectComponentProps> = ({
  options,
  value,
  optionBackgroundColor,
  onChange,
  icon,
}) => {
  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value) ?? null,
    [value, options]
  );

  const customStyles: StylesConfig<IOption, false> = {
    control: (provided) => ({
      ...provided,
      fontSize: "1.4rem",
      paddingLeft: "2rem",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
      backgroundColor: state.isSelected
        ? optionBackgroundColor
        : state.isFocused
        ? optionBackgroundColor
        : provided.backgroundColor,
      color: state.isFocused || state.isSelected ? "#fff" : provided.color,
    }),
    singleValue: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
    }),
    menuList: (provided) => ({
      ...provided,
    }),
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      styles={customStyles}
      onChange={onChange}
      components={{ Control: CustomControl(icon) }}
    />
  );
};

export default SelectComponent;
