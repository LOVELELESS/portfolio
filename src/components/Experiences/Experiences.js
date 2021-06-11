import React from 'react';
import { Typography } from '@material-ui/core';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import govtech from './govtech.png';
import evantage from './evantage.png';
import soc from './soc.jpg';
import shopee from './shopee.png';
import evantageTestimonial from './Evantage-Testimonial.pdf';
import govtechTestimonial from './Govtech-Testimonial.pdf';
import './Experiences.css';

const Experiences = () => {
  return (
    <div className="Experiences">
      <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>
        Internships
      </Typography>
      <ExperienceCard
        image={shopee}
        alt="Shopee"
        link="https://shopee.sg/"
        date={{
          from: 'May 2021',
          to: 'Aug 2021',
        }}
        text={{
          title: 'Shopee Singapore Private Limited',
          title2: 'Software Engineer Intern (3 Months)',
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            'Currently working in the Shared Services team.',
        }}
      />
      <ExperienceCard
        image={govtech}
        alt="GovTech"
        link="https://www.tech.gov.sg"
        date={{
          from: 'May 2020',
          to: 'Aug 2020',
        }}
        text={{
          title: 'Government Technology Agency of Singapore (GovTech)',
          title2: 'Software Engineer Intern (3 Months)',
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            'Worked on the Moments of Life (LifeSG) mobile app which integrates government services.',
          list: [
            'Developed a recommendation backend service using Koa and Elasticsearch',
            'Implemented UX mockups using TypeScript and React Native',
            'Set up feature toggles using Redux and ConfigCat to allow seamless rollout of app features to production',
          ],
        }}
        testimonial={govtechTestimonial}
        testimonialName="Recommendation letter for Rayson Koh.pdf"
      />
      <ExperienceCard
        image={evantage}
        alt="Evantage Technology"
        link="https://www.evantage-technology.com"
        date={{
          from: 'Feb 2019',
          to: 'July 2019',
        }}
        text={{
          title: 'Evantage Technology Pte Ltd',
          title2: 'IT Engineer Intern (6 Months)',
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            'Worked with the Engineering team to resolve technical issues through onsite client visits and remote sessions.',
          list: [
            'Migrated on-premise fileserver and knowledge-base to the cloud',
            'Troubleshooted on-site network issues',
            'Deployed workstations at scale using sysprep imaging',
          ],
        }}
        testimonial={evantageTestimonial}
        testimonialName="Rayson-Intern-Testimonial-2019.pdf"
      />
      <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>
        Teaching Experience
      </Typography>
      <ExperienceCard
        image={soc}
        alt="School of Computing"
        link="https://www.comp.nus.edu.sg/programmes/ug/cs/"
        date={{
          from: 'Jan 2020',
          to: 'May 2020',
        }}
        text={{
          title: 'National University of Singapore, School of Computing',
          title2: 'CS2030 Lab Tutor (5 Months)',
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            'Worked as a lab tutor for a core Computer Science module which teaches Object-Oriented and Funtional Programming in Java.',
          list: [
            'Conducted lab briefings for each lab session (total of 10 sessions)',
            'Guide and assess students\' lab submissions',
          ],
        }}
      />
    </div>
  );
};

export default Experiences;
