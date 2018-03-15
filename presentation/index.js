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
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import jq from '../assets/jq.png';
import java from '../assets/java.png';
import reactLogo from '../assets/react.png';
import vue from '../assets/vue.png';

// Require CSS
import './slides.css';
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const ImageBar = ({ active }) => (
  <div className="image-bar">
    {console.log(active.jq)}
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

        <Slide transition={['fade']} bgColor="primary">
          <ImageBar active={{ jq: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Handlebars/jQuery
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            homebrew framework solution
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
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
                {' '}
                Pros{' '}
              </Text>
              <List className="pros">
                <ListItem>Fewer 3rd Party Dependencies</ListItem>
                <ListItem>Complete control over lifecycle</ListItem>
                <ListItem>Componentized Solution</ListItem>
                <ListItem>Testable (in theory)</ListItem>
                <ListItem>Global Data Object</ListItem>
              </List>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Cons
              </Text>
              <List className="cons">
                <ListItem>Imperitive DOM Manipulation</ListItem>
                <ListItem>No community support</ListItem>
                <ListItem>Nested logic in templates</ListItem>
                <ListItem>Manual data binding</ListItem>
                <ListItem>Manual updates</ListItem>
                <ListItem>No bundling</ListItem>
                <ListItem>Global Data Object</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <ImageBar active={{ vue: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Vue.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            hybrid ssr/frontend framework
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
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
                {' '}
                Pros{' '}
              </Text>
              <List className="pros">
                <ListItem>Modern JS Framework</ListItem>
                <ListItem>Componentized Solution</ListItem>
                <ListItem>Highly Optimized</ListItem>
                <ListItem>Most Performant</ListItem>
                <ListItem>Reactive Updates</ListItem>
                <ListItem>Fewer Dependencies</ListItem>
                <ListItem>Testable (in theory)</ListItem>
              </List>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Cons
              </Text>
              <List className="cons">
                <ListItem>Compromised Implementation</ListItem>
                <ListItem>Little Institutional Knowledge</ListItem>
                <ListItem>Difficult Debugging</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <ImageBar active={{ java: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JSP/JSTL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            server side rendering
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
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
                {' '}
                Pros{' '}
              </Text>
              <List className="pros">
                <ListItem>Very Performant</ListItem>
                <ListItem>Fast Page Load</ListItem>
                <ListItem>Componentized Solution</ListItem>
                <ListItem>Few Dependencies</ListItem>
                <ListItem>Gold Standard SEO</ListItem>
              </List>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Cons
              </Text>
              <List className="cons">
                <ListItem>Very Difficult to Test</ListItem>
                <ListItem>Awkward User Interactions</ListItem>
                <ListItem>Difficult to Hold State</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <ImageBar active={{ react: true }} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React/Redux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            client side rendered SPA for rubbr.com
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
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
              <List className="pros">
                <ListItem>Modern JS Framework</ListItem>
                <ListItem>Huge Community</ListItem>
                <ListItem>Very Performant</ListItem>
                <ListItem>Componentized Solution</ListItem>
                <ListItem>Great Build Ecosystem</ListItem>
                <ListItem>Optimized for Microservices</ListItem>
                <ListItem>Robust State Management</ListItem>
                <ListItem>Ridiculously Easy to Test</ListItem>
              </List>
            </Fill>
            <Fill>
              <Text margin="10px" bgColor="secondary" textColor="primary">
                {' '}
                Cons
              </Text>
              <List className="cons">
                <ListItem>16(!!) Files for New Component</ListItem>
                <ListItem>Opinionated Implementation</ListItem>
                <ListItem>Heavy 3rd Party Dependencies</ListItem>
                <ListItem>Difficult to Onboard</ListItem>
                <ListItem>Steep Learning Curve</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        {false && (
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>
              Typography
            </Heading>
            <Heading size={1} textColor="secondary">
              Heading 1
            </Heading>
            <Heading size={2} textColor="secondary">
              Heading 2
            </Heading>
            <Heading size={3} textColor="secondary">
              Heading 3
            </Heading>
            <Heading size={4} textColor="secondary">
              Heading 4
            </Heading>
            <Heading size={5} textColor="secondary">
              Heading 5
            </Heading>
            <Text size={6} textColor="secondary">
              Standard text
            </Text>
          </Slide>
        )}

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
