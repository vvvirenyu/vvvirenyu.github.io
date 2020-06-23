import React, { Component } from 'react'

class ForEachBlog extends Component {
  render() {
    return (
      <div className='blog-entry'>
        <h4 className='blog-title'>
          2: for each (<em>game</em> in <em>games</em>)
        </h4>
        <div className='blog-body'>
          <p> For the last couple months, I have been working on two game projects:
              Tictactorment, a mutated version of Tic-Tac-Toe, and Simon Joe
              Memory Cat, a clone of the classic memory game, Simon. They can be found
              in the projects section of this site,&nbsp;
            <a href='http://lucasdayton.com/projects'
              className='blog-link'
              target='blank'
            >
              here
            </a>
            .
          </p>
          <p> Making Tictactorment, I decided early on to use a 4x4 grid instead of
              the traditional 3x3 for two main reasons. A 3x3 game is nasty,
              brutish and short, leaving only a few turns to strategize before a
              draw becomes inevitable. A 4x4 grid allows for a longer and more
              complex game. Additionally, a 3x3 grid has a potential maximum of nine
              moves. Nine being an odd number, meaning player X gets the first and
              final moves. A 3x3 game is, through short duration and numerical
              oddness, weighted dramatically in favor of player X. A 4x4 game holds
              a potential maximum of sixteen turns; a fair and even number. I am
              very passionate about this issue. No more 3x3 games.
          </p>
          <p> My zeal to transcend the nine-square grid made subsequent tasks
              more difficult. I wired up the 4x4 board for two-player games with
              relative ease, but creating the enemy AI for one-player games proved a
              real challenge. And rather than taking the recommended way out and
              implement the Minimax algorithm, I decided to roll my own solution,
              one I refer to as 'Danger and Heat'.
          </p>
          <p> Primarily, the algorithm looks for situations in which either
              player is a move away from defeat, when three of the same marks
              occupy a row or column with an empty cell remaining. If such a
              situation exists, the AI player marks the empty cell, either
              preventing a defeat with a block, or ensuring victory with a
              fourth mark. That is the 'Danger' element.
          </p>
          <p> In the absence of Danger, the algorithm looks for Heat. In the
              first 3 turns there is no Heat, so the AI player marks an empty
              cell at random. On the fourth turn, the AI player will only mark empty
              cells in rows or columns that have at least one mark in them. From the
              fifth turn on, when Danger is not present, the AI player looks for
              cells in rows or columns that either player has marked twice. This way,
              the AI player hovers around the human player's marks so as to operate
              more intelligently than mere randomness. If there are no twice-marked rows,
              the AI player settles for a lower level of heat, an empty cell in a
              once-marked row.
          </p>
          <p> Somewhere along the way I grew tired of seeing so many Xs and Os that
              I added a feature to allow players to use any ASCII character of their
              choice. Truly next-gen stuff here. Get creative!
          </p>
          <p> Next, a clone of the vintage handheld game, Simon. I happen to
              cohabitate with a cat named Simon, so obviously I had to build the game
              in his image. I chose to ditch the create-react-app bootstrapper I had
              used on previous projects. I set up a manual webpack configuration,
              negotiated with CSS Modules and loaders, and wrote my own server
              script and build command. I dropped npm in favor of yarn for package
              management. I learned a number of things that had previously been
              abstracted away and found some new frustrations as well.
          </p>
          <p> I had some difficulty getting the pad sequence to flash one
              at a time instead of all at once. I eventually created a loop of
              promises that increased in length by one each time, flashing only after
              the previous pad had completed its flash. This sort of asynchronous
              operation is the future of Javascript and is good to get some
              experience with.
            </p>
          <p>
              After the development work was mostly complete, I ran the game through
              page speed analysis tools and received mediocre results. I jumped
              a series of flaming hoops, optimizing images and audio, extracting
              then inlining critical CSS rules, enabling gzip compression of
              resources, so on and so forth. Gradually, my speed scores climbed way up,
              my file sizes shrank way down, and my XP increased. So if it loads slowly,
              blame Heroku.
          </p>
          <p> Finally, here is a dramatically-titled article from Cory Doctorow of the
              Electronic Frontier Foundation regarding the DRM (Digital Rights Management)
              issue as discussed previously, here and elsewhere:<br/><br/>
              <a
                href='https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next'
                target='blank'
                className='blog-link'
              >
                DRM's Dead Canary: How We Just Lost the Web, What We Learned From It,
                and What We Need to Do Next
              </a>
          </p>

        </div>
      </div>
    )
  }
}

export default ForEachBlog
