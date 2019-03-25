import React, { Component } from 'react';


export default class Instructions extends Component {
    render() {
        return (
          <div className="instructions-container">
            <h2>How to play Mastermind</h2>
            <div className="instructions-paragraph">
              <p>Mastermind is a classic logic game where you try to replicate the hidden color sequence based off of clues provided from each attempt.  The game is won when you successfully place all five colors in the right order.  The hidden solution is randomly selected and may contain any combintion from the eight colors including doubles, triples etc.</p>
              <p>To begin, click the New Game button.  Click the empty circles and assign each a color from the eight colors at the bottom.  Once all five circles in the attempt area have a color assigned, hit the submit button.
              </p>
              <p>Each attempt is scored with black, white or red pegs.  Black pegs are scored first followed by white.  You earn a black peg for each correct color in the correct location in the sequence.  A white peg represents a color in the sequence, but not in the correct location.  A red peg indicates no colors in the attempt are present in the solution.  Through these clues, you can make logical deductions to solve the colored sequence.
              </p> 
            </div>
          </div>
            
        );
    }
}