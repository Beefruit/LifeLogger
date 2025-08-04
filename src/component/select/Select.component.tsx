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
  width?: string;
  height?: string;
  value?: CategoryType | string;
  options: IOption[];
  optionBackgroundColor?: string;
  onChange?: (value: IOption | null) => void;
  icon?: React.ReactNode;
  styles?: StylesConfig<IOption, false>;
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
  styles,
  icon,
  width = "100%",
  height = "4rem",
}) => {
  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value) ?? null,
    [value, options]
  );

  const customStyles: StylesConfig<IOption, false> = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
      paddingLeft: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...(styles?.control?.(provided, state) ?? {}),
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
      ...(styles?.option?.(provided, state) ?? {}),
    }),
    singleValue: (provided, state) => ({
      ...provided,
      ...(styles?.singleValue?.(provided, state) ?? {}),
    }),
    menu: (provided, state) => ({
      ...provided,
      ...(styles?.menu?.(provided, state) ?? {}),
    }),
    menuList: (provided, state) => ({
      ...provided,
      ...(styles?.menuList?.(provided, state) ?? {}),
    }),
  };

  return (
    <div style={{ width, height }}>
      <Select
        options={options}
        value={selectedOption}
        styles={customStyles}
        onChange={onChange}
        components={{ Control: CustomControl(icon) }}
      />
    </div>
  );
};

export default SelectComponent;
