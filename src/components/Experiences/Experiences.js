import React from 'react';
import { Typography } from '@material-ui/core';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import govtech from './govtech.png';
import evantage from './evantage.png';
import soc from './soc.jpg';
import shopee from './shopee.png';
import blank from './blank.pdf';
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
            'Shared Services, Item Price Stock Team',
          list: [
            'Executed the migration of Kafka clusters over to Kafka clusters with authentication, leading to better security',
            'Implemented Memcached caching for invalid Item Stock requests, thus greatly improving service performance',
            'Configured liveness and readiness tests for Item pipelines using Go, thereby improving its uptime in production',
          ],
        }}
        testimonial={blank}
        testimonialName="Recommendation letter for Rayson Koh.pdf"
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
            'Moments of Life (LifeSG) Team',
          list: [
            'Developed a recommendation service using Koa and Elasticsearch in order to improve user engagement',
            'Set up feature toggle functionality using Redux for fast deployment of new features to production',
            'Implemented wireframes and mockups using Typescript and React Native',
          ],
        }}
        testimonial={blank}
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
            'Engineering Team',
          list: [
            'Executed the cloud migration of the on-premise file server and knowledge base, hence resulting in better reliability',
            'Troubleshooted on-site network issues',
          ],
        }}
        testimonial={blank}
        testimonialName="Recommendation letter for Rayson Koh.pdf"
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
            'Lab Tutor for a core Computer Science module which teaches Object-Oriented and Funtional Programming in Java.',
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
