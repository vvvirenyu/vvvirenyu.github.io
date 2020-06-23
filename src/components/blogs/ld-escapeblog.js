

import React, { Component } from 'react'

// Look: onClick={this.blogSelector('1')}
class EscapeDRMBlog extends Component {
  render() {
    return (
      <div className='blog-entry'>
        <h4 className='blog-title'> escape('DRM') </h4>
        <div className='blog-body'>
          <p> 
              In September, the World Wide Web Consortium (W3C) narrowly decided 
              to adopt a new digital rights management (DRM) specification
              known as Encrypted Media Extensions, or EME. EME is a method by 
              which copyright holders can determine who can access protected content. 
              On the surface, this seems a benign development, as legitimate 
              rights merit protection. Upon closer inspection, the merits here 
              are more murky than clear.
          </p>
          <p> 
              The EME specification was created and proposed by Google, Microsoft, and 
              to a lesser extent, Netflix. The Free Software Foundation, Creative Commons, 
              the Electronic Frontiers Foundation, and Net Neutrality advocates like Tim Wu 
              have voiced their strong opposition to EME. As stated, companies have a right 
              to protect their content. But on the other hand, U.S. copyright law is outdated, 
              a vestige of a bygone world whose assets were physical, tangible goods and services.
          </p>
          <p> 
              Society has changed, and our economies have changed. Microsoft doesn't sell you 
              a disk anymore, they sell you a license. They sell you permission. Google doesn't 
              sell you a service, they provide it for free. What they sell is data. Your data. 
              The digital economy is reshaping itself around the ability to restrict access and 
              monetize information. The average person today has access to so much more than 
              half a century ago. Yet for every new opening is a new gatekeeper and a new fortune 
              to be made. The average person today also leaks much more information than fifty 
              years ago, creating a near-infinite supply of a very powerful thing: knowledge. 
              This has provided very asymmetrical benefits: the collector of data profits 
              enormously while the subject of the data becomes a publicly traded commodity, 
              receiving a peasant's share of the generated return.
          </p>
          <p> 
              Society has changed and copyright law has been very slow to adapt. For much more 
              on this subject, read <em>Remix: Making Art and Commerce Thrive 
              in the Hybrid Economy</em> by Lawrence Lessig. Rather than 
              reform an outdated copyright model, we instead watch two of the world's most 
              massive and powerful corporations bend the web to their whim, becoming the 
              enforcers of the old model. Imagine that, the biggest beneficiaries of the 
              new order now lobbying to sustain the old. Bunch of ingrates.
          </p>
          <p> 
              Among other things, Google and Microsoft both make operating systems and web 
              browsers. Windows has cornered 85% of the PC market, not because it is a 
              peerless operating system but as a result of decades of anti-competitive 
              business practices. I could list them here but that would be a serious 
              undertaking, so I suggest you look into that and make up your own mind. With 
              Android, Google has an operating system running on an estimated 86% of the 
              world's phones. At the OS and browser levels, Google and Microsoft collect 
              uncomfortable amounts of user data already. By leveraging EME to increase 
              vendor lock-in, they will continue to be the bridge trolls of digital 
              society, invisibly shaking down all passersby.
          </p>
          <p> 
              The proprietary plugins required for media playback (licensed by Google and 
              Microsoft) will further hamper competition for two companies that have already 
              shown us their distaste for it. And the lack of competition will keep users 
              drifting about in Googlespace and Microshack, increasing user exposure 
              their data-gathering schemes, enabling them to generate even more revenue to 
              spend lobbying the W3C for personal favors, and so on.
          </p>
          <p> 
              Or so that is the idea, anyway. I don't believe it will play out like this. Pirates 
              will certainly crack the encryption. They will take EME as a dare; a hurdle more than 
              an impediment. This is not the first brute-force attempt to enforce the analog 
              copyright paradigm in the digital age, and it will not be the last. All previous 
              attempts have failed. Twenty years ago, major record companies were suing 
              teenagers for millions of dollars. Twenty years later, peer-to-peer file sharing 
              is easier than ever. Fifteen years ago, media companies started putting copy 
              protection on CDs and DVDs. Search for 'DVD rip' on Pirate Bay and see how that 
              experiment turned out. Encrypted Media Extensions will not fare much better. EME 
              will only inconvenience legitimate users and further antagonize a general public 
              growing increasingly distrustful of techno-corporate overreach.
          </p>
          <p> 
              The web is the medium that extends all media. The medium is the message. And the message 
              of the web is a story of decentralization, one where vast power is inevitable, 
              but <strong>control</strong> remains impossible. 
              Stay vigilant, good citizen, and stay tuned.
          </p>
        </div>
      </div>
    )
  }
}

export default EscapeDRMBlog
