import React, { Component } from 'react'

import ThumbSim from '../assets/simon-joe.png'
import ThumbGil from '../assets/ganesh.png'
import ThumbHyp from '../assets/hypno-timer.png'
import ThumbTic from '../assets/ttt.png'
import ThumbWea from '../assets/weather.png'
import ThumbWik from '../assets/wikisearch.png'
import ThumbMed from '../assets/e1.png'
import ThumbSuf from '../assets/e4.png'
import ThumbNyu from '../assets/e2.png'


class ExpDisplay extends Component {
    showDescription(num) {
        this.props.getDescription(num)
    }

    describer() {
        if (this.props.descript === '0') {
            return (
                <p className='exp-desc'>
                    my work experience
                </p>
            )
        }
        if (this.props.descript === '1') {
            return (
                <p className='exp-desc'>
                    Meditab
                </p>
            )
        }
        if (this.props.descript === '2') {
            return (
                <p className='exp-desc'>
                    NYU
                </p>
            )
        }
        if (this.props.descript === '3') {
            return (
                <p className='exp-desc'>
                    SuffixTree
                </p>
            )
        }
    }

    render() {
        return (
            <div className='exp-display'>
                {this.describer()}
                <div className='expthumbnail-box'>
                    <div className='first row'>
                        <div className='exprow-item'
                            onMouseOver={this.showDescription.bind(this, '1')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='https://simon-joe.herokuapp.com' target='blank'>
                                <img className='expthumbnail' src={ThumbMed} alt='' />
                            </a>
                        </div>
                        {/* <div className='row-item'
                            onMouseOver={this.showDescription.bind(this, '2')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='http://tictactorment.herokuapp.com' target='blank'>
                                <img className='thumbnail' src={ThumbTic} alt='' />
                            </a>
                        </div>
                        <div className='row-item'
                            onMouseOver={this.showDescription.bind(this, '3')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='http://hypno-timer.herokuapp.com' target='blank'>
                                <img className='thumbnail' src={ThumbHyp} alt='' />
                            </a>
                        </div> */}
                    </div>
                    <div className='second row'>
                        <div className='exprow-item'
                            onMouseOver={this.showDescription.bind(this, '2')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='http://zenradsyndicate.com/wikisearch.html' target='blank'>
                                <img className='expthumbnail' src={ThumbNyu} alt='' />
                            </a>
                        </div>
                        {/* <div className='row-item'
                            onMouseOver={this.showDescription.bind(this, '5')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='http://gilganesh.com/ACE/weather.html' target='blank'>
                                <img className='thumbnail' src={ThumbWea} alt='' />
                            </a>
                        </div>
                        <div className='row-item'
                            onMouseOver={this.showDescription.bind(this, '6')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='http://gilganesh.com' target='blank'>
                                <img className='thumbnail' src={ThumbGil} alt='' />
                            </a>
                        </div> */}
                    </div>
                    <div className='third row'>
                        <div className='exprow-item'
                            onMouseOver={this.showDescription.bind(this, '3')}
                            onMouseOut={this.showDescription.bind(this, '0')}>
                            <a href='https://simon-joe.herokuapp.com' target='blank'>
                                <img className='expthumbnail' src={ThumbSuf} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpDisplay
