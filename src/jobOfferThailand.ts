import {
  createHeader,
  createFooter,
  createMain,
  createArticle,
  createSideDiv,
} from "./generalElements";
import "./style.css";


const body: HTMLBodyElement = document.querySelector("body");
body.appendChild(createHeader());
body.appendChild(createMain());
body.appendChild(createFooter());

const main: HTMLElement = document.querySelector("main");
main.classList.add('flex', 'flex-col', 'gap-5', "md:grid", "md:grid-cols-4", 'gap-8');

const heading: string = "Why I declined my first job offer in Thailand";
const articleText: string = `Today I declined a job offer. It was not just the first job offer i received since I am in Thailand (which would be a huge opportunity for me), but also the first job offer ever I declined in my life. This has many different reasons, but the main reason is that I and my time are more worth way more than the company was willing to offer me.
    
    As I said, since I left school, I took the very first job at every possible opportunity. During my search for an apprenticeship, I took the first job offer without asking myself if that's the thing I really wanted to do. After that, I also took the first opportunity for a job as a mechanical engineer.
    
    After that job, I started to study and took the first part time job offer that came accross my way. At the end of my studies I didn't even serarched for other jobs and just continued working in the company where I did my internship.
    
    I was always glad to have the opportunity to even have work. Don't get me wrong I am still glad for that. But I never really asked myself how much I and my skillset are really worth. What value can I provide to the company and does the company make me really feel valued?
    
  I think I have spend enough time making myself small and this is why I committed to staying strong and standing in for myself, not accepting a job offer that pays me round about 600 USD (20.000 THB) less than the average person, just because "it would be a good opportunity to step into the job market and get some experience". I want to feel valued and the number one thing a company can do to show an employee that he is valued is money. Getting some experience doesn't fill your fridge. Neither does it the "well done" from your boss.
    
    It may be the wrong decision for my future. Maybe I don't find another job here in Thailand. Maybe I will be forced to go back to Germany. Maybe this is the best offer I will get in the next months and I will regret this decision. But for now, the decision felt right. I think it's the first time anxiety and the lack of confidence didn't dominate a career decision. To be honest, I am proud of myself for that.`;
const artFooter: string = "07/01/2023 - Bangkok, Thailand";
main.appendChild(createArticle(heading, articleText, artFooter));
main.appendChild(createSideDiv());


