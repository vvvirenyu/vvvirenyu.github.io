import React, { Component } from 'react'

class FreeCodeBlog extends Component {
  render() {
    return (
      <div className='blog-entry'>
        <h4 className='blog-title'>
          3: reflect.get('experience with freeCodeCamp')
        </h4>
        <div className='blog-body'>
          <p>
            In the previous entry I described a couple of projects I had recently completed.
            I did not mention at the time that these were the final two project assignments
            in freeCodeCamp's Front End Development Certification program. Having earned
            said certificate, the time has come to reflect on the experience and offer some
            advice to future self-taught programmmers.
          </p>
          <p>
            The curriculum is divided into twelve sections, starting with HTML/CSS basics
            and concluding with advanced projects. I will attempt to summarize each as
            succinctly as possible.
          </p>
          <h5 className='blog-section-heading'>HTML/CSS Basics</h5>
          <p>
            I've known the rudiments of HTML and CSS for years, so this was not new
            information. freeCodeCamp gently guides students through a series of
            examples, showing how to use tags, comments, change colors/sizes/fonts,
            create input fields and buttons, set class names and IDs, and so on. This
            is not going to confer upon students a level of HTML5 mastery, but will help
            them get up and running quickly. Still, I would recommend the use of
            supplementary resources to deepen one's understanding of HTML5 and CSS3's newer
            features.
          </p>
          <h5 className='blog-section-heading'>Responsive Design and Bootstrap</h5>
          <p>
            freeCodeCamp moves quickly into a primer on responsive design, introducing
            students to Bootstrap's grid-style layout system. I don't know why freeCodeCamp
            is pushing students toward Bootstrap when native CSS features like Flexbox, CSS
            Grid, and best practices such as using percent values for dynamic sizing rather
            than set pixel amounts. I think freeCodeCamp did a pretty poor job designing
            this section of the curriculum and again recommend usage of supplemental
            resources. To be fair, responsive design is a complicated topic and freeCodeCamp
            provides a quality platform for exploration. Be prepared to seek further
            information elsewhere.
          </p>
          <h5 className='blog-section-heading'>jQuery</h5>
          <p>
            Wait a second... jQuery before JavaScript? This seems weird, and maybe it is. But
            freeCodeCamp wants students to learn basic DOM manipulation as early as possible.
            This gives students the ability to see tangible results quickly, increasing
            confidence and giving a taste of that powerful 'it works!' feeling. That might be
            a wise choice as the programmer's journey is front-loaded with frustration and
            self-doubt, discouraging further pursuit. freeCodeCamp walks students through
            eighteen jQuery lessons, using query selectors, removing/adding classes, and
            targeting parent and child elements. Basic stuff, but basic stuff that enables
            the neophyte to create a crappy Geocities-style page.
          </p>
          <h5 className='blog-section-heading'>Basic Front End Development Projects</h5>
          <p>
            After three sections of basic lessons, students are assigned two projects: a <a
            href='https://codepen.io/f1ux1uxday/full/xgEgwr' className='blog-link'
            target='blank'> tribute page</a> and a personal portfolio. I decided to make my 
            tribute page in honor of Shane MacGowan of the Pogues, in part to celebrate his <a
            href='https://www.mirror.co.uk/3am/celebrity-news/pogues-frontman-shane-macgowan-unveils-7040427'
            className='blog-link' target='blank'>new teeth</a> and partly in recognition of a life
            fully-lived. Making a portfolio page felt like a presumptive assignment at the time,
            when students had only completed a single project. I get that the idea is to populate
            the portfolio with future projects as they are completed, but by that time the quality
            of work improves drastically, the portfolio itself pales in comparison and will need to
            be redone anyway. Alas, one sometimes does the assigned work and quickly forgets
            soon thereafter.
          </p>
          <h5 className='blog-section-heading'>Basic Javascript</h5>
          <p>
            Two small projects and 106 lessons later, freeCodeCamp starts to bring on the
            JavaScript, a drop at a time. The Basic JavaScript section houses 104 lessons
            with titles such as 'Multiply Two Numbers', 'Declare String Variables', 'Access
            Array Data with Indexes' (isn't that suppopsed to say indices?), 'Nesting For
            Loops' and 'Sift Through Text with Regular Expressions'. A drop at a time, and
            often without the larger context required to truly comprehend an issue. The
            human element. All the micro detail in the world is effectively useless if it
            can't find it's place in the macro. The offering here is quite helpful, albeit
            limited.
          </p>
          <h5 className='blog-section-heading'>Object-Oriented and Functional Programming'</h5>
          <p>
            Here the student is introduced to constructor functions and told nothing
            else about object-oriented programming. I'm sure if they tried to explain
            the 'this' keyword to newcomers then they would scare everyone away.
            It would be more accurate to describe this as an exceedingly brief
            introduction to objects in JavaScript. Then freeCodeCamp shows the student
            how methods like map, filter, reduce, sort, reverse, concat, split and join.
            This is, I guess, considered Functional Programming? But more accurately
            I would call this an introduction to JavaScript's built-in methods, Yes, they
            allow for programming in the functional style but they themselves are not the
            paradigm. I would not show a student a hammer and a chisel and then purport
            to have educated them in stone masonry. But if I left them alone near a quarry,
            they might figure some things out on their own.
          </p>
          <h5 className='blog-section-heading'>Basic Algorithm Scripting</h5>
          <p>
            This is the first set of algorithm challenges on freeCodeCamp. The student is
            asked to perform tasks like reverse a string, check for palindromes, remove
            duplicates from an array, and create a Caesar's cipher. There are seventeen
            of these so I won't list them all. Although these challenges are somewhat
            simple, many students report experiencing tremendous difficulty in the
            transition from the guided lessons to the independent problem-solving needed
            to complete the algorithms. The student is guided through a couple hundred
            lessons and then stranded in unfamiliar territory. That may cause some to feel
            like Theseus in the Labyrinth. Just remember he survived. More on that later.
          </p>
          <h5 className='blog-section-heading'>JSON APIs and AJAX</h5>
          <p>
            After basic algorithm scripting, students learn how to get JSON data from APIs
            using jQuery's getJSON function. A lot of buzzwords here. As with the jQuery
            lessons earlier, I'm not sure if it isn't better to introduce these topics
            through plain ol' Javascript rather than jQuery. I assume that a programmer
            benefits more from understanding the core of a language before turning to
            frameworks which abstract that core away, but like everything else in
            life I could be damn wrong.
          </p>
          <h5 className='blog-section-heading'>Intermediate Front-End Projects</h5>
          <p>
            So many hours into this venture and students are still told to be developing
            their projects in <a href='https://codepen.io' className='blog-link'
            target='blank'>CodePen</a>. CodePen describes itself as an "online community
            for testing and showcasing user-created HTML, CSS and JavaScript code
            snippets," which "functions as an online code editor and open-source learning
            environment, where developers can create code snippets...and test them." I
            like CodePen, don't get me wrong. But I also think using CodePen in lieu of a
            normal dev environment postpones the aqcuisition of fundamentals like hosting
            and SFTP. Every aspiring developer should purchase their own domain as a rite
            of passage. I had been hosting HTML/CSS websites for five years by then so I
            dropped CodePen like a dirty diaper when starting the intermediate projects.
          </p>
          <p>
            The student is asked to make a random quote generator (which I turned
            into an <a href='https://codepen.io/f1ux1uxday/full/PWabRN' className='blog-link'
            target='blank'>insult generator</a>), a <a href='http://gilganesh.com/ACE/weather.html'
            className='blog-link' target='blank'> local weather app</a>, a <a
            href='http://zenradsyndicate.com/wikisearch.html' className='blog-link' target='blank'>
            Wikipedia search interface</a>, and a <a href='http://gilganesh.com/ACE/twitch.html'
            className='blog-link' target='blank'> twitch.tv user list</a>. These were reasonable
            assignments given where they fit into the larger curriculum. Fair enough. I most
            enjoyed making the Wikipedia search interface and occasionally type random words into
            it for fun.
          </p>
          <h5 className='blog-section-heading'>Intermediate Algorithm Scripting</h5>
          <p>
            Upon completion of the intermediate projects, the student is ushered into a
            gauntlet of 21 intermediate algorithm challenges. Too many to list in full,
            but the student must demonstrate sufficient competency to translate any given
            string into pig latin, write a search and replace function, sum all odd
            fibonacci numbers, convert arabic numerals into roman numberals, and translate
            binary strings into English. Some of these challenges caused heaps of frustration
            that could only be dispelled by going very s l o w l y, breaking the problem
            into the smallest pieces possible and taking them one at a time. I had to develop
            a process for getting unstuck, and that process has aided me in every subsequent
            endeavor.
          </p>
          <p>
            The way freeCodeCamp is designed sacrifices actual instruction for its
            REPL-like features and interactive user interface. To put it another way,
            freeCodeCamp offers a relatively unique platform that guides users through a
            series of increasingly difficult challenges. However, it provides little
            instruction on how to use the techniques/features needed to solve the challenge.
            This has both positive and negative consequences. It compels some users to dig
            through the documentation, experiment, and learn to debug like pros. Teaching
            the programmer how to fish rather than feeding him for a day, if you will. On the
            other hand, I'm sure it also compels some users to break things in blind rage.
          </p>
          <h5 className='blog-section-heading'>Advanced Algorithm Scripting</h5>
          <p>
            A battery of nine advanced algorithm challenges, tallying 47 in total. Students
            must validate phone numbers using regular expressions, update JSON data in a
            collection, merge inventory lists, dynamically return coinage for exact change
            (one nickel and two pennies), return the symmetric difference of any two
            arrays, take a given string and return all possible permutations without
            repeated consecutive letters (aa, bb, et cetera). These were definitely more
            complicated than the intermediate set, however the experience previously
            gained gave the advanced algorithms a lower relative difficulty. In other words,
            having learned how to become unstuck results in less time spent stuck, which
            results in fewer urges to hulk-smash nearby objects.
          </p>
          <h5 className='blog-section-heading'>Advanced Front-End Projects</h5>
          <p>
            I have already written about the final two advanced projects, so I won't repeat
            myself here. Before <a href='http://tictactorment.herokuapp.com' target='blank'
            className='blog-link'>Tic Tac Torment</a> and <a href='http://simon-joe.herokuapp.com'
            className='blog-link' target='blank'>Simon Joe, Memory Cat</a> I made a
            colorful calculator using <a href='http://gilganesh.com/ACE/calc.html'
            className='blog-link' target='blank'>jQuery</a>. After that, I started
            experimenting with the React framework and concocted a little tool I call the <a
            href='http://hypno-timer.herokuapp.com' className='blog-link' target='blank'>
            Hypno-Timer</a>. React is awesome! Conditional rendering allows for speedy and 
            efficient web applications, reducing unnecessary computation to maximize
            available resources. Learn React.
          </p>
          <h5 className='blog-section-heading'>The Gestalt</h5>
          <p>
            freeCodeCamp offers an interactive platform where newcomers can explore JavaScript,
            and HTML/CSS to a lesser extent. And freeCodeCamp offers a sense of direction, a
            map to serve as a guide toward progress. These are what freeCodeCamp does well. It
            frequently says <em>what</em> must be done but explains little about <em>how</em>
            it can be done. One must find their own way. freeCodeCamp is not a platform designed
            to impart passive knowledge; there is no A/V lecture content in this course. If one
            approaches freeCodeCamp expecting a 'coding bootcamp' experience, they surely will
            not find it here. Meanwhile 'coding bootcamps' are steadily going out of business,
            having so much additional overhead having to maintain physical locations and pay the
            faculty. freeCodeCamp is a non-profit organization and seems likely to stick around
            for a while.
          </p>
          <p>
            The broader context and education that freeCodeCamp lacks is readily and freely
            available across the web. For self-taught programmers there is no shortage of
            information but rather a dearth of meaningful guidance. freeCodeCamp offers that
            and a digital sandbox to flop around in, little else. And it works fairly well.
            If one is willing to get stuck and cultivate knowledge from sources found
            elsewhere, freeCodeCamp can be a useful angle in an autodidactic approach. If one
            simmply wishes to goof arund with JS for a while, freeCodeCamp is good for that
            too. No admission fees, no financial risk in the event one loses interest.
          </p>
          <p>
            Having said all that, it seems freeCodeCamp would have students rely on CodePen
            for much longer than is truly helpful. Students are allowed to remain in the
            safe confines of CodePen for all of the front-end projects. I think that insulates
            the student from a lot of inevitabilities: becoming one with a chosen text editor,
            setting up a development environment, modular approaches to JavaScript, using build
            tools like Webpack, and getting servers to actually serve one's crappy code.
          </p>
          <p>
            What ultimately matters is not what school or institution a person may pass through.
            A dedicated person is bound to achieve competency sooner or later, a point which I
            think is too often left out of the conversation. Quoting Nietzsche, "He who has a
            why can bear almost any how". If one is resolved toward a goal or purpose, one
            becomes immersed and can traverse great distance by momentum alone.
          </p>
          <p className='blog-section-heading'>
            Here are a few sources of information I have found helpful.
          </p>
          <p className='blog-section-heading'>
            <a href='http://stackoverflow.com'>
              Stack Overflow
            </a><br/>
            <a href='https://jsbooks.revolunet.com/'>
              JSbooks
            </a><br/>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              JavaScript Documentation at Mozilla Development Network
            </a><br/>
            <a href='https://www.reddit.com/r/learnprogramming/wiki/faq'>
              Learn Programming FAQ
            </a><br/>
            <a href='https://www.youtube.com/user/shiffman'>
              The Coding Train
            </a><br/>
            <a href='http://www.codingheroes.io/resources/'>
              Jonas' Resources For Building Beautiful Websites
            </a><br/>
            <a href='https://www.udemy.com/the-web-developer-bootcamp/'>
              The Web Developer Bootcamp by Colt Steele
            </a><br/>
            <a href='https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/'>
              Mastering the Modern Workflow
            </a><br/>
          </p>
        </div>
      </div>
    )
  }
}

export default FreeCodeBlog
