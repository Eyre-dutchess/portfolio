import { Container } from "./component/Container"
import { Footer } from "./component/Footer";
import { FeatureSec } from "./component/mainPage/FeatureSec";
import { HomeSec } from "./component/mainPage/HomeSec";
import { InfoSec } from "./component/mainPage/InfoSec";


export default function Home() {
  return (
    
      <div className="bg-white relative z-40 w-full pt-40 min-h-[100vh] pb-20 text-sky-800/75 lg:pl-[3em]">
        <Container>
          <HomeSec />
          <FeatureSec />
          <InfoSec />
          <Footer />
        </Container>
      </div>
    
  );
}
