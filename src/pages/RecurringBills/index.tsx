import {iconnavrecurringbills, iconrecurringbills} from "../../icon";
import DropdownFilter from "../../components/DropdownFilter";
import {useState} from "react";

const RecurringBills = () => {
  const [filterBySort, setFilterBySort] = useState(null);

  const sortOptions = [
    {value: 'latest', label: 'Latest'},
    {value: 'oldest', label: 'Oldest'},
    {value: 'A to Z', label: 'A to Z'},
    {value: 'Z to A', label: 'Z to A'},
    {value: 'highest', label: 'Highest'},
    {value: 'lowest', label: 'Lowest'},
  ];

  const handleFilterChange = (selectedOption: any) => {
    setFilterBySort(selectedOption.value);
  };

  return (
    <div className='recurring-page'>
      <h2 className='text-1 page-title'>Recurring Bills</h2>

      <div className="recurring-inner">

        <div className="recurring-inner-column">
          <div className="recurring-bills">
            <img src={iconrecurringbills} alt="icon for recurring bills"/>
            <span className="text-4 title">Total Bills</span>
            <h3 className="text-1">$384.98</h3>
          </div>

          <div className="recurring-summary">
            <h4 className="text-3">Summary</h4>

            <ul className="list">
              <li className="list-item">
                <span className="text-5 grey-500">Paid Bills</span>
                <span className="text-5-bold">4 ($190.00)</span>
              </li>
              <li className="list-item">
                <span className="text-5 grey-500">Paid Bills</span>
                <span className="text-5-bold">4 ($190.00)</span>
              </li>
              <li className="list-item">
                <span className="text-5 grey-500">Paid Bills</span>
                <span className="text-5-bold">4 ($190.00)</span>
              </li>


            </ul>
          </div>
        </div>

        <div className="table-bill">
          <div className="table-bill-header">
            <label htmlFor="search" className="input-search">
              <input className="text-4" placeholder="Search transaction" type="search" name="search" id="search"/>
              <img src="/public/images/icon-search.svg" alt="icon search"/>
            </label>
            <div className="sort-wrapper">
              <div className="sort-latest"><span className="text-4 grey-500">Sort By</span>
                <DropdownFilter options={sortOptions} onFilterChange={handleFilterChange}/></div>
            </div>
          </div>

          <div className="table">
            <div className="table-head-row">
              <span className="text-5 grey-500">Bill title</span>
              <span className="text-5 grey-500">Due Date</span>
              <span className="text-5 grey-500">Amount</span>
            </div>
            <div className="table-data-row">
              <span className="text-5 grey-500 bill-title">
                <span className="avatar">
                  <img src={"../../public/images/avatars/pixel-playground.jpg"} alt=""/>
                </span>
                <span className="text-4-bold grey-900">Spark Electric Solutions</span>
              </span>
              <time className="text-5 due-date">Monthly - 2nd</time>
              <span className="text-4-bold grey-500 amount">$30.00</span>
            </div>

          </div>
        </div>


      </div>


    </div>
  );
};

export default RecurringBills;
