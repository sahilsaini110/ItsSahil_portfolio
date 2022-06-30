import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './CampaignBanner.scss';

const CampaignBanner = () => {
  return (
    <div className="Banner">
      <p>
        Open to opportunities{' '}
        <Link to="/contact">
          Contact Me <AiOutlineArrowRight />
        </Link>
      </p>
    </div>
  );
};

export default CampaignBanner;
