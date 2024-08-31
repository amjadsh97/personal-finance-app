import {useState} from "react";
import DropdownFilter from "../../components/DropdownFilter";
import {iconsearch} from "../../icon";

const Transactions = () => {

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
    <div className='transactions-page'>
      <h2 className='text-1 page-title'>Transactions</h2>

      <div className="transactions-wrapper">
        <div className="transactions-header">

          <label htmlFor={'search'} className="input-search">
            <input className='text-4' placeholder={'Search transaction'} type="search" name="search" id="search"/>
            <img src={iconsearch} alt="icon search"/>
          </label>

          <div className="sort-wrapper">

            <div className="sort-latest">
              <span className='text-4'>Sort By</span>
              <DropdownFilter options={sortOptions} onFilterChange={handleFilterChange}/>
            </div>

            <div className="sort-category">
              <span className='text-4'>Category</span>
              <DropdownFilter options={sortOptions} onFilterChange={handleFilterChange}/>
            </div>
          </div>
        </div>

        <div className="transactions-content">
          <div className="transactions-rows">

            <div className="transaction transactions-head-row">
              <span className="column sender text-5">Recipient / Sender</span>
              <span className="column category text-5">Category</span>
              <span className="column date text-5">Transaction Date</span>
              <span className="column amount text-5">Amount</span>
            </div>

            <div className="transaction">
              <div className="row-inner">
                <div className="avatar">
                  <img src={"../../public/images/avatars/william-harris.jpg"} alt="avatar"/>
                </div>
                <h4 className='text-3'>Emma Rich</h4>
              </div>
              <span className="category text-5">General</span>
              <time className='text-5 date'>19 Aug 2024</time>
              <span className='text-4-bold value'>+$75.50</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Transactions;
