import React, { Component } from 'react'

// Look: onClick={this.blogSelector('1')}
class ReadThisBlog extends Component {
  render() {
    return (
      <div className='blog-entry'>
        <h4 className='blog-title'> let read = this.blog()</h4>
        <div className='blog-body'>
          <p> This will be a modest blog for discussing various developments in
              the technosphere. To keep pace with the rate of change in today's
              world is a mighty challenge. It can be difficult to gather one's
              thoughts in this unsteady world, and for me this will be an
              exercise in getting the ideas out, reducing mental clutter.
              If somebody finds any of this useful, that would be an added
              benefit.
          </p>
          <p> At the moment, Javascript, web technology, privacy and digital
              liberty are primary interests of mine. They will be a central
              focus of these writings. I have myriad secondary interests that
              will surely all bleed together somehow.
          </p>
          <p> The web and net are emblematic of the heights of human potential.
              Through them we have reached states of innerconnectivity
              previously thought farfetched. A world of instantaneous
              communication of any data or sentiment, no matter how mundane or
              magnificent or false or factual. The creative potential is
              apparent; the danger of pervasive control perhaps less so.
              I would like to see a healthy, vibrant internet that can enable
              our humanity rather than restrict, exploit, repeat.
          </p>
          <p> I spent much of my childhood cruising the 'information
              superhighway', using warez on AOL, pirating music on Napster
              (don't sue), chatting with babes, reading about John Titor,
              reptilian shapeshifters and sifting through mountains of minor
              league baseball stats. The web is a digital manifestation of
              Murphy's Law: anything that <b>can</b> happen, <b>will </b>
              happen. And that reminds me of Atwood's Law, which states: any
              application that <b>can</b> be written in Javascript <b>will </b>
              be written in Javascript. He was right, but I digress.
          </p>
          <p> It would be a tragic loss if the net and web succumb to the
              ancient temptation to trade manifest liberty for promises of
              security. To barter away the spontaneous generation of novelty on
              the frontier in favor of evermore walled gardens. Thomas
              Jefferson and I "would rather be exposed to the inconveniences
              attending too much liberty than those of attending too small a
              degree of it". In programmer's parlance, which set of bugs would
              you rather have to patch? We all know how frustrating life can be
              without the necessary permissions.
          </p>
          <p> I know that with our powers combined, we can build the web of the
              future. The web we want, a web that respects users and looks
              good. That is exciting. These are interesting times, friends. Be
              free, be wise and make sure you read the EULA!
          </p>
        </div>
      </div>
    )
  }
}

export default ReadThisBlog
