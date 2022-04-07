import React from 'react'
import './style.css'
import award from '../../img/award.png'

const Left = ()=> (
    <div className='a-left'>
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-img" />
        </div>
    </div>
)
const Right= ()=> (
  <div className="a-right">
    <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          As you Know My name is Jay I am Tanzanian and I Love Computers and Bitches and Parties and Money and Investing and Finance and Economics.
        </p>
        <p className="a-desc">
          My Programming Career <br/> I first heard about coding and web development , when I was still in 8th grade 
          Highschool @ Jozi /eGoli/Joburg , These family friends where founders of a software deve firm. Anywasy short story is they kinda influenced me
          to study IT and I enjoyed the subject .  Over 4 yrs of Programming xp I have learnt <br/>
          <list>
            <li> Java - My base Language Learnt At High School</li>
            <li> HTML ,CSS ,JS - Got momentarily interested with web dev</li>
            <li> C# - Got Interested with Game Dev so I learnt it with Unity Game Engine</li>
            <li> React - Landed a Short Internship and I needed useful web skills so i learnt it</li>
            <li> Python - Used it for Backend 4 my React applications using fastapi , also got intrested with data science</li>
            <li> A bit of Flutter - got interested in mobile app dev after messing around with Android Studio</li>
            <li> Node JS - currently Learning Node JS</li>
          </list>
          <br/>
          Fun Fact I built This website using React JS <br/> BTW I have a trash YT channel
        </p>
        <Award awardImage={award} 
              title ="International Design Awards 2021"
              desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores unde cupiditate quia porro nostrum magni velit distinctio nemo hic, deleniti totam consequuntur fuga adipisci voluptatum, commodi quam, quibusdam harum."

        />
  </div>
)
const Award = ({title ,awardImage,desc})=> (
  <div className="a-award">
          <img src={awardImage} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">{title}</h4>
            <p className="a-award-desc">
              {desc}
            </p>
          </div>
        </div>
)
const About = () => {
  return (
    <div className='about'>
        <Left/>
        <Right/>
    </div>
  )
}

export default About