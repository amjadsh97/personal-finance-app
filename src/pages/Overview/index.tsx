import {iconpot} from "../../icon";
import Button from "../../components/Button";

const Overview = () => {
  return (
    <div className='overview-page'>
      <h2 className='text-1 page-title'>Overview</h2>
      <div className="summary-cards">
        <div className="card balanced">
          <span className="card-title text-4">Current Balance</span>
          <span className="card-value text-1">$4,836.00</span>
        </div>
        <div className="card">
          <span className="card-title text-4">Income</span>
          <span className="card-value text-1">$4,836.00</span>
        </div>
        <div className="card">
          <span className="card-title text-4">Expenses</span>
          <span className="card-value text-1">$4,836.00</span>
        </div>
      </div>

      <div className="content">

        <div className="content-column">
          <div className="content__pots">
            <div className="content-header">
              <h3 className='text-2'>Pots</h3>
              <Button label={"See Details"} type={"tertiary"} icon={"../../public/images/icon-caret-right.svg"} />

            </div>
            <div className="content__pots-inner">

              <div className="pots-card">
                <img src={iconpot} alt="iocn pots"/>
                <div className="pots-card__content">
                  <span className='text-4 title'>Total Saved</span>
                  <h4 className='value text-1'>$850</h4>
                </div>
              </div>
              <ul className="data-list">
                <li className="data-item">
                  <span className='text-5 label'>Saving</span>
                  <span className='text-4-bold value'>$200</span>
                </li>
                <li className="data-item">
                  <span className='text-5 label'>Gift</span>
                  <span className='text-4-bold value'>$200</span>
                </li>
                <li className="data-item">
                  <span className='text-5 label'>Concert Ticket</span>
                  <span className='text-4-bold value'>$200</span>
                </li>
                <li className="data-item">
                  <span className='text-5 label'>New Laptop</span>
                  <span className='text-4-bold value'>$200</span>
                </li>
              </ul>
            </div>


          </div>

          <div className="content__transactions">
            <div className="content-header">
              <h3 className='text-2'>Transactions</h3>
              <Button label={"See Details"} type={"tertiary"} icon={"../../public/images/icon-caret-right.svg"}/>
            </div>
            <div className="transactions-rows">
              <div className="transaction">
                <div className="avatar">
                  <img src={"../../public/images/avatars/william-harris.jpg"} alt="avatar"/>
                </div>
                <h4 className='text-3'>Emma Rich</h4>
                <div className="row-wrapper">
                  <span className='text-4-bold value'>+$75.50</span>
                  <time className='text-5 date'>19 Aug 2024</time>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-column">
          <div className="content__budgets">
            <div className="content-header">
              <h3 className='text-2'>Budgets</h3>
              <Button label={"See Details"} type={"tertiary"} icon={"../../public/images/icon-caret-right.svg"} />
            </div>

            <div className="budgets-details">
              <div className="canvas"></div>
              <ul className="data-list">
                <li className="data-item">
                  <span className='text-5'>Entertainment</span>
                  <span className='text-4-bold'>$200</span>
                </li>
                <li className="data-item">
                  <span className='text-5'>Bills</span>
                  <span className='text-4-bold'>$200</span>
                </li>
                <li className="data-item">
                  <span className='text-5'>Dining Out</span>
                  <span className='text-4-bold'>$200</span>
                </li>
                <li className="data-item">
                  <span className='text-5'>Personal Care</span>
                  <span className='text-4-bold'>$200</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="content__recurring-bills">
            <div className="content-header">
              <h3 className='text-2'>Recurring Bills</h3>
              <Button label={"See Details"} type={"tertiary"} icon={"../../public/images/icon-caret-right.svg"} />
            </div>
            <div className="bills-records">
              <div className="record">
                <span className='record-value text-4'>Paid Bills</span>
                <span className='text-4-bold'>$190.00</span>
              </div>
              <div className="record">
                <span className='record-value text-4'>Paid Bills</span>
                <span className='text-4-bold'>$190.00</span>
              </div>
              <div className="record">
                <span className='record-value text-4'>Paid Bills</span>
                <span className='text-4-bold'>$190.00</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Overview;
