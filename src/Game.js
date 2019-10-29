import React from "react";
import { 
    Slide,
    Text,
    Title
} from "@sambego/diorama";

const Game = () => {
  return (
    <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Title>1</Title>
              </div>
              <div class="flip-card-back">
                <Text>Ephemeral Compute - (FaaS)</Text>
              </div>
            </div>
          </div>
          <br/>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Title>2</Title>
              </div>
              <div class="flip-card-back">
                <Text>Managed Cloud Services - (BaaS)</Text>
              </div>
            </div>
          </div>
          <br/>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Title>3</Title>
              </div>
              <div class="flip-card-back">
                <Text>Not managing server security, scaling, patching, maintenance</Text>
              </div>
            </div>
          </div>
          <br/>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Title>4</Title>
              </div>
              <div class="flip-card-back">
                <Text>Focus on the application, not the infrastructure</Text>
              </div>
            </div>
          </div>
    </Slide>
  );
};




export default Game;
