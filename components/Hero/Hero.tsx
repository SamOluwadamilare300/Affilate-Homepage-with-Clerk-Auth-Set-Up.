import { Button } from "@/components/ui/button"
import Link from "next/link"
import GradientText from "../global/gradient-text"
import AnimationContainer from "../global/footer/_components/Animation-container"


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full px-4">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <AnimationContainer  delay={0.2}  
          className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold text-center"
       
        >
          <GradientText element="H1" >  

          Maximize Your Earning Potential <br className="md:hidden" /> with FoldPro Affiliate 
          </GradientText>
        </AnimationContainer>
        <AnimationContainer  delay={0.2} >  
        <p className="text-sm text-zinc-100 text-center text-muted-foreground mt-4 max-w-2xl">
          Unlock unprecedented revenue streams by joining the most powerful 
          affiliate network that transforms your connections into 
          sustainable income opportunities
        </p>
        </AnimationContainer>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 w-full">
          <Link href='/' className="w-full md:w-auto"> 
            <Button
              variant="outline"
              className="rounded-lg bg-transparent text-base w-full md:w-60"
            >
              Watch Demo
            </Button>
          </Link>
          <Link href="/dashboard" className="w-full md:w-auto">
            <Button className="rounded-lg  text-base flex gap-2 w-full md:w-60">
              Get Affiliated
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero