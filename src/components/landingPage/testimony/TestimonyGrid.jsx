import React from 'react';
import avata from '../../../assets/svg/avata.svg';
import star5 from '../../../assets/svg/star5.svg';
import { TestimonyCardStyles } from './TestimonyStyles';

function TestimonyGrid() {
  const dataArray = [
    {
      img: `${avata}`,
      name: 'John Doe',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium velit eget justo, turpis.',
      rating: `${star5}`
    },
    {
      img: `${avata}`,
      name: 'John Doe',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium velit eget justo, turpis.',
      rating: `${star5}`
    },
    {
      img: `${avata}`,
      name: 'John Doe',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium velit eget justo, turpis.',
      rating: `${star5}`
    },
    {
      img: `${avata}`,
      name: 'John Doe',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium velit eget justo, turpis.',
      rating: `${star5}`
    },
    {
      img: `${avata}`,
      name: 'John Doe',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium velit eget justo, turpis.',
      rating: `${star5}`
    },
    {
      img: `${avata}`,
      name: 'John Doe',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est leo a eget risus nunc. Arcu amet nibh arcu risus vulputate. Amet, ac nec, nunc viverra massa blandit nec enim volutpat. Cursus pretium velit eget justo, turpis.',
      rating: `${star5}`
    }
  ];
  return (
    <TestimonyCardStyles>
      {dataArray.map((data, index) => {
        return (
          <div className="testimonyCard" key={index}>
            <img src={data.img} alt="" className="img1" />
            <div className="clientest2">
              <p className="testimonyText">{data.txt}</p>
              <div className="clientPosition">
                <p className="clientName">{data.name}</p>
                <img src={data.rating} alt="" className="img2" />
              </div>
            </div>
          </div>
        );
      })}
    </TestimonyCardStyles>
  );
}

export default TestimonyGrid;
