import csc from '../../../assets/svg/csc.svg';
import nationWide from '../../../assets/svg/nationWide.svg';
import shipment from '../../../assets/svg/shipment.svg';
import timely from '../../../assets/svg/timely.svg';
import fluent_building from '../../../assets/svg/fluent_building.svg';
import reliableService from '../../../assets/svg/reliableService.svg';
import { ServiceGridStyles } from './ServiceStyles';

export const DataArray = () => {
  const dataArray = [
    {
      title: 'Reliable and secure',
      img: `${reliableService}`,
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.'
    },
    {
      title: 'On-time delivery',
      img: `${timely}`,
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.'
    },
    {
      title: 'Track your shipment',
      img: `${shipment}`,
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.'
    },
    {
      title: 'Great Customer Service',
      img: `${csc}`,
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.'
    },
    {
      title: 'Nationwide Delivery',
      img: `${nationWide}`,
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.'
    },
    {
      title: 'Order Fulfilment',
      img: `${fluent_building}`,
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna.'
    }
  ];
  return (
    <>
      <ServiceGridStyles>
        {dataArray.map((data, index) => {
          return (
            <div className="serviceCard" key={index}>
              <img src={data.img} alt="" />
              <p className="serviceTitle">{data.title}</p>
              <p className="serviceText">{data.txt}</p>
            </div>
          );
        })}
      </ServiceGridStyles>
    </>
  );
};
