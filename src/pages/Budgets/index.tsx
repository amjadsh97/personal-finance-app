import {iconellipsis} from "../../icon";
import Button from "../../components/Button";

const Budgets = () => {
  return (
    <div className='budgets-page'>
      <h2 className='text-1 page-title'>Budgets</h2>

      <div className="budgets-wrapper">
        <div className="canvas-column">
          <div className="canvas" style={{height: "280px", width: "364px"}}>
            <h3 className="text-1 grey-900">$338</h3>
            <span className="text-5 grey-500">of $975 limit</span>
          </div>
          <h4 className='text-2 grey-900'>Spending Summary</h4>

          <ul className="summary-list">
            <li className='summary-list__item'>
              <span className='text-4 grey-500'>Entertainment</span>
              <span className='amount'>
                <span className='text-3 grey-900'>$15.00</span>
                <span className='text-5 grey-500'>of $500</span>
              </span>
            </li>
          </ul>

        </div>
        <div className="budgets-column">
          <div className="budget-card">
            <div className="budget-card__header">
              <h3 className="text-2 grey-900">Entertainment</h3>
              <img src={iconellipsis} alt=""/>
            </div>
            <div className="amount-wrapper">
              <span className='text-4 grey-500'>Maximum of $50.00</span>
              <div className="bar"></div>
              <ul className="amount-list">
                <li className="amount-item spent">
                  <span className='text-5 grey-500'>spent</span>
                  <span className='text-4-bold'>$13.00</span>
                </li>
                <li className="amount-item remaining">
                  <span className='text-5 grey-500'>Remaining</span>
                  <span className='text-4-bold'>$53.00</span>
                </li>
              </ul>
            </div>
            <div className="budget-card__latest-spending">
            <div className="latest-spending-header">
                <h4 className="text-3 grey-900">Latest Spending</h4>
                <Button type={"tertiary"} label={"See All"} icon={"../../public/images/icon-caret-right.svg"}/>
              </div>
              <ul className="latest-spending-list">
                <li className="latest-spending-item">
                  <div className="avatar">
                    <img src={"../../public/images/avatars/william-harris.jpg"} alt=""/>
                  </div>
                  <h5 className="text-5-bold">James Thompson</h5>
                  <div className="latest-spending-item__info">
                    <span className="text-5-bold">-$5.00</span>
                    <time className="text-5 grey-500">11 Aug 2024</time>
                  </div>
                </li>
                <li className="latest-spending-item">
                  <div className="avatar">
                    <img src={"../../public/images/avatars/william-harris.jpg"} alt=""/>
                  </div>
                  <h5 className="text-5-bold">James Thompson</h5>
                  <div className="latest-spending-item__info">
                    <span className="text-5-bold">-$5.00</span>
                    <time className="text-5 grey-500">11 Aug 2024</time>
                  </div>
                </li>
                <li className="latest-spending-item">
                  <div className="avatar">
                    <img src={"../../public/images/avatars/william-harris.jpg"} alt=""/>
                  </div>
                  <h5 className="text-5-bold">James Thompson</h5>
                  <div className="latest-spending-item__info">
                    <span className="text-5-bold">-$5.00</span>
                    <time className="text-5 grey-500">11 Aug 2024</time>
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Budgets;
