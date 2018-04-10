// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  S,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Appear,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import prod1 from '../assets/prod-jsp-loaded.jpg';
import prod2 from '../assets/prod-loaded.jpg';
import react1 from '../assets/react-jsp-loaded.jpg';
import react2 from '../assets/react-initial-load.jpg';
import react3 from '../assets/react-dom-ready.jpg';
import ngLogo from '../assets/angular.svg';
import reactLogo from '../assets/React-icon.svg';
import reactPng from '../assets/React_logo_wordmark.png';
import devTools from '../assets/devtools.png';

// Require CSS
import './slides.css';
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    code: '#334433',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const ImageBar = ({ active }) => (
  <div className="image-bar">
    <Image className={active.jq ? 'active' : 'inactive'} src={jq} />
    <Image className={active.vue ? 'active' : 'inactive'} src={vue} />
    <Image className={active.java ? 'active' : 'inactive'} src={java} />
    <Image className={active.react ? 'active' : 'inactive'} src={reactLogo} />
  </div>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} controls={false}>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit className="header" caps>
            React POC
          </Heading>
          <Heading size={3} fit caps textColor="secondary">
            key results and lessons
          </Heading>
          <List textColor="primary" className="dev-list " fit>
            <Appear>
              <ListItem>Significant Performance Increases</ListItem>
            </Appear>
            <Appear>
              <ListItem>Smaller Code Bundle Sizes</ListItem>
            </Appear>
            <Appear>
              <ListItem>More Efficient Development Process</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easier to Debug and Test</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" className="header" fit caps>
            Performance
          </Heading>
          <Heading size={5} fit caps>
            Current production code
          </Heading>
          <div className="image-bar">
            <div className="img-label">
              <Heading size={4} fit>
                Initial Load: 608 ms
              </Heading>
              <Image src={prod1} />
            </div>
            <div className="img-label">
              <Heading size={4} fit>
                Page Ready: 1.4 s
              </Heading>
              <Image src={prod2} />
            </div>
          </div>
          <Heading size={5} fit caps>
            React proof of concept code
          </Heading>
          <div className="image-bar">
            <div className="img-label">
              <Heading size={4} fit>
                Initial Load: 485 ms
              </Heading>
              <Image src={react1} />
            </div>
            <div className="img-label">
              <Heading size={4} fit>
                React Loaded: 753 ms
              </Heading>
              <Image src={react2} />
            </div>

            <div className="img-label">
              <Heading size={4} fit>
                Page Ready: 798 ms
              </Heading>
              <Image src={react3} />
            </div>
          </div>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit caps className="header">
            Development
          </Heading>
          <List textColor="primary" className="dev-list primary">
            <Appear>
              <ListItem>Smaller, reusable components</ListItem>
            </Appear>
            <Appear>
              <ListItem className="sub">
                <em>faster development, fewer bugs</em>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Faster build process</ListItem>
            </Appear>
            <Appear>
              <ListItem className="sub">
                <em>more iteration, less waiting</em>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>It's all just JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem className="sub">
                <em>easier to train and learn</em>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Large Dev Community</ListItem>
            </Appear>
            <Appear>
              <ListItem className="sub">
                <em>easier to find answers</em>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit caps className="header">
            Debugging/Testing
          </Heading>
          <div className="img-list-split">
            <div className="image-col">
              <Image src={devTools} />
            </div>
            <List textColor="primary" className="dev-list debug-list">
              <Appear>
                <ListItem>Simpler codebase</ListItem>
              </Appear>
              <Appear>
                <ListItem className="sub">
                  <em>easier to understand and reason through</em>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Sophisticated tools</ListItem>
              </Appear>
              <Appear>
                <ListItem className="sub">
                  <em>easier to understand code on page</em>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Built to be tested</ListItem>
              </Appear>
              <Appear>
                <ListItem className="sub">
                  <em>Automated testing reduces defects before QA even sees them</em>
                </ListItem>
              </Appear>
            </List>
          </div>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit className="header" caps>
            <span className="costText">Costs </span>&nbsp;&nbsp; Benefits
          </Heading>
          <Heading size={6} caps fit textColor="primary">
            development/training costs, efficiency/performance benefits
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <List className="costs bg white costText">
                  <ListItem>2 weeks to codify norms/practices</ListItem>
                  <ListItem>2-3 weeks to train up team on simple feature</ListItem>
                  <ListItem>2-3 weeks to convert existing componentized feature</ListItem>
                  <ListItem>4 weeks to convert non-componentized feature</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <List className="benefits bg">
                  <ListItem>Faster Pages = Higher Conversion</ListItem>
                  <ListItem>New Features should take 3-4 weeks vs 5-6 weeks</ListItem>
                  <ListItem>Automated tests should reduce bugs by 50%</ListItem>
                  <ListItem>Easier to maintain: costs decrease over time </ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit caps className="header">
            Next Steps
          </Heading>
          <div className="image-bar-bg">
            <Image src={ngLogo} />
            <Image src={reactPng} />
          </div>

          <List textColor="primary" className="dev-list ">
            <ListItem>Compare notes with Huntersville Team</ListItem>
            <ListItem className="sub">
              <em>Consult with ATD's Angular experts to determine the best framework solution</em>
            </ListItem>
            <ListItem>Move forward with new process</ListItem>
            <ListItem className="sub">
              <em>Rebuild payment/confirmation page with new framework</em>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
