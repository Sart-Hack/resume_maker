var prompt = `Generate an Executive Summary for a resume. The details are as follows:
Experience : {
# VP of Global Communications
- company: Springfield International Human Rights Outreach
  position: VP of Global Communications
  duration: Oct, 2013 &mdash; Present
# Director of Digital Stratgy
- company: United Nations Human Rights Council
  position: Director of Digital Strategy
  duration:  Jun, 2010 &mdash; Sept, 2013
}
Skills{
# Organizational leadership
- skill: Organizational leadership
  description: I have several years of experience leading organziations from community groups to business departments. From public speaking, to mentoring, to coordination of people and events, I can lead in any context.

# Communications strategy
- skill: Communications strategy
  description: Content and marketing strategy,

# Digital content development and creation
- skill: Digital content development and creation
  description: Copy writing, graphic design, web design, front-end web development, print design
}
Recognitions{
- award: Outstanding Achievement
  organization: Springfield Young Professionals
  year: 2010, 2014
  summary: Awarded the Outstanding Achievement award for contributions made to the community and professional accomplishments.

- award: Most Likely To Succeed
  organization: Springfield High School
  year: 2004
  summary: Voted Most Likely To Succeed by a panel of my high school peers.
}

Summary : `

const fs = require("fs");
const yaml = require("js-yaml");

try {
  const fileContents = fs.readFileSync("./_data/experience.yml", "utf8");
  const data = yaml.load(fileContents);

  console.log(data);
} catch (e) {
  console.log(e);
}