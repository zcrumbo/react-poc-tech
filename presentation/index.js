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
import ngLogo from '../assets/angular2.svg';
import reactLogo from '../assets/React-icon.svg';
import reactPng from '../assets/React_logo_wordmark.png';
import devTools from '../assets/devtools.png';
import markedUp from '../assets/react-detail-marked.png';

// Require CSS
import './slides.css';
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    ng: '#b30025',
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
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
      >
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" className="header" fit caps>
            Requirements
          </Heading>
          <List textColor="primary" className="dev-list">
            <ListItem>Render above the fold static content SS</ListItem>

            <ListItem className="sub">
              <em>integrate components onto JSP pages</em>
            </ListItem>

            <ListItem>Components distributed across DOM tree</ListItem>

            <ListItem className="sub">
              <em>JS components must exist outside root app node</em>
            </ListItem>

            <ListItem>Share state across all elements</ListItem>

            <ListItem className="sub">
              <em>children/siblings must update on changes</em>
            </ListItem>

            <ListItem>70% Unit test coverage for UI and Logic</ListItem>

            <ListItem className="sub">
              <em>Snapshot and UI interaction, plus business logic</em>
            </ListItem>

            <ListItem>Build process that allows for portability</ListItem>

            <ListItem className="sub">
              <em>Tree shaking, static analysis and code splitting</em>
            </ListItem>

            <ListItem>Integration with existing JS solutions</ListItem>

            <ListItem className="sub">
              <em>must play nice with existing & 3rd party JS on page</em>
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/jsp.example')}
          ranges={[
            { loc: [0, 474], title: 'Root JSP page' },
            {
              loc: [0, 6],
              note: 'JSP rendered content',
            },
            {
              loc: [7, 19],
              note: 'Passing through server variables to React',
            },
            { loc: [21, 33], note: 'Different portal targets' },
          ]}
        />
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/init.example')}
          ranges={[
            { loc: [0, 3], title: 'React Bootstrapping' },
            {
              loc: [4, 5],
              note: 'Selecting root DOM node for app',
            },
            {
              loc: [5, 18],
              note: 'Get initial values from server rendered data attributes',
            },
            { loc: [20, 29], note: 'Render app with initial props' },
          ]}
        />
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/container.example')}
          ranges={[
            {
              title: 'Container Pattern - component composition',
            },
            { loc: [1, 2], note: 'Utility functions for AJAX calls' },
            {
              loc: [4, 13],
              note: 'Components from barrel file',
            },
            {
              loc: [13, 14],
              note: 'bring in LESS styling',
            },
            {
              loc: [58, 60],
              note:
                'Wrap components in Portal HOC to target different DOM nodes',
            },
            {
              loc: [64, 73],
              note:
                'Components get declaritively rendered as children of the HOC with a target prop',
            },
            {
              loc: [114, 156],
              note: 'Component methods that get passed down to lift up state',
            },
          ]}
        />
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/stateless.example')}
          ranges={[
            {
              title: 'Stateless functional components',
            },
            { loc: [1, 2], note: 'Using proptypes instead of TS or Flow' },
            {
              loc: [8, 9],
              note: 'Component is a function that returns markup',
            },
            {
              loc: [16, 18],
              note: 'JS to create list',
            },

            {
              loc: [25, 31],
              note: 'declaring proptypes',
            },
          ]}
        />
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/class.example')}
          ranges={[
            {
              title: 'Class based component',
            },
            { loc: [0, 1], note: 'Using flow for type checking' },
            { loc: [5, 25], note: 'Using flow for type checking' },
            {
              loc: [29, 39],
              note: 'Local state that does not need to be held in container',
            },
            {
              loc: [50, 63],
              note: 'Local methods for this component',
            },
          ]}
        />
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/async.example')}
          ranges={[
            {
              loc: [2, 3],
              title: 'Dynamic import for webpack code splitting',
            },
          ]}
        />
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit className="header" caps>
            React POC
          </Heading>
          <Heading size={3} fit caps textColor="secondary">
            key results and lessons
          </Heading>
          <List textColor="primary" className="dev-list " fit>
            <Appear>
              <ListItem>Redux not necessary w/ Portals</ListItem>
            </Appear>
            <Appear>
              <ListItem>React 'library' flexibility was helpful</ListItem>
            </Appear>
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
        <Slide
          transition={['slide']}
          bgColor="ng"
          className="ng-slide"
          bgImage={ngLogo}
        >
          <Heading size={1} textColor="primary" className="header" fit caps>
            Angular Questions
          </Heading>
          <List textColor="primary" className="dev-list">
            <ListItem>Can it integrate with existing codebase?</ListItem>

            <ListItem className="sub">
              <em>jQuery widgets, PowerReviews, etc already on page </em>
            </ListItem>
            <ListItem>How modular is it?</ListItem>

            <ListItem className="sub">
              <em>can we share components across white label sites?</em>
            </ListItem>
            <ListItem>Can it target multiple DOM nodes?</ListItem>

            <ListItem className="sub">
              <em>JS components need to be distributed across page</em>
            </ListItem>

            <ListItem>Can distributed elements share state?</ListItem>

            <ListItem className="sub">
              <em>are updates reflected everywhere that's necessary?</em>
            </ListItem>

            <ListItem>Do we need all of Angular?</ListItem>

            <ListItem className="sub">
              <em>Can we implement just the view layer?</em>
            </ListItem>

            <ListItem>How do we effectively debug?</ListItem>

            <ListItem className="sub">
              <em>what are the tools available, and how do they work?</em>
            </ListItem>

            <ListItem>Is ngrx required?</ListItem>

            <ListItem className="sub">
              <em>can we manage state just in components?</em>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit caps className="header">
            Development Process
          </Heading>
          <List textColor="primary" className="dev-list primary">
            <Appear>
              <ListItem>
                Webpack config file for page (dev and prod versions)
              </ListItem>
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
                  <em>
                    Automated testing reduces defects before QA even sees them
                  </em>
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
                  <ListItem>
                    2-3 weeks to train up team on simple feature
                  </ListItem>
                  <ListItem>
                    2-3 weeks to convert existing componentized feature
                  </ListItem>
                  <ListItem>
                    4 weeks to convert non-componentized feature
                  </ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <List className="benefits bg">
                  <ListItem>Faster Pages = Higher Conversion</ListItem>
                  <ListItem>
                    New Features should take 3-4 weeks vs 5-6 weeks
                  </ListItem>
                  <ListItem>Automated tests should reduce bugs by 50%</ListItem>
                  <ListItem>
                    Easier to maintain: costs decrease over time{' '}
                  </ListItem>
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
              <em>
                Consult with ATD's Angular experts to determine the best
                framework solution
              </em>
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
