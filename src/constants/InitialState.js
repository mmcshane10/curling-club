export const initialState = {
  currentUser: {
  email: null,
  displayName: null,
  uid: null,
  },
  dailyMatches: {},
  memberLeagues: {
    1: {
      day: 'Monday',
      time: '12:00pm',
      level: 'Beginner',
      weeks: '8',
      cost: '$184',
      members: {},
      capacity: 24
    },
    2: {
      day: 'Monday',
      time: '6:00pm',
      level: 'Beginner',
      weeks: '10',
      cost: '$230',
      members: {},
      capacity: 24
    },
    3: {
      day: 'Tuesday',
      time: '6:00pm',
      level: 'Advanced',
      weeks: '12',
      cost: '$276',
      members: {},
      capacity: 24
    },
    4: {
      day: 'Wednesday',
      time: '6:00pm',
      level: 'Intermediate',
      weeks: '10',
      cost: '$230',
      members: {},
      capacity: 24
    },
    5: {
      day: 'Wednesday',
      time: '8:30pm',
      level: 'Beginner',
      weeks: '12',
      cost: '$276',
      members: {},
      capacity: 24
    },
    6: {
      day: 'Thursday',
      time: '6:00pm',
      level: 'Beginner',
      weeks: '12',
      cost: '$276',
      members: {},
      capacity: 24
    },
    7: {
      day: 'Friday',
      time: '7:00pm',
      level: 'Intermediate',
      weeks: '10',
      cost: '$230',
      members: {},
      capacity: 24
    },
    8: {
      day: 'Saturday',
      time: '2:00pm',
      level: 'Beginner',
      weeks: '8',
      cost: '$184',
      members: {},
      capacity: 24
    },
    9: {
      day: 'Saturday',
      time: '5:00pm',
      level: 'Intermediate',
      weeks: '10',
      cost: '$230',
      members: {},
      capacity: 24
    },
    10: {
      day: 'Sunday',
      time: '2:00pm',
      level: 'Advanced',
      weeks: '12',
      cost: '$276',
      members: {},
      capacity: 24
    },
  },
  memberBonspiels: {
    1: {
      name: 'Boospiel',
      startDate: '10-25-2019',
      endDate: '10-27-2019',
      cost: '$175',
      members: {},
      capacity: 36,
      description: 'Join us for the fourth annual Halloween BooSpiel!  Prizes for the best costumes. This is a traditional "ABC" bracket bonspiel with event prize winners and a 3 game guarantee. Come scare up some fun with us!'
    },
    2: {
      name: 'MOPAC Mixed Doubles Championship',
      startDate: '11-08-2019',
      endDate: '11-10-2019',
      cost: '$250',
      members: {},
      capacity: 36,
      description: '4 pools of 4 teams each followed by semifinals and finals on Sunday. 4 game guarantee. Teams that do not reach the QFs will play consolation games.'
    },
    3: {
      name: 'Family Tree',
      startDate: '12-28-2019',
      endDate: '12-28-2019',
      cost: '$75',
      members: {},
      capacity: 24,
      description: 'Your family team will play two 4-end (one hour) games. Our theme this year is Dinosaurs. So name your team after your favorite Triassic, Jurassic or Cretaceous reptiles. Families must include four or more people.   At least two of them must be "kin", i.e., related by blood or marriage, but others may be "adopted" for the bonspiel.   Add as many people as you like and substitute freely during each game.'
    },
    4: {
      name: 'Curling: The Gathering',
      startDate: '12-31-2019',
      endDate: '12-31-2019',
      cost: '$100',
      members: {},
      capacity: 24,
      description: 'For the second time, on New Years Eve, we will be holding an informal Curling: The Gathering bonspiel. Curling The Gathering is a humorous bonspiel format where teams have cards that they can use to place extra stones or handicap their opponents in strange ways. 4 cards will be dealt randomly per team per draw. They can be used during that game only. This event will be a casual 3 draw bonspiel with each game running 4 ends.'
    },
    5: {
      name: 'DIY Bonspiel',
      startDate: '01-24-2020',
      endDate: '01-26-2020',
      cost: '$200',
      members: {},
      capacity: 36,
      description: 'Bring your Team Spirit to the DIY Bonspiel by wearing your favorite high school, college or professional team\'s colors.This fun, low- cost, pot luck food weekend is a fantastic opportunity to team with different curlers, meet new members, and show off a favorite team.ABC format bonspiel, three game guarantee, and possibly some Team Fight Songs floating around the warm room.'
    },
    6: {
      name: 'Bridgetown Bonspiel',
      startDate: '02-21-2020',
      endDate: '02-23-2020',
      cost: '$200',
      members: {},
      capacity: 48,
      description: 'Celebrating decades of American Top 40 songs, this 3 game guarantee bonspiel will have an ABC format with event prize winners.  Get your entry in early! All types of teams welcomed.'
    },
    7: {
      name: 'USWCA 5 & Under',
      startDate: '03-20-2020',
      endDate: '03-22-2020',
      cost: '$150',
      members: {},
      capacity: 24,
      description: 'A bonspiel for curlers with 5 or less years of curling experience! This year the USWCA is sponsoring the event and there will be pins for pool winners.  (You do not need to be a member of the USWCA to participate.)This bonspiel is open to both men and women, and teams may consist of any combination of men and women.'
    },
  }
};