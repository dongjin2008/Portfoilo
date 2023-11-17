import Image from 'next/image'
import cloud from './assets/cloud.svg'
import flask from './assets/flask.svg'
import Head from 'next/head'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full h-screen flex justify-center items-center ">
        <div className="flex justify-center flex-col align-middle my-auto gap-[5.19rem]">
          <h1 className="font-extrabold text-secondary text-center">Hello, I'm <span className="text-accent">DongJin Kim</span>. <br/> I'm a full stack developer.</h1>
          <a href="#project" className="flex justify-center items-center mx-auto border-4 rounded-[2rem] border-secondary w-[26.13rem] h-[8.56rem] text-secondary font-medium text-lg">My work</a>
        </div>
      </section>

      <section className="w-full h-screen flex justify-center items-center mb-[300px]">
        <div className="flex flex-col justify-center gap-[64px]">
          <h1 className="text-secondary font-bold text-center">ABOUT</h1>
          <div className="flex flex-col mx-auto gap-[46px]">

            <div className="flex gap-[30px]">
              <div className="w-[39.69rem] h-[25rem] bg-secondary rounded-[2rem] flex pl-[3.94rem]">
                <div className="bg-secondary flex justify-center flex-col">
                  <h4 className="font-bold text-accent bg-secondary w-full text-left">whoami.json</h4>
                  <h3 className="bg-secondary text-primary font-bold text-base">&#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;"Full Stack Developer",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"UI&UX Designer",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"15 years old Student",<br/>&#125;</h3>
                </div>
              </div>

              <div className="w-[39.69rem] h-[25rem] flex justify-center items-center">
                <h2 className="text-secondary text-center font-medium">"<span className="text-accent">Love your work,</span><br/>life's joy"</h2>
              </div>
            </div>

            <div className="flex gap-[1.88rem]">
              <div className="w-[39.69rem] h-[25rem] flex justify-center items-center">
                <h2 className="text-secondary text-center font-medium">"Don't be busy<br/><span className="text-accent">be productive</span>"</h2>
              </div>

              <div className="w-[39.69rem] h-[25rem] bg-secondary flex rounded-[2rem] pl-[3.94rem]">
                <div className="bg-secondary flex justify-center flex-col">
                  <h4 className="font-bold text-accent bg-secondary w-full text-left">hoppy.json</h4>
                  <h3 className="bg-secondary text-primary font-bold">&#123; <br/>&nbsp;&nbsp;&nbsp;&nbsp;"Table Tennis",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"Cello",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"Gaming",<br/>&#125;</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="flex my-auto flex-col gap-[4rem] w-screen h-screen">
        <h1 id="project" className="text-secondary font-bold text-center">PROJECT</h1>
        <div className="w-[81.25rem] h-[53rem] rounded-[2rem] mx-auto py-[2em] flex justify-center items-center bg-secondary">
          <div className="bg-secondary grid grid-cols-3 gap-[4.88rem] ">
            <div className="group bg-[black] hover:bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl flex flex-col justify-center gap-[1rem]">
              <Image className="h-[4rem] group-hover:hidden bg-[black]" src={cloud} alt='cloud'/>
              <h3 className="text-[white] bg-[black] group-hover:hidden font-bold text-center">Weather App</h3>

              <h4 className="font-bold hidden group-hover:block text-center text-secondary">Weather App</h4>
              <h5 className="font-medium hidden group-hover:block text-center text-secondary">Simple weather app <br/> made with Next.JS</h5>
              <a className="font-medium text[16px] hidden group-hover:block text-center text-accent" href="https://weather-app-v2-vert.vercel.app/" target="_blank">Go to this project</a>
            </div>
            <div className="group bg-[#7D4F59] hover:bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl flex flex-col justify-center gap-[1rem]">
              <Image className="h-[4rem] group-hover:hidden bg-[#7D4F59]" src={flask} alt='flask'/>
              <h3 className="text-[#D8D2C0] bg-[#7D4F59] group-hover:hidden font-bold text-center">Chemix</h3>

              <h4 className="font-bold hidden group-hover:block text-center text-secondary">Chemix</h4>
              <h5 className="font-medium hidden group-hover:block text-center text-secondary"> Chemistry dashboard <br/> made with Vue</h5>
              <a className="font-medium text[16px] hidden group-hover:block text-center text-accent" href="https://chemix.vercel.app/" target="_blank">Go to this project</a>
            </div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
            <div className="bg-primary w-[19.38rem] h-[12.13rem] rounded-2xl"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
