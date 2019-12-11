import React from 'react';
import './History.css';
import ECC from '../img/ECCice.jpg'

function History() {
  return (
    <section className='history'>
      <div className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading'>
            History of The ECC
          </h2>
        </div>

        <div className='row'>
          <div className='col-1-of-2'>
            <img className='history-img' src={ECC} alt='image of ECC sheets'/>
            <p className='paragraph'>  Evergreen Curling Club was the first of the “second wave” curling clubs formed in the excitement surrounding the 2002 Olympics. In January of 2002 Doug Schaak and Cheryl Doucette met to discuss the formation of a curling club in the Portland/Vancouver area. The first question they asked was, How do you start a curling club?! At that time little information was available about how to start an arena club, so the two of them felt they were starting from scratch, with help from Dave Peck and Jerome Larson of SFBACC. Doug lived close to Mt. View Ice Arena in Vancouver and eventually convinced manager Tom Bahls to hold an open house in the fall. On October 19, 2002, and with the help of a front-page Oregonian article announcing the formation of the club, ECC held its first official event on two sheets of crudely made curling ice.</p>

            <p className='paragraph'>  After curling at Mt. View for two seasons, ECC was approached by the manager of the Lloyd Center Ice Rink in Portland to curl there instead. Due to the late draw times and rising hourly rates at Mt. View, ECC accepted the offer and began curling at Lloyd Center in 2004, remaining there until 2012 when the club transitioned to a dedicated ice facility in Beaverton. The person most responsible for this successful transition was Bruce Irvin, a transplant from Wisconsin who wanted to get back into curling again. Bruce and Doug Schaak met during the summer of 2010 to discuss the prospect of finding a suitable warehouse, based on the model used by Columbus Curling Club. Stu Cohen, president of CCC, and Doug Schaak had met in 2008 when curling in Club Nationals in Mankato, Minnesota, and Bruce was convinced that this model could work for ECC. In March of 2011 ECC held a fundraising dinner at the East Portland Community Center, and over $40,000 was raised that night toward the effort. From that night forward it was clear that the club had the momentum necessary to see this dream through to reality. ECC was on its way!</p>

            <p className='paragraph'>  After touring many sites all around the Portland metro area, then president Steve Liske and Bruce Irvin, among others, made the decision to sign a lease for a rented space in Beaverton. Membership swelled to 115 during the first season, and by 2016 ECC hit a new high of 229 members, with leagues every night of the week. ECC now holds bonspiels, MoPac playdowns, and many corporate and private events and has been able to pay back a significant amount of the debt accrued during the buildout process. Since 2012 other clubs, including Fort Wayne CC in Indiana and Coyotes CC in Arizona, have used the same warehouse model to establish successful clubs of their own. ECC members should be proud of their history and their current growth and success. Beginning with two people sitting on a living room floor with more enthusiasm than know-how, ECC has blossomed into an established curling club with a strong membership base and an ever-improving level of play, able to provide over 200 members and hundreds of visitors each year with an excellent curling experience that keeps getting better!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;