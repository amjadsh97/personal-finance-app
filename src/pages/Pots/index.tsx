import {iconellipsis} from "../../icon";
import Button from "../../components/Button";

const Pots = () => {
  return (
    <div className='pots-page'>
      <h2 className='text-1 page-title'>Pots</h2>

      <div className="pots-cards-container">
        <div className="pots-card">
          <div className="pots-card__header">
            <h3 className="text-2 grey-900">Savings</h3>
            <img src={iconellipsis} alt=""/>
          </div>
          <div className="pots-card__row">
            <span className="text-4">Total Saved</span>
            <span className="text-1">$159.00</span>
          </div>
          <div className="pots-bar">
            <div className="bar"></div>
            <div className="pots-bar__wrapper">
              <span className="text-5-bold grey-500">7.95%</span>
              <span className='text-5 grey-500'>Target of $2,000</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Button label={"+ Add Money"} type={"secondary"}/>
            <Button label={"Withdraw"} type={"secondary"}/>
          </div>

        </div>
        <div className="pots-card">
          <div className="pots-card__header">
            <h3 className="text-2 grey-900">Savings</h3>
            <img src={iconellipsis} alt=""/>
          </div>
          <div className="pots-card__row">
            <span className="text-4">Total Saved</span>
            <span className="text-1">$159.00</span>
          </div>
          <div className="pots-bar">
            <div className="bar"></div>
            <div className="pots-bar__wrapper">
              <span className="text-5-bold grey-500">7.95%</span>
              <span className='text-5 grey-500'>Target of $2,000</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Button label={"+ Add Money"} type={"secondary"}/>
            <Button label={"Withdraw"} type={"secondary"}/>
          </div>

        </div>
        <div className="pots-card">
          <div className="pots-card__header">
            <h3 className="text-2 grey-900">Savings</h3>
            <img src={iconellipsis} alt=""/>
          </div>
          <div className="pots-card__row">
            <span className="text-4">Total Saved</span>
            <span className="text-1">$159.00</span>
          </div>
          <div className="pots-bar">
            <div className="bar"></div>
            <div className="pots-bar__wrapper">
              <span className="text-5-bold grey-500">7.95%</span>
              <span className='text-5 grey-500'>Target of $2,000</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Button label={"+ Add Money"} type={"secondary"}/>
            <Button label={"Withdraw"} type={"secondary"}/>
          </div>

        </div>
        <div className="pots-card">
          <div className="pots-card__header">
            <h3 className="text-2 grey-900">Savings</h3>
            <img src={iconellipsis} alt=""/>
          </div>
          <div className="pots-card__row">
            <span className="text-4">Total Saved</span>
            <span className="text-1">$159.00</span>
          </div>
          <div className="pots-bar">
            <div className="bar"></div>
            <div className="pots-bar__wrapper">
              <span className="text-5-bold grey-500">7.95%</span>
              <span className='text-5 grey-500'>Target of $2,000</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Button label={"+ Add Money"} type={"secondary"}/>
            <Button label={"Withdraw"} type={"secondary"}/>
          </div>

        </div>
        <div className="pots-card">
          <div className="pots-card__header">
            <h3 className="text-2 grey-900">Savings</h3>
            <img src={iconellipsis} alt=""/>
          </div>
          <div className="pots-card__row">
            <span className="text-4">Total Saved</span>
            <span className="text-1">$159.00</span>
          </div>
          <div className="pots-bar">
            <div className="bar"></div>
            <div className="pots-bar__wrapper">
              <span className="text-5-bold grey-500">7.95%</span>
              <span className='text-5 grey-500'>Target of $2,000</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Button label={"+ Add Money"} type={"secondary"}/>
            <Button label={"Withdraw"} type={"secondary"}/>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Pots;
