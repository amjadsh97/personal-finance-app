import React, {useState} from 'react';
import "./style.css";
import {iconcaretdown} from "../../icon";

type Option = {
  value: string;
  label: string;
};

type DropdownFilterProps = {
  options: Option[];
  onFilterChange: (option: Option) => void;
};

const DropdownFilter: React.FC<DropdownFilterProps> = ({options, onFilterChange}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onFilterChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-filter ${isOpen ? 'opened' : ''}`}>
      <div className="dropdown-header text-4" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Latest'}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}><img src={iconcaretdown} alt="icon down"/></span>
      </div>
      <ul className={`dropdown-list ${isOpen ? "opened" : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`dropdown-item text-4 ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default DropdownFilter;
