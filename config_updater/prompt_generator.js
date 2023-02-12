const fs = require("fs");
const yaml = require("js-yaml");

const ExperienceContents = fs.readFileSync("./_data/experience.yml", "utf8");
const ExperienceData = yaml.load(ExperienceContents);
const ExperienceString = JSON.stringify(ExperienceData)

const SkillsContents = fs.readFileSync("./_data/skills.yml", "utf8");
const SkillsData = yaml.load(SkillsContents);
const SkillsString = JSON.stringify(SkillsData)


const RecognitionsContents = fs.readFileSync("./_data/recognitions.yml", "utf8");
const RecognitionsData = yaml.load(RecognitionsContents);
const RecognitionsString = JSON.stringify(RecognitionsData)




const prompt = `Generate an Executive Summary for a resume. The details are as follows:
Experience : ${ExperienceString}
Skills: ${SkillsString}
Recognitions : ${RecognitionsString}

Summary : `



const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.2,
    max_tokens: 150
  });
  console.log(completion.data.choices[0].text);
}

runCompletion();