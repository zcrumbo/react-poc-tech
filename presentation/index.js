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
  Quote,
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

import jq from '../assets/jq.png';
import java from '../assets/java.png';
import reactLogo from '../assets/React-icon.svg';
import vue from '../assets/vue.png';
import ssrMov from '../assets/ui.gif';
import rubbr from '../assets/react.jpg';

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
        <Slide transition={['fade']} bgColor="primary">
          <ImageBar active={{ jq: true, java: true, react: true, vue: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ATD West Front End Solutions
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            overview and brief comparison
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ jq: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Handlebars/jQuery
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            homebrew framework solution
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ jq: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Handlebars/jQuery
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="2vw" textAlign="right">
            homebrew framework solution
          </Text>
          <Layout>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                Pros
              </Text>
              <Appear>
                <List className="pros">
                  <ListItem>Fewer 3rd Party Dependencies</ListItem>
                  <ListItem>Complete control over lifecycle</ListItem>
                  <ListItem>Componentized Solution</ListItem>
                  <ListItem>Testable (in theory)</ListItem>
                  <ListItem>Simple to Debug (At First)</ListItem>
                  <ListItem>Global Data Object</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                Cons
              </Text>
              <Appear>
                <List className="cons">
                  <ListItem>Imperative DOM Manipulation</ListItem>
                  <ListItem>No community support</ListItem>
                  <ListItem>Nested logic in templates</ListItem>
                  <ListItem>Manual data binding</ListItem>
                  <ListItem>Manual updates</ListItem>
                  <ListItem>No bundling</ListItem>
                  <ListItem>Difficult to Debug (At Scale)</ListItem>
                  <ListItem>Global Data Object</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          showLineNumbers={false}
          textSize="1.3vw"
          bgColor="code"
          lang="handlebars"
          code={require('raw-loader!./examples/hb.example')}
          ranges={[
            { loc: [0, 270], title: '.hbs templates' },
            { loc: [0, 1], note: 'Starts out simple' },
            { loc: [0, 3], note: 'Complexity increases' },
            { loc: [143, 152], note: 'Debugging becomes difficult' },
          ]}
        />
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="js"
          showLineNumbers={false}
          code={require('raw-loader!./examples/hbjs.example')}
          ranges={[
            { loc: [0, 270], title: 'JavaScript Controller Logic' },
            { loc: [0, 1], note: 'Imperative logic' },
            { loc: [12, 13], note: 'Imperative logic' },
            { loc: [156, 173], note: 'Loading in templates and css' },

            { loc: [107, 115], note: 'Manual rendering' },
            { loc: [117, 124], note: 'Manual data binding' },
            { loc: [223, 230], note: 'Lifecycle methods' },
          ]}
        />
        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ vue: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Vue.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            hybrid ssr/frontend framework
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ vue: true }} />
          <Heading size={1} caps lineHeight={1} textColor="secondary" textAlign="right">
            Vue.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="2vw" textAlign="right">
            hybrid ssr/frontend framework
          </Text>
          <Layout>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                Pros
              </Text>
              <Appear>
                <List className="pros">
                  <ListItem>Componentized Solution</ListItem>

                  <ListItem>Highly Optimized</ListItem>

                  <ListItem>Most Performant</ListItem>

                  <ListItem>Reactive Updates</ListItem>

                  <ListItem>Fewer Dependencies</ListItem>

                  <ListItem>Testable (in theory)</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Cons
              </Text>
              <Appear>
                <List className="cons">
                  <ListItem>Compromised Implementation</ListItem>

                  <ListItem>Little Institutional Knowledge</ListItem>

                  <ListItem>Difficult Debugging</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          textSize="1.3vw"
          bgColor="code"
          lang="jsx"
          showLineNumbers={false}
          code={require('raw-loader!./examples/vue.example')}
          ranges={[
            { loc: [0, 474], title: 'Vue/JSP Hybrid' },
            {
              loc: [0, 10],
              note: 'JSTL Logic and markup with data attributes used to bootstrap Vue',
            },
            { loc: [99, 108], note: 'Passing props through from JSP to Vue' },
            { loc: [318, 331], note: 'Vue Components' },
            { loc: [345, 350], note: 'Lifecycle methods' },
            { loc: [367, 401], note: 'LESS styling' },
            { loc: [401, 500], note: 'JS bootstrapping' },
            { loc: [452, 471], note: 'AJAX in components lazily' },
          ]}
        />
        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ java: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JSP/JSTL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            server side rendering
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ java: true }} />
          <Heading size={1} caps lineHeight={1} textColor="secondary" textAlign="right">
            JSP/JSTL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="2vw" textAlign="right">
            server side rendering
          </Text>
          <Layout>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                Pros
              </Text>
              <Appear>
                <List className="pros">
                  <ListItem>Fastest Complete Page Load</ListItem>
                  <ListItem>Componentized Solution</ListItem>
                  <ListItem>Few Dependencies</ListItem>
                  <ListItem>Gold Standard SEO</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                Cons
              </Text>
              <Appear>
                <List className="cons">
                  <ListItem>Very Difficult to Test</ListItem>
                  <ListItem>Less Performant UI</ListItem>
                  <ListItem>Awkward User Interactions</ListItem>
                  <ListItem>Difficult to Hold State</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Image src={ssrMov} />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ react: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React/Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            client side rendered SPA for rubbr.com
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <ImageBar active={{ react: true }} />
          <Heading size={1} caps lineHeight={1} textColor="secondary" textAlign="right">
            React/Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="2vw" textAlign="right">
            client side rendered SPA for rubbr.com
          </Text>
          <Layout>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Pros{' '}
              </Text>
              <Appear>
                <List className="pros">
                  <ListItem>Huge Community</ListItem>
                  <ListItem>Very Performant</ListItem>
                  <ListItem>Componentized Solution</ListItem>
                  <ListItem>Great Build Ecosystem</ListItem>
                  <ListItem>Optimized for Microservices</ListItem>
                  <ListItem>Robust State Management</ListItem>
                  <ListItem>Ridiculously Easy to Test</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Cons
              </Text>
              <Appear>
                <List className="cons">
                  <ListItem>16(!!) Files for New Component</ListItem>
                  <ListItem>Opinionated Implementation</ListItem>
                  <ListItem>Heavy 3rd Party Dependencies</ListItem>
                  <ListItem>Difficult to Onboard</ListItem>
                  <ListItem>Steep Learning Curve</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Image src={rubbr} />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" bgImage={reactLogo}>
          <Heading size={1} textColor="primary" fit caps>
            Next Steps
          </Heading>
          <Heading size={3} fit caps textColor="secondary">
            implement POC React/SSR hybrid
          </Heading>
          <List textColor="primary" className="next-list">
            <Appear>
              <ListItem>Strive for best of both worlds</ListItem>
            </Appear>
            <Appear>
              <ListItem>Render above the fold static content SS</ListItem>
            </Appear>
            <Appear>
              <ListItem>Render all interactive content with React via AJAX</ListItem>
            </Appear>
            <Appear>
              <ListItem>Redux to share state across multiple root elements</ListItem>
            </Appear>
            <Appear>
              <ListItem>Unit test UI and Business Logic</ListItem>
            </Appear>
            <Appear>
              <ListItem>Build process that allows for extensibility/portability</ListItem>
            </Appear>
            <Appear>
              <ListItem>SEO Strategy</ListItem>
            </Appear>
            <Appear>
              <ListItem>Analytics Tagging/Data Layer Integration Strategy</ListItem>
            </Appear>
            <Appear>
              <ListItem>Integration with client-side A/B testing</ListItem>
            </Appear>
          </List>
          {/* <Image src={reactLogo} height="10vw" /> */}
        </Slide>

        {false && (
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Example Quote</Quote>
              <Cite>Author</Cite>
            </BlockQuote>
          </Slide>
        )}
      </Deck>
    );
  }
}
