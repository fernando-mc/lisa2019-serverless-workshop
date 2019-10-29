import React, { Component } from "react";
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Columns,
  Image,
  Text,
  Code,
  Footer,
  Highlight,
  Quote,
  List,
  Browser,
  // Video
} from "@sambego/diorama";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-jsx.min.js";

import Game from "./Game.js"
import Fernando from "./img/fernando.jpg";
import ShowYourWork from "./img/showwork.gif"
import GoogleTyping from "./img/typing-googlesearch.png"
import RedshiftGoogle from "./img/redshift-google.png"
import RedshiftAnalytics from "./img/redshift-ga.png"
import ThankYou from "./img/thankyou.gif"

class App extends Component {
  static footer = <Footer left="@fmc_sea &nbsp;&nbsp;&nbsp;#LISA19" right="&nbsp;"/>;
  constructor() {
    super()

    this.state = {
      flipped: false,
    }
  }

  render() {
    return (
      <Deck
        footer={App.footer}
        navigation
        presenterNotes={window.location.search.includes("presenterNotes")}
      >
        <Slide
          notes="Are you in the right place?"
          style={{ backgroundColor: "#FD5750" }}
        >
          <Subtitle
            style={{ color: "black" }}
          >
            Creating Your First Serverless Application <br/>on AWS
          </Subtitle>
        </Slide>
        <Slide style={{ backgroundColor: "#FD5750" }}>
          <Title>
            Who am I?
          </Title>
        </Slide>
        <Slide style={{ backgroundColor: "#FD5750" }}>
          <Columns>
            <div>
              <Image src={Fernando} alt="A picture of me" full />
            </div>
            <div>
              <Subtitle>Fernando Medina Corey</Subtitle>
              <List>
                <li>Solutions Architect</li>
                <li>Serverless Inc.</li>
                <li>Python <span role="img" aria-label="A pink heart">💖</span>er | JavaScript Novice</li>
                <li>Pluralsight Author</li>
                <li>@fmc_sea</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes="Not philosophically"
        >
          <Title>
            Who are you?
          </Title>
        </Slide>
        <Slide style={{ backgroundColor: "#00ACB5" }}>
          <Subtitle>
            Right now:
          </Subtitle>
          <List>
            <li>Think of a fun fact about yourself</li>
            <li>Stand up (if you're able)</li>
            <li>Find someone(s) nearby</li>
          </List>
        </Slide>
        <Slide style={{ backgroundColor: "#00ACB5" }}>
          <Subtitle>
            Share your:
          </Subtitle>
          <List ordered>
            <li>Name</li>
            <li>Pronouns</li>
            <li>The fun fact</li>
          </List>
          <Subtitle>
            For example...
          </Subtitle>
        </Slide>
        <Slide style={{ backgroundColor: "#FD5750" }}>
          <Quote>
            Hi I'm Fernando! 
            My pronouns are He/Him. 
            I used to teach theatrical stage combat. 
            <span role="img" aria-label="theatrical masks emoji">🎭</span>
            <span role="img" aria-label="crossed swords emoji">⚔️</span>
          </Quote>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes="
            Slides are online | 
            People are not | 
            Mathematically I'm not as interesting as you | 
            Two volunteer introductions"
        >
          <Title>
            Who are we?
          </Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#F29B27" }}
          notes="3 minutes"
        >
          <Title>Participation Prizes</Title>
          <Subtitle>(Bribes)</Subtitle>
          <List ordered>
            <li>Access to Free Courses on Serverless</li>
            <li>Stickers</li>
            <li>A custom guide on a serverless topic of your choice</li>
          </List>
          <Text><h5>4. <i>Maybe</i> I will teach you some stage combat</h5></Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Title>What is Serverless?</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Title>Game time.</Title>
        </Slide>
        <Game></Game>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes="5 minutes"
        >
          <Subtitle>Common FaaS Options</Subtitle>
          <List ordered>
            <li>AWS Lambda</li>
            <li>Azure Functions</li>
            <li>Google Cloud Functions</li>
            <li>Auth0 Webtask</li>
            <li>Twilio Functions (AWS Lambda)</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Title>Is Lambda for Everything!?</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Title>No!</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Title>But.</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Subtitle>A 'serverless mindset' can be useful to adopt.</Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Quote>Why do it myself when I could pay someone to do it better?</Quote>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>
            Disclaimers
          </Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <List ordered>
            <li>I assume some development experience</li>
            <li>You may need to learn new things!</li>
            <li>My horrible JavaScript skills were used in the making of this talk</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <Title>What are we learning?</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <List ordered>
            <li>Deploying Your First Serverless API Service</li>
            <li>Deploying Your First Serverless Frontend</li>
            <li>Adding Authentication to Our Frontend (If we have time)</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Get the guide:</Title>
          <Subtitle>
            <a href="http://tiny.cc/lisa19sls">http://tiny.cc/lisa19sls</a>
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Wooo! We're done right?
          </Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Wrong!
          </Title>
          <Image src={ShowYourWork} alt="A gif of Bart Simpson saying 'and show your work'" />
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            You need to help folks know what you did!
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Here's why.
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Quote style={{ color: "#2B2B2D" }}>
            Hey, we're having errors in AWS Lambda after upgrading to Python 3.7 - Do you know what's going on?
          </Quote>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
        <Code code={
          `
          from typing import Optional, Union, List
          File "/var/task/typing.py", line 1356, in <module>
          class Callable(extra=collections_abc.Callable, 
            metaclass=CallableMeta):
          File "/var/task/typing.py", line 1004, in __new__
          self._abc_registry = extra._abc_registry
          AttributeError: type object 'Callable' has no 
            attribute '_abc_registry'
          `} lang="bash" 
        />
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Uhhhh...? (I don't)
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
           <Browser url="http://letmegooglethat.com/?q=typing+python+issue+upgrading+python+3.7"/>
        </Slide>
        


        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Well look at that.
          </Subtitle>
          <Image src={GoogleTyping} ></Image>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Solve the same issue once.
          </Subtitle>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Be a reference for yourself.
          </Subtitle>
          <Subtitle style={{ color: "#2B2B2D" }}>
            Be a reference for others.
          </Subtitle>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes="commited and reviewed literally tens of thousands of lines of SQL"
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            2016: <br/>I am a novice data engineer
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text style={{ color: "#2B2B2D" }}>
            I need to turn <Highlight>1496275200</Highlight> into <Highlight>2017-06-01</Highlight> using Redshift SQL 
          </Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle>So I Googled and read lots of documentation.</Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>And I wrote about what I learned.</Text>
          <Browser url="https://www.fernandomc.com/posts/redshift-epochs-and-timestamps/"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>It helps when I forget</Text>
          <Image src={RedshiftGoogle}/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>It remains one of my most popular posts</Text>
          <br></br>
          <Image src={RedshiftAnalytics}/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            You are the best person to document what you are learning.
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Keep Writing!
          </Title>
          <Subtitle style={{ color: "#2B2B2D" }}>
            For Yourself
          </Subtitle>
          <Text style={{ color: "#2B2B2D" }}>(You'll forget)</Text>
          <br></br>
          <Subtitle style={{ color: "#2B2B2D" }}>
            For Others<br/>
          </Subtitle>
          <Text style={{ color: "#2B2B2D" }}>(You'll help them learn)</Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Thank you!</Title>
          <Image src={ThankYou}/>
        </Slide>
        
        <Slide
          notes=""
          style={{ backgroundColor: "#FD5750" }}
        >
          <Subtitle
            style={{ color: "black" }}
          >
            References:
          </Subtitle>
          <List style={{ color: "#2B2B2D" }} ordered>
            <li>The guide - http://tiny.cc/lisa19sls</li>
            <li>Get in touch - fernandomc.com/contact</li>
          </List>
        </Slide>
      </Deck>
    );
  }
}

export default App;
